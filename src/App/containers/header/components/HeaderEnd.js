import React from 'react';
import { RightHeader } from './Styled';
import CartIcon from './CartIcon';
import UserDashboard from './UserDashBoard';

const HeaderEnd = () => {
    return (
        <RightHeader>
            <CartIcon />
            <UserDashboard />
        </RightHeader>
    )
}

export default HeaderEnd;