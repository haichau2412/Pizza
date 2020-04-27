import React from 'react';
import { StyledHeader } from './components/Styled';
import HeaderNav from './components/HeaderNav';
import HeaderEnd from './components/HeaderEnd';


const Header = () => {
    return (
        <StyledHeader>
            <HeaderNav />
            <HeaderEnd />
        </StyledHeader>
    )
}

export default Header;
