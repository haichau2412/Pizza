import React from 'react';
import { StyledHeader } from './components/StyledHeader';
import HeaderNav from './components/HeaderNav';
import HeaderEnd from './components/HeaderEnd';
import { useSelector } from 'react-redux';


const getAuthenticated = (state) => state.auth.authenticated;

const Header = () => {

    const isAuthenticated = useSelector(getAuthenticated);
    
    return (
        <StyledHeader>
            <HeaderNav auth={isAuthenticated} />
            <HeaderEnd />
        </StyledHeader>
    )
}

export default Header;
