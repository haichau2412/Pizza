import React from 'react';
import { StyledAlert } from './AlertStyled';
import sprite from '../../../assets/sprite.svg';

const Alert = ({ menu, status, msg, isVisible, handleClick }) => {
    return (
        <StyledAlert menu={menu} status={status} isVisible={msg ? isVisible : false}>
            <svg>
                <use href={sprite + `#icon-${status}`} />
            </svg>
            <p>{msg}</p>
            <button onClick={handleClick}>
                <svg>
                    <use href={sprite + '#icon-cross'} />
                </svg>
            </button>
        </StyledAlert>
    )
}
export default React.memo(Alert);