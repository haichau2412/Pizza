import React from 'react';
import sprite from '../../../assets/sprite.svg';
import { StyledCartIcon } from './StyledHeader';
import { useSelector } from 'react-redux';


const getCart = (state) => state.cart;

const CartIcon = () => {

    const cart = useSelector(getCart);
    const { items, total } = cart;

    return (
        <StyledCartIcon>
            <svg>
                <use href={sprite + '#icon-cart'} />
            </svg>
            <span>{items}</span>
        </StyledCartIcon>
    )
}

export default CartIcon;