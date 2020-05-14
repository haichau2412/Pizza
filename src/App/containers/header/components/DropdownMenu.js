import React from 'react';
import { Dropdown, DropdownItem } from './StyledHeader';
import { useDispatch } from 'react-redux';
import useClickOutside from './useClickOutSide';
import { history } from '../../../service/History';

const DropdownMenu = ({ auth, toggle }) => {

    const menuRef = React.useRef();
    useClickOutside(menuRef, toggle);
    const dispatch = useDispatch();

    return (
        <Dropdown ref={menuRef} >
            {auth ?

                <DropdownItem to="/home" onClick={() => dispatch({ type: 'logout' })}  >Log out</DropdownItem> :
                <>
                    <DropdownItem to={{ pathname: "/auth/signin", state: { pre: history.location.pathname } }}>Sign in</DropdownItem>
                    <DropdownItem to="/auth/signup" >Sign up</DropdownItem>
                </>

            }

        </Dropdown>
    )
}

export default React.memo(DropdownMenu);