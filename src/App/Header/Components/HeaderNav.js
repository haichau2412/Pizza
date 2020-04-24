import React from 'react';
import { LeftHeader, Logo, ListNav, NavButton } from '../Styled/Styled';
import logo from '../../Media/logo.svg';

const HeaderNav = () => {

    return (
        <LeftHeader>
            <Logo src={logo} alt="Logo" />
            <ListNav>
                <li><NavButton to="/home">Home</NavButton></li>
                <li><NavButton to="/menu">Menu</NavButton></li>
                <li><NavButton to="/cart">Cart</NavButton></li>
            </ListNav>
        </LeftHeader>
    )
}

export default HeaderNav;
