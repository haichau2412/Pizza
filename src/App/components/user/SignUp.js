import React from 'react';
import {
    useFormik
} from 'formik';
import { FormTitle, InputField, Label, Input, Button, FormContainer, Wrapper } from './StyledAuth';
import { signup } from '../../service/UserServices';
const initialValues = {
    username: '',
    password: '',
    email: '',
    confirmedPassword: ''
};

const onSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    try {
        const tooken = await signup(values);
        console.log(tooken);
    }
    catch (error) {

    }
    setSubmitting(false);
};

const validate = (values) => {
    const errors = {};
    const { username, password, email, confirmedPassword } = values;
    if (!email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid email address';
    }

    if (!username) {
        errors.username = 'Required';
    }

    if (!password) {
        errors.password = 'Required';
    }

    if (!confirmedPassword) {
        errors.password = 'Required';
    }
    return errors;

}

const SignUp = () => {
    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    })

    const { errors, values, handleChange, handleSubmit, handleBlur, isSubmitting } = formik;
    const { username, password, email, confirmedPassword } = values;

    return (
        <Wrapper>
            <FormContainer onSubmit={handleSubmit}>
                <FormTitle>Sign Up</FormTitle>
                <form action="#">
                    <InputField>
                        <Label htmlFor="username">Username</Label>
                        <Input autoFocus type="text" id="username" name="username" onChange={handleChange} value={username} />
                        {errors.username ? <div>{errors.username}</div> : null}
                    </InputField>
                    <InputField>
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" name="email" onChange={handleChange} value={email} />
                        {errors.email ? <div>{errors.email}</div> : null}
                    </InputField>
                    <InputField>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" onChange={handleChange} value={password} />
                        {errors.password ? <div>{errors.password}</div> : null}
                    </InputField>
                    <InputField>
                        <Label htmlFor="confirmedPassword">confirmedPassword</Label>
                        <Input type="confirmedPassword" id="confirmedPassword" name="confirmedPassword" onChange={handleChange} value={confirmedPassword} />
                        {errors.confirmedPassword ? <div>{errors.confirmedPassword}</div> : null}
                    </InputField>
                    <Button disabled={isSubmitting} type="submit">Sign up</Button>
                    <pre>{JSON.stringify(values, null, 2)}</pre>
                </form>
            </FormContainer>

        </Wrapper >
    )
}

export default SignUp
