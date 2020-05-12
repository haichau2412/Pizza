import styled from 'styled-components';

export const ProductFrame = styled.div`
    margin-left: 10rem;
    padding: 3rem; 
    margin-top: 8vh;
    padding-left: 5rem; 
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    column-gap: 5rem;
    row-gap: 3rem;
    
    @media only screen and (max-width: 1000px) {
        margin-left: 0rem;
        margin-top: 15vh;
    }
`;


export const ImageContainer = styled.div`
    width: 90%;
    height: 20rem;
    overflow: hidden;
    margin: 2rem auto;
`;

export const Image = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    transition: transform .3s;
`;


export const StyledItem = styled.div`
    
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2.5rem;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);
    background-color: #fff;
    position:relative;


    :hover ${Image} {
        transform: scale(1.1);
    }

    ${ImageContainer} {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        z-index: 1;
    }

    p {
        display: inline-block;
        padding: 0 2rem;
        grid-column: 1 / -1;
        font-size: 1.6rem;
    }

    p:nth-of-type(1){
        height: 10rem;
    }

    h5 {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        justify-self: center;
        align-self: start;
        z-index: 3;
        width: 80%;
        font-size: 1.6rem;
        text-align: center;
        padding: 1.25rem;
        background-color: ${props => props.theme.colors.primaryDark};
        color: #fff;
        transform: translateY(20rem);
    }

    button {
        font-family: monospace;
        align-self: end;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        font-size: 1.6rem;
        padding: 1rem 0;
        grid-column: 1 / -1;
        border: none;
        outline: none;
        background-color:  ${props => props.theme.colors.primaryDark};
        color: #fff;
        transition: background-color .1s;
        cursor: pointer;

        :hover,:link{
            background-color:  ${props => props.theme.colors.primaryLight};
        }
    }

    @media only screen and (max-width: 1000px) {
        p,h5,button {
            font-size: 1.4rem;
        }
    }

`;





