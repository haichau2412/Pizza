import React from 'react';
import { StyledHeader, Logo } from './components/StyledHeader';
import HeaderNav from './components/HeaderNav';
import HeaderEnd from './components/HeaderEnd';
import { useSelector } from 'react-redux';
import LOGO from '../../assets/LOGO.svg';
import { Link } from 'react-router-dom';

const getAuthenticated = (state) => state.auth.authenticated;

const Header = () => {

    const isAuthenticated = useSelector(getAuthenticated);

    return (
        <StyledHeader >
            <HeaderNav auth={isAuthenticated} />
            <Logo >
                <Link to='/home' >
                    <img src={LOGO} alt="Pyco Pizza" />
                </Link>
            </Logo>
            <HeaderEnd />
        </StyledHeader>
    )
}

export default Header;
