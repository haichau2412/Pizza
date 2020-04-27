import React from 'react';
import {
    Formik,
    useFormik
} from 'formik';
import { FormTitle, InputField, Label, Input, Button, FormContainer, Wrapper } from './StyledAuth';




const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: ''
        },
        onSubmit: (values, { setSubmitting, resetForm }) => {
            console.log(111);
            setSubmitting(true);
            const handleSubmit = async () => {
                try {
                    const resp = await fetch('http://localhost:5000/users', {
                        mode: 'no-cors'
                    });

                    console.log(resp);
                    const result = await resp.json();
                    console.log(result);
                    console.log(333);
                }
                catch (error) {
                    console.log(error)
                }
                setSubmitting(false);
            }
            handleSubmit()
        }

    })

    const { values, handleChange, handleSubmit, handleBlur, isSubmitting } = formik;
    const { username, password, email } = values;
    return (
        <Wrapper>
            <FormContainer onSubmit={handleSubmit}>
                <FormTitle>Sign Up</FormTitle>
                <form action="#">
                    <InputField>
                        <Label htmlFor="username">Username</Label>
                        <Input autoFocus type="text" id="username" name="username" onChange={handleChange} value={username} />
                    </InputField>
                    <InputField>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" onChange={handleChange} value={email} />
                    </InputField>
                    <InputField>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" onChange={handleChange} value={password} />
                    </InputField>
                    <Button disabled={isSubmitting} type="submit">Sign up</Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </form>
            </FormContainer>

        </Wrapper >
    )
}

export default SignUp
