import React, { useState, useCallback } from 'react';
import { StyledUserDashboard } from './StyledHeader';
import photo from '../../../assets/photo.png';
import DropdownMenu from './DropdownMenu';
import { useSelector } from 'react-redux';


const getAuthInfo = (state) => {
    return state.auth
};


const UserDashboard = () => {

    const authInfo = useSelector(getAuthInfo);
    const { authenticated, currentUser } = authInfo;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(pre => !pre);
    }

    const toggleOutside = useCallback(
        () => {
            if (isOpen === true) {
                setIsOpen(false);
            }
        }, [isOpen]);


    return (
        <StyledUserDashboard onClick={toggleMenu} title={authenticated ? 'Log out' : "Signin/Signup"} >
            <img src={photo} alt="User" />
            <span>{currentUser || ''}</span>
            {isOpen ? <DropdownMenu toggle={toggleOutside} auth={authenticated} /> : null}
        </StyledUserDashboard>
    )
}
export default UserDashboard;