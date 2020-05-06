import React from 'react';
import { StyledPrice, NavigationButton } from './StyledCart';

const Price = ({ data }) => {
    const { items, total } = data;
    return (
        <StyledPrice>
            <p>Order</p>
            <p>{items} items</p>
            <p>Total</p>
            <p>{`${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total)}`}</p>
            <NavigationButton to="/menu">Continue Orders</NavigationButton>
            <NavigationButton to="/checkout">Checkout</NavigationButton>
        </StyledPrice>
    )
}

export default Price;