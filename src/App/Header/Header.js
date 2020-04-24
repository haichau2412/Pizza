import React from 'react';
import { StyledHeader } from './Styled/Styled';
import HeaderNav from '../../components/layout/Header/HeaderNav';
import HeaderEnd from '../../components/layout/Header/HeaderEnd';

const Header = () => {
    return (
        <StyledHeader>
            <HeaderNav />
            <HeaderEnd />
        </StyledHeader>
    )
}

export default Header;
