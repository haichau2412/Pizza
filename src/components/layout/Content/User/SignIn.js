import React from 'react';
import styled from 'styled-components';

const SignInForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    width: 400px;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 10px 10px 50px ${(props) => props.theme.colors.primaryDark},
    -10px -10px 50px ${(props) => props.theme.colors.primaryLight}; 
    padding: 5rem 5rem;

    span {
        display: block;
        font-size: 3rem;
        color: ${(props) => props.theme.colors.primary};
        text-align: center;
        line-height: 1.2;
    }

    button {
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
    }

`;

const StyledInput = styled.div`
    position: relative;
    margin: 4rem 0;

    label {
        font-size: 1.6rem;
        font-weight: 900;
        position: absolute;
        top: -1.5rem;
        margin: 1rem;
        padding: 0 1rem;
        text-transform: uppercase;
        background-color: #fff;
        color: ${(props) => props.theme.colors.primary};
    }

    input {
        padding: .5rem;
        width: 100%;
        border-radius: .5rem;
        display: block;
        font-size: 1.6rem;
        line-height: 2;
        border: 2px solid ${(props) => props.theme.colors.primary};
        outline:none;
    }
`;




const SignIn = () => {

    return (
        <SignInForm>
            <span>Sign in</span>
            <form action="#">
                <StyledInput>
                    <label htmlFor="username">Username</label>
                    <input autoFocus type="text" id="name" name="name" />
                </StyledInput>
                <StyledInput>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" />
                </StyledInput>
                <button>Sign in</button>
            </form>
        </SignInForm>
    )
}

export default SignIn;