import React from 'react';
import sprite from '../../Media/sprite.svg';
import { StyledCartIcon } from '../Styled/Styled';

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