import React from 'react';
import { Dropdown, DropdownItem } from './StyledHeader';
import { useDispatch } from 'react-redux';
import useClickOutside from './useClickOutSide';

const routes = {
    unauthenticated: [
        {
            path: '/auth/signin',
            content: 'Sign In',
        },
        {
            path: '/auth/signup',
            content: 'Sign Up',
        }],
    authenticated: [
        {
            path: '/home',
            content: 'Log out',
        }]
}

const DropdownMenu = ({ auth, toggle }) => {

    const menuRef = React.useRef();

    useClickOutside(menuRef, toggle);
    const dispatch = useDispatch();
    const status = auth ? 'authenticated' : 'unauthenticated';

    return (
        <Dropdown ref={menuRef} >
            {auth || routes[status].map((route, index) => {
                return <DropdownItem key={index} to={route.path}>{route.content}</DropdownItem>
            })}
            {!auth || routes[status].map((route, index) => {
                return <DropdownItem to={route.path} onClick={() => dispatch({ type: 'logout' })} key={index} >{route.content}</DropdownItem>
            })}
        </Dropdown>
    )
}

export default React.memo(DropdownMenu);