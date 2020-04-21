import React from 'react';
import styled from 'styled-components';
import logo from '../icons/logo.svg';

const LeftNav = styled.div`
    display: flex;
    position: relative;

    img {
        position: absolute;
        top: -1.5rem;
        left: -1.5rem;
        height: 8rem;
    }   

    ul {
    margin-left: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    }
    
    li button {
        margin: 0 1rem;
        display: inline-block;
        padding: .5rem 1rem;
        color: ${props => props.theme.colors.darkRed};
        border-radius : 2rem;
        border: none;
        text-align: center;
        text-decoration: none;
        font-size: 1.6rem;
        border: 2px solid palevioletred;
        background-color:${props => props.theme.colors.darkGrey};
    }

`;

const HeaderNav = () => {
    return (
        <LeftNav>
            <img src={logo} alt="Logo" />
            <ul>
                <li><button>Home</button></li>
                <li><button>Promotio</button></li>
                <li><button>Menu</button></li>
                <li><button>Cart</button></li>
            </ul>
        </LeftNav>
    )
}

export default HeaderNav;
