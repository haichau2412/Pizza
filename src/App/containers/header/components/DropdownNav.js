import React from 'react';
import { StyledropdownNav, DropdownItem } from './StyledHeader';
import useClickOutside from './useClickOutSide';

const routes = [
    {
        path: '/home',
        content: 'Home',
    },
    {
        path: '/menu',
        content: 'Menu',
    },
    {
        path: '/cart',
        content: 'Cart',
    },
    {
        path: '/history',
        content: 'History'
    }
]


const DropdownNav = ({ auth, toggle }) => {

    const menuRef = React.useRef();

    useClickOutside(menuRef, toggle);

    return (
        <StyledropdownNav ref={menuRef} >
            {auth || routes.map((route, index) => {
                return <DropdownItem onClick={toggle} key={index} to={route.path}>{route.content}</DropdownItem>
            })}
        </StyledropdownNav>
    )
}

export default React.memo(DropdownNav);