import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    padding: 1rem 0;
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    background-color: #fff;    
    position: fixed;
    top: 0;
    z-index: 1004;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);

`;

export const Logo = styled(Link)`
    flex: 0 0 ${100 / 3}%;
    align-self: stretch;
    display: flex;
    justify-content: center;
    img {
        height: 100%
    }

    @media only screen and (max-width: 1000px) {
        flex: 0 0 20%;
    }
`;

export const ListNav = styled.ul`
    flex: 0 0 ${100 / 3}%;
    display: flex;
    justify-content: flex-start;
    position: relative;
    list-style: none;

    @media only screen and (max-width: 1000px) {
        display: none ;
    }
   
`;

export const NavButton = styled(Link)`
    margin: 0 1rem;
    padding: 1rem;
    color: ${(props) => props.theme.colors.primary};
    border-radius : 8px;
    border: none;
    line-height: 1.6rem;
    text-align: center;
    text-transform: uppercase;
    background-color: #fff;
    font-weight: 900;
    font-size: 1.6rem;
    text-decoration: none;
    
    
    :hover {
        background-color: ${props => props.theme.colors.background};
    }

    :link {
        outline: 0;
        border: none;
    }

    @media (max-width: 1000px) {
        line-height: 1.4rem;
        font-size: 1.4rem;
        margin: 0;
    }


    @media (max-width: 375px) {
        margin: 0 .5rem;
    }

`;
export const NavSmall = styled.div`
    @media only screen and (min-width: 1000px) {
        display: none;
    }
    @media only screen and (max-width: 1000px) {
        flex: 0 0 40%;
        display: flex;
        justify-content: flex-start;
    }
`;

export const NavIcon = styled.div`
    
    width: 3rem;
    height: 3rem;
    svg {
        margin-left: 1rem;
        width: 100%;
        height: 100%;
    }
    fill: ${props => props.theme.colors.primary};
`;

export const RightHeader = styled.div`
    flex: 0 0 ${100 / 3}%;
    position: relative;
    align-self: stretch;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem;

    @media only screen and (max-width: 1000px) {
        flex: 0 0 40%;
    }
`;


export const StyledCartIcon = styled(Link)`
    margin-right: 2rem;
    position: relative;

    svg {
        padding-top: .5rem;
        height: 3rem;
        width: 3rem;
        margin-right: 2rem;
        fill:${props => props.theme.colors.primary};

       

    }

    span {
        position: absolute;
        top: 0rem;
        right: 1.7rem;
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
        color: #fff;
        background-color: ${props => props.theme.colors.red};
        display: flex;
        justify-content:center;
        align-items: center;

        @media (max-width: 375px) {
        font-size: 1.2rem;
    }
    }

    @media only screen and (max-width: 1000px) {
        margin-right: 0;

        svg {
            height: 2.5rem;
        width: 2.5rem;
        }
    }
`;

export const StyledUserDashboard = styled.div`
    display: flex;
    align-items: center;
    margin-right: 1rem;
    position: relative;

    img {
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
    }

    span {
        line-height: 1rem;
        font-size: 1.4rem;

        @media only screen and (max-width: 600px){
       display: none;
    }
    }

    

    
`;
export const Dropdown = styled.div`

    position: absolute;
    top: 6rem;
    right: 0;
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
  
    @media (max-width: 1000px) {
    top: 7rem;
    }
    & > *:not(:nth-child(1)) {
        margin-top: 1rem;
    }

`;

export const StyledropdownNav = styled.div`

    position: absolute;
    top: 7rem;
    left: 2rem;
    background-color: #fff;
    border-radius: 8px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;

    & > *:not(:nth-child(1)) {
        margin-top: 1rem;
    }

`;

export const DropdownItem = styled(Link)`
    
    display: inline-block;
    text-align: center;
    width: 10rem;
    text-decoration: none;
    padding: 1rem;
    text-decoration: none;
    color: #000;
    background-color: #fff;
    border-radius: 8px;

    :hover {
        background-color: ${props => props.theme.colors.background}
    }
    :visited {
        color: #000;
    }
`;

export const DropdownLogout = styled.a`
    
    display: inline-block;
    text-align: center;
    width: 10rem;
    text-decoration: none;
    padding: 1rem;
    text-decoration: none;
    color: #000;
    cursor: pointer;

    :hover {
        border-radius: 8px;
        background-color: ${props => props.theme.colors.background}
    }
    :visited {
        color: #000;
    }
`;




