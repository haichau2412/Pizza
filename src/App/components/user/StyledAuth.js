import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 400px;
    background-color: #fff;
    border-radius: 1rem;
    padding: 5rem 5rem;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);
`
export const FormTitle = styled.span`
    display: block;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    line-height: 1.2;
`;

export const Button = styled.button`
    outline:none;
    background-color: ${(props) => props.theme.colors.primary};
    border: none;
    color: white;
    padding: 1rem 2rem;
    text-align: center;
    display: block;
    margin: 1rem auto;
    cursor: pointer;
    font-size: 1.6rem;
    border-radius: 2rem;    

`;

export const InputField = styled.div`
    position: relative;
    margin: 4rem 0;
`;

export const Label = styled.label`
    font-size: 1.6rem;
    font-weight: 900;
    position: absolute;
    top: -1.5rem;
    margin: 1rem;
    padding: 0 1rem;
    text-transform: uppercase;
    background-color: #fff;
    color: ${(props) => props.theme.colors.primary};
`;

export const Input = styled.input`
    padding: .5rem;
    width: 100%;
    border-radius: .5rem;
    display: block;
    font-size: 1.6rem;
    line-height: 2;
    border: 2px solid ${(props) => props.theme.colors.primary};
    outline:none;    
`;

export const Wrapper = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;