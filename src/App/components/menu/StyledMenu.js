import styled from 'styled-components';

export const MenuWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 92vh;
    margin-left: 15rem;
    padding-top: 1rem;

    @media (max-width: 768px) {
        margin-left: 0rem;
        margin-top: 15vh;
    }
    
    
`;

export const ProductFrame = styled.div`
    flex: 0 0 100%;
    padding: 0 5rem;
    padding-left: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
    column-gap: 5rem;
    row-gap: 3rem;
`;


export const ImageContainer = styled.div`
    
    width: 90%;
    height: 90%;
    height: 20rem;
    overflow: hidden;
    margin: 2rem;
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
    grid-row-gap: 3.5rem;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);
    background-color: #fff;


    :hover ${Image} {
        transform: scale(1.1);
    }

    ${ImageContainer} {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        z-index: 1;
    }

    p {
        grid-column: 1 / -1;
        font-size: 1.6rem;
    }

    h5 {
        grid-row: 1 / 2;
        grid-column: 1 / -1;
        justify-self: center;
        align-self: end;
        z-index: 3;
        width: 60%;
        font-size: 1.6rem;
        text-align: center;
        padding: 1.25rem;
        background-color: ${props => props.theme.colors.primary};
        color: #fff;
        transform: translateY(10%);
    }

    button {
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
        font-size: 1.6rem;
        padding: 1rem;
        grid-column: 1 / -1;
        border: none;
        outline: none;
        background-color:  ${props => props.theme.colors.primary};
        color: #fff;
        transition: background-color .1s;
        cursor: pointer;

        :hover,:link{
            background-color:  ${props => props.theme.colors.primaryLight};
        }
    }

`;

export const CartFrame = styled.section`
    background-color: green;
    flex: 1;
    z-index: 1;
`;






