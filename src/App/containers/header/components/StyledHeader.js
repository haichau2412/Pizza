import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    padding: 1rem 0;
    width: 100vw;
    height: 8vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;    
    align-items: center;
    position: fixed;
    top: 0;
    z-index: 1004;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);

    @media (max-width: 375px) {
        height: 16vh;
        font-size: 1.6rem;
        flex-direction: column;
    }

`;

export const ListNav = styled.ul`
    /* margin-left: 8rem; */
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    @media (max-width: 375px) {
        justify-content: space-around;
    }
   
`;

export const NavButton = styled(Link)`
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
    font-size: 2rem;
    text-decoration: none;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1),-2px -2px 15px rgba(255,255,255,1);   
    
    :hover {
        box-shadow: inset 2px 2px 15px rgba(0, 0, 0, 0.1);
    }

    :link {
        outline: 0;
        border: none;
    }

    @media (max-width: 768px) {
        font-size: 1.6rem;
    }


    @media (max-width: 375px) {
        margin: 0 .5rem;
    }

`;

export const LeftHeader = styled.div`
    display: flex;
    position: relative;

    @media (max-width: 375px) {
        width: 100%;
    }
  
`;
export const Logo = styled.img`
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    height: 8rem;
`;

export const RightHeader = styled.div`
    position: relative;
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;

    @media (max-width: 375px) {
        justify-content: space-around;
        font-size: 1.6rem;
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
        font-size: 1.6rem;
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
  
    @media (max-width: 1024px) {
    top: 7rem;
    }
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




