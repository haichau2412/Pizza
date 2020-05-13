import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSidebar = styled.nav`
    background-color: #000;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 8vh;
    width: 100vw;
    height: auto;
    z-index: 1003;
`;
export const StyledItem = styled.div`
    position: relative;
    width: 20rem;

        :not(:last-child){
            margin-bottom: 0rem;
        }
        ::before {
        width: 100%;
        height: 5px;
        box-sizing: border-box;
        z-index: 1;
        content: "";
        position: absolute;
        top: 0;
        background-color: ${(props) => props.theme.colors.primary};
        transform:  scaleX(0);
        transition: transform .2s,
                    height .2s cubic-bezier(.99,.01,.01,.99) .2s,
                    background-color .1s;
                    
    }   

        :hover::before{
        transform: scaleX(1);
        height: 100%;
        }
        :active::before{
        background-color: ${(props) => props.theme.colors.primaryLight};
    }
`;



export const StyledLink = styled(Link)`
    position: relative;
    z-index: 2;
    display: inline-block;
    text-align: center;
    font-size: 1.6rem;
    padding: 1.5rem 3rem;

    :link,:visited {
        outline: 0;
        border: none;
        text-decoration: none;
        color: #fff;
        display: block;
        text-transform: uppercase;
        
    }

    :focus ${StyledItem} {
        
        transform: scaleY(1);
        width: 100%;
        background-color: ${(props) => props.theme.colors.primaryLight};
    }

    @media (max-width: 1000px) {
        font-size: 1.4rem;
        padding: 1rem 2rem;
    }
    

    
`;