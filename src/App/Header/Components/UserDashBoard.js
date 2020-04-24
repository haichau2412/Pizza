import React, { useState } from 'react';
import { StyledUserDashboard } from '../Styled/Styled';
import photo from '../../Media/photo.jpg';
import DropdownMenu from '../../../components/layout/Header/DropdownMenu';

const UserDashboard = ({ toggleDashboard }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <StyledUserDashboard onClick={setIsOpen(pre => !pre)} >
            <img src={photo} alt="User" />
            <span>Name</span>
            {isOpen && <DropdownMenu />}
        </StyledUserDashboard>
    )
}
export default UserDashboard;