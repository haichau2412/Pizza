import React from 'react';
import { StyledAlert } from './AlertStyled';
import sprite from '../../../assets/sprite.svg';

const Alert = ({ menu, status, msg, isVisible, handleClick, handleSuccessOrder }) => {

    React.useEffect(() => {
        let id
        if (msg === 'Order successfully') {
            id = setInterval(() => {
                handleClick()
                handleSuccessOrder();
            }, 1500);
        } else if (isVisible === true) {
            id = setInterval(() => {
                handleClick()
            }, 2500);
        }
        return () => clearInterval(id);
    }, [isVisible, handleClick, msg, handleSuccessOrder]);

    if (msg === 'Confirm email sent') {
        msg = 'A verification link is sent to your email'
    }

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