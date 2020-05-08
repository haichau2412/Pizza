import styled from 'styled-components';

export const FormContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    align-items: center;
    
    background-color: #fff;
    border-radius: 1rem;
    padding: 5rem;
    border-radius: 8px;
    box-shadow: 0 1px 5px rgba(0,0,0,.2);
    font-size: 1.6rem;
    
    form {
        
        width: 30rem;
    }

    @media (max-width: 768px) {
        font-size: 1.2rem;
        form {
            width: 20rem;
        }   
        
    }
`
export const FormTitle = styled.span`
    font-family: monospace;
    display: block;
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primary};
    text-align: center;
    line-height: 1.2;
`;

export const Button = styled.button`
    font-family: monospace;
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
    font-size: 1.6rem;
    padding: .5rem;
    width: 100%;
    border-radius: .5rem;
    display: block;
    line-height: 2;
    border: 2px solid ${(props) => props.theme.colors.primary};
    outline:none;    
`;

export const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 5rem;
    

    @media (max-width: 1024px) {
        padding: 10rem 5rem;
    }
`;