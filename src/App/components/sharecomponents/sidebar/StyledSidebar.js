import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSidebar = styled.nav`
    background-color: ${(props) => props.theme.colors.primaryDark};
    height: 92vh;
    width: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 8vh;

    @media (max-width: 768px) {
        flex-direction: row;
        width: 100%;
        height: auto;
        z-index: 1000;
    }
    
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

    :hover::before{
        transform: scaleY(1);
        width: 100%;
    }
    :active::before{
        background-color: ${(props) => props.theme.colors.primaryLight};
    }

    @media (max-width: 768px) {
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
        transition: transform .3s,
                    height .3s cubic-bezier(.99,.01,.01,.99) .3s,
                    background-color .1s;
                    
    }   

        :hover::before{
        transform: scaleX(1);
        height: 100%;
        }
        :active::before{
        background-color: ${(props) => props.theme.colors.primaryLight};
    }
    }
`;



export const StyledLink = styled(Link)`
    position: relative;
    z-index: 2;
    display: inline-block;
    text-align: center;

    :link,:visited {
        outline: 0;
        border: none;
        text-decoration: none;
        color: #fff;
        display: block;
        text-transform: uppercase;
        padding: 1.5rem 3rem;
    }

    :focus ${StyledItem} {
        
        transform: scaleY(1);
        width: 100%;
        background-color: ${(props) => props.theme.colors.primaryLight};
    }
    

    
`;