import React from 'react';
import sprite from '../../../assets/sprite.svg';
import { StyledCartIcon } from './Styled';

const CartIcon = () => {
    return (
        <StyledCartIcon>
            <svg>
                <use href={sprite + '#icon-cart'} />
            </svg>
            <span>8</span>
        </StyledCartIcon>)
}

export default CartIcon;