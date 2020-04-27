import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
    width: 100%;
    height: 8%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => props.theme.colors.quiteLight};    
    align-items: center;
`;

export const ListNav = styled.ul`
    margin-left: 8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    list-style: none;
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
    text-decoration: none;
    box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.1),-2px -2px 15px rgba(255,255,255,1);   
    
    :hover {
        box-shadow: inset 2px 2px 15px rgba(0, 0, 0, 0.1);
    }
`;

export const LeftHeader = styled.div`
    display: flex;
    position: relative;
`;
export const Logo = styled.img`
    position: absolute;
    top: -1.5rem;
    left: -1.5rem;
    height: 8rem;
`;

export const RightHeader = styled.div`
    align-self: stretch;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const StyledCartIcon = styled.div`

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
    top: 58px;
    background-color: #fff;
    border: 1px solid  ${props => props.theme.colors.darkGrey};
    border-radius: .5rem;
    padding: 1rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-size: 1.6rem;
`;

export const DropdownItem = styled(Link)`
    display: inline-block;
    text-decoration: none;
`;





