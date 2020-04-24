import React from 'react'
import { useFormik } from 'formik';
import { FormTitle, InputField, Label, Input, Button, FormContainer } from './Styled';


const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        onSubmit: (values) => {

        }
    })
    const { handleChange, values, handleSubmit } = formik;
    const { username, password } = values;

    return (
        <FormContainer onSubmit={handleSubmit}>
            <FormTitle>Sign Up</FormTitle>
            <form action="#">
                <InputField>
                    <Label htmlFor="username">Username</Label>
                    <Input autoFocus type="text" id="username" name="username" onChange={handleChange} value={username} />
                </InputField>
                <InputField>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="password" name="password" onChange={handleChange} value={password} />
                </InputField>
                <Button type="submit">Sign up</Button>
            </form>
        </FormContainer>
    )
}

export default SignUp
