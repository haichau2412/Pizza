import React from 'react';
import { StyledHeader, Logo } from './components/StyledHeader';
import HeaderNav from './components/HeaderNav';
import HeaderEnd from './components/HeaderEnd';
import { useSelector } from 'react-redux';
import LOGO from '../../assets/LOGO.svg';

const getAuthenticated = (state) => state.auth.authenticated;

const Header = () => {

    const isAuthenticated = useSelector(getAuthenticated);

    return (
        <StyledHeader>
            <HeaderNav auth={isAuthenticated} />
            <Logo to='/home' >
                <img src={LOGO} alt="Pyco Pizza" />
            </Logo>
            <HeaderEnd />
        </StyledHeader>
    )
}

export default Header;
