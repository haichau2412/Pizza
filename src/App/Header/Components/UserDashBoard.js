import React, { useState, useCallback } from 'react';
import { StyledUserDashboard } from '../Styled/Styled';
import photo from '../../Media/photo.jpg';
import DropdownMenu from './DropdownMenu';


const UserDashboard = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = useCallback(
        () => {
            setIsOpen(!isOpen)
        },
        [isOpen]
    )

    return (
        <StyledUserDashboard onClick={toggleMenu} >
            <img src={photo} alt="User" />
            <span>Name</span>
            {isOpen && <DropdownMenu />}
        </StyledUserDashboard>
    )
}
export default UserDashboard;