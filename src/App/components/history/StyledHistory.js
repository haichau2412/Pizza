import styled from 'styled-components';

export const StyledItem = styled.div`
    width: 100%;
    border-radius: 8px;
    background-color: #fff;
`;

export const StyledHistory = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 8vh;
    padding: 5rem;

    p {
        font-size: 1.6rem;
        line-height: 1.6rem;
    }

    ${StyledItem}:not(:first-child){
        margin-top: 2rem;
    }

    @media only screen and (max-width:1000px){
        padding: 4rem 1rem;
    }

    
`;

export const Heading = styled.div`
    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-bottom: 2px solid ${props => props.theme.colors.grey};
    
    h5{
        font-size: 2rem;
        line-height: 2rem;
        display: inline-block;
        font-weight: 600;
        color: ${props => props.theme.colors.primaryDark};
    }

`;

export const Empty = styled.div`
padding: 1rem;
    width: 100%;
    text-align: center;
    font-size: 2rem;
    line-height: 2rem;
    border-radius: 8px;
    background-color: #fff;
`;

export const Details = styled.div`

    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem;

    h5 {
        margin-top: 1rem;
        font-size: 2rem;
        line-height: 2rem;
        font-weight: 600;
        align-self: center;
    }

    @media only screen and (max-width:600px){
        flex-direction: column;
    }
`;

export const Name = styled.div`
    display: flex;
    flex: 0 0 70%;
    p:nth-child(1){
        display: inline-block;
        flex: 0 0 20%;
        color: ${props => props.theme.colors.darkGrey};
    }
    p:nth-child(2){
     margin-left: 1rem;
    }
`;

export const ShippingData = styled.div`
    padding: 1rem;
    display: flex;
    
    p:nth-child(1){
        display: inline-block;
        flex: 0 0 14%;
        color: ${props => props.theme.colors.darkGrey};
    }

    p:nth-child(2){
        margin-left: 1rem;
        display: flex;
        align-items: center;
        flex: 0 0 86%;
        font-weight: 600;
    }
`;

export const ShippingPrice = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
    border-top: 2px solid ${props => props.theme.colors.grey};
    border-bottom: 2px solid ${props => props.theme.colors.grey};
    p:nth-child(1){
        margin-right: 1rem;
        display: inline-block;
        text-align: right;
        flex: 0 0 80%;
        color: ${props => props.theme.colors.darkGrey};
    }

    p:nth-child(2){
        flex: 0 0 20%;
        font-weight: 600;
    }
`;

export const Detail = styled.div`
    padding: 1rem 2rem;
    flex: 0 0 90%;
    display: flex;
    flex-direction: column;
`;

export const Price = styled.p`
text-align: right;
    font-weight: 600;
`;

export const Product = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem;
`;

export const Status = styled.div`
    border-left: 2px solid ${props => props.theme.colors.grey};
    flex: 0 0 10%;
    display: flex;
    flex-direction: column;
    align-items: center;


    p {
        text-align: center;
        margin-top: 2rem;
    }

    @media only screen and (max-width:600px){
        flex-direction: row;
        align-items: flex-end;
        border: none;
        padding: 0 3rem;

        p {
        font-weight: 600;
        margin-top: 0;
        margin-left: 2rem;
    }

    h5 {
        margin: 0;
        color: ${props => props.theme.colors.darkGrey};
        font-weight: 300;
        font-size: 1.6rem;
        line-height: 1.6rem;
    }

    h5::after {
       content:':'
    }
    }
`;