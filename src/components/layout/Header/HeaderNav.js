import React from 'react';
import styled from 'styled-components';
import logo from '../icons/logo.svg';
import { Link } from "react-router-dom";

const SoftButton = styled.button`
    margin: 0 1rem;
    padding: .3rem 1rem;
    color: ${(props) => props.theme.colors.primary};
    border-radius : 2rem;
    border: none;
    line-height: 2rem;
    text-align: center;
    text-transform: uppercase;
    background-color: #fff;
    font-weight: 900;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1),-2px -2px 15px rgba(255,255,255,1);   

    :hover {
        box-shadow: inset 2px 2px 15px rgba(0, 0, 0, 0.1);
    }
`;


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
    
   

`;

const HeaderNav = () => {


    return (
        <LeftNav>
            <img src={logo} alt="Logo" />
            <ul>
                <li><Link to="/home"><SoftButton value="Home">Home</SoftButton></Link></li>
                <li><Link to="/menu"><SoftButton value="Menu">Menu</SoftButton></Link></li>
                <li><Link to="/cart"><SoftButton value="Cart">Cart</SoftButton></Link></li>
            </ul>
        </LeftNav >
    )
}

export default HeaderNav;
