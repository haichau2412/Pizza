import React from 'react';
import { StyledPrice } from './StyledCart';

const Price = () => {
    return (
        <StyledPrice>
            <p>Order</p>
            <p>10 items</p>
            <p>Total</p>
            <p>1.700.000 VND</p>
            <button>Continue Orders</button>
            <button>Checkout</button>
        </StyledPrice>
    )
}

export default Price;