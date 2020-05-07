import React from 'react';
import { LeftHeader, ListNav, NavButton } from './StyledHeader';

const HeaderNav = ({ auth }) => {

    return (
        <LeftHeader>
            {/* <Logo src={logo} alt="Logo" /> */}
            <ListNav>
                <li><NavButton to="/home">Home</NavButton></li>
                <li><NavButton to="/menu">Menu</NavButton></li>
                <li><NavButton to="/cart">Cart</NavButton></li>
                {auth ? <li><NavButton to="/history">History</NavButton></li> : null}
            </ListNav>
        </LeftHeader>
    )
}

export default HeaderNav;
