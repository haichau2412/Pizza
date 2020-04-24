import React from 'react';
import { Dropdown, DropdownItem } from '../Styled/Styled';

const DropdownMenu = () => {

    return (
        <Dropdown>
            <DropdownItem to="/user/signin">Sign in</DropdownItem>
            <DropdownItem to="/user/signup">Sign up</DropdownItem>
        </Dropdown>
    )
}

export default DropdownMenu;