import React from 'react';
import styled from 'styled-components';
import sprite from '../icons/sprite.svg';
import photo from '../images/photo.jpg';

const RightHeader = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CartIcon = styled.div`
    margin-right: 2rem;
    position: relative;
    svg {
        padding-top: .5rem;
        height: 3rem;
        width: 3rem;
        margin-right: 2rem;
        fill: #fff;
    }
    span {
        position: absolute;
        top: 0rem;
        right: 1.7rem;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        color: #fff;
        background-color: ${props => props.theme.colors.darkRed};
        display: inline-block;
        display: flex;
        justify-content:center;
        align-items: center;
    }
`;

const UserDashboard = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;

    img{
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
    }
    span {
        font-size: 1.6rem;
    }
`;

const HeaderEnd = () => {
    return (
        <RightHeader>
            <CartIcon><svg>
                <use href={sprite + '#icon-cart'} />
            </svg>
                <span>7</span>
            </CartIcon>

            <UserDashboard>
                <img src={photo} alt="User" />
                <span>Name</span>
            </UserDashboard>
        </RightHeader>
    )
}

export default HeaderEnd;