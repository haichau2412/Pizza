import React from 'react';
import { Dropdown, DropdownItem } from './Styled';

const DropdownMenu = () => {

    return (
        <Dropdown>
            <DropdownItem to="/auth/signin">Sign in</DropdownItem>
            <DropdownItem to="/auth/signup">Sign up</DropdownItem>
        </Dropdown>
    )
}

export default DropdownMenu;