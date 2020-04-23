import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledMenu = styled.div`
    position: absolute;
    top: 58px;
    background-color: #fff;
    border: 1px solid  ${props => props.theme.colors.darkGrey};
    border-radius: .5rem;
    padding: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;

    a {
        display: inline-block;
        text-decoration: none;
    }
`;

function DropdownItem(props) {
    return (
        <a href="#" >
            {props.children}
        </a>
    )
}

function DropdownMenu() {

    return (
        <StyledMenu >
            <Link to="/user/signin"><DropdownItem >Sign in</DropdownItem></Link>
            <Link to="/user/signup"><DropdownItem >Sign up</DropdownItem></Link>
        </StyledMenu >
    )

}

export default DropdownMenu;