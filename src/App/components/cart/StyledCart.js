import styled from 'styled-components';

export const StyledCart = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 8vh;
    padding: 5rem;
    

    & > * {
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);
    background-color: #fff;
    }

    @media (max-width: 1024px) {
        padding: 3rem;
        margin-top: 8vh;
        flex-direction: column;
       
    }
`;


export const TableHeading = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    text-align: right;
    text-transform: uppercase;
    margin-bottom: 3rem;

    p {
        font-size: 1.6rem;
        justify-self: center;
        font-weight: 800;
    }
    p:nth-child(2) {
        grid-column: 3 / 4;
    }

    @media (max-width: 1024px) {
        display: none;
    }

`;

export const StyledInfo = styled.div`
    flex: 0 0 70%;
    margin-right: 5rem;
    font-size: 1.2rem;
    padding: 1rem;

    @media (max-width: 1024px) {
        margin-bottom: 2rem;
        margin-right: 0;
    }
`;

export const Tag = styled.div`
    text-transform: uppercase;
    font-weight: 800;
    justify-self: start;
`;

export const Description = styled.p`
    justify-self: start;
`;

export const Cost = styled.p`
    justify-self: center;
`;

export const Total = styled.p`
    justify-self: center;
`;

export const Quantity = styled.div`
    display: flex;
    justify-content: center;
    justify-self: center;
    
    button {
        background-color: #fff;
        border-radius: 50%;
        width: 3rem;
        height: 3rem;
        outline: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        box-shadow: 0 1px 5px rgba(0,0,0,.2);

        svg {
            width: 30%;
            height: 30%;
        }
    }
    p {
        padding: 0 1rem;
        text-align: center;
        width: 3rem;
        line-height: 3rem;
        font-weight: 800;
    }

`;

export const Image = styled.div`
    
    margin: 1rem 0;
    height: 10rem;
    width: 80%;
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const InfoFrame = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);

    & > * {   
        align-self: center
    } 

    ${Image} {
        padding: 1rem;
        justify-self: center;
        grid-column: 1/2;
        grid-row: 1/span 2;
    }

    ${Tag} {
        grid-column: 2/3;
        grid-row: 1;
    } 

    ${Description} {
        grid-column: 2/4;
        grid-row: 2;
    }

    ${Cost} {
        grid-column: 3/4;
        grid-row: 1;
    }

    ${Quantity}{
        grid-column: 4/5;
        grid-row: 1;
    }

    ${Total}{
        grid-column: 5/6;
        grid-row: 1;
    }

    @media (max-width: 1024px) {
    
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        text-align: center;
        margin-bottom: 1rem;
        
        & > * {
            justify-self: center;
        } 

        ${Image} {
            height: 20rem;
            grid-row: 1 / 2;
            grid-column: 1 / -1;
            z-index: 1;
        }

        ${Description} {
            grid-column: 1 / -1;
            font-size: 1.6rem;
        }

        ${Tag} {
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
        ${Cost} {
            grid-column: 1 / -1;
            grid-row: auto;
        }      
        
        ${Quantity} {
            grid-column: 1 / -1;
            grid-row: auto;
        }

        ${Total} {
            grid-column: 1 / -1;
            grid-row: auto;
        }
    }
`;



export const StyledPrice = styled.div`
    flex: 0 0 25%;
    align-self: flex-start;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;

    p{
        padding-top: 2rem;
        display: inline-block;
        font-size: 1.6rem;
    }

    p:nth-child(2n) {
        padding-right: 2rem;
        justify-self: end;
    }

    p:nth-child(2n+1) {
        padding-left: 2rem;
        font-weight: 800;
    }

    button {
        font-size: 1.6rem;
        padding: 1rem;
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

    button:nth-of-type(1) {
        border-right: 2px solid ${props => props.theme.colors.primaryLight};
        border-bottom-left-radius: 8px;
    }

    button:nth-of-type(2) {
        border-bottom-right-radius: 8px;
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`;