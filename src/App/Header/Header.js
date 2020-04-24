import React from 'react';
import { StyledHeader } from './Styled/Styled';
import HeaderNav from './Components/HeaderNav';
import HeaderEnd from './Components/HeaderEnd';


const Header = () => {
    return (
        <StyledHeader>
            <HeaderNav />
            <HeaderEnd />
        </StyledHeader>
    )
}

export default Header;
