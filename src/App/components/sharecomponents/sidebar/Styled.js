import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSidebar = styled.nav`
    background-color: ${(props) => props.theme.colors.primaryDark};
    flex: 0 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
`;
export const StyledItem = styled.div`
    position: relative;
    width: 100%;
    font-size: 2rem;

    :not(:last-child){
        margin-bottom: 2rem;
    }

    ::before {
        box-sizing: border-box;
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        height: 100%;
        width: 3px;
        background-color: ${(props) => props.theme.colors.primary};
        transform:  scaleY(0);
        transition: transform .2s,
                    width .2s cubic-bezier(.99,.01,.01,.99) .1s,
                    background-color .1s;
                    
    }

    :hover::before {
        transform: scaleY(1);
        width: 100%;
    }
    :active::before{
        background-color: ${(props) => props.theme.colors.primaryLight};
        
    }
`;



export const StyledLink = styled(Link)`
    position: relative;
    z-index: 2;

    :link,:visited {
        outline: 0;
        border: none;
        -moz-outline-style: none;
        text-decoration: none;
        color: #fff;
        display: block;
        text-transform: uppercase;
        padding: 1.5rem 3rem;
    }
    
`;