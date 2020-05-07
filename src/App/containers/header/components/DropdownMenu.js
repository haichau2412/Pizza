import React from 'react';
import { Dropdown, DropdownItem } from './StyledHeader';


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
            path: '/auth/logout',
            content: 'Log out',
        }]
}


const DropdownMenu = ({ auth }) => {
    const status = auth ? 'authenticated' : 'unauthenticated';
    return (
        <Dropdown>
            {routes[status].map((route, index) => {
                return <DropdownItem key={index} to={route.path}>{route.content}</DropdownItem>
            })}
        </Dropdown>
    )
}

export default DropdownMenu;