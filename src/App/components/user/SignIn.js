import React from 'react';
import { FormContainer, FormTitle, InputField, Label, Input, Button, Wrapper } from './StyledAuth';

const SignIn = () => {

    return (
        <Wrapper>
            <FormContainer>
                <FormTitle>Sign in</FormTitle>
                <form action="#">
                    <InputField>
                        <Label htmlFor="username">Username</Label>
                        <Input autoFocus type="text" id="name" name="name" />
                    </InputField>
                    <InputField>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" />
                    </InputField>
                    <Button>Sign in</Button>
                </form>
            </FormContainer>
        </Wrapper>
    )
}

export default SignIn;