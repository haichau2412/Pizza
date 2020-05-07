import React from 'react';
import {
    useFormik
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormTitle, InputField, Label, Input, Button, FormContainer, Wrapper } from './StyledAuth';
import { authUserbySignup } from '../../redux/auth/AuthSlice';
import { validateSignup } from './validator';
import { history } from '../../service/History';

const initialValues = {
    username: '',
    password: '',
    email: '',
    confirmedPassword: ''
};

const getAuthenticated = (state) => {
    return state.auth.authenticated
};

const SignUp = () => {

    const isAuthenticated = useSelector(getAuthenticated);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            setSubmitting(true);
            try {
                await dispatch(authUserbySignup({ values, type: 'signup' }));

            }
            catch (error) {

            }
            setSubmitting(false);
        },
        validate: validateSignup
    })

    if (isAuthenticated) {
        history.push('/home');
    }

    const { errors, values, handleChange, handleSubmit, isSubmitting } = formik;
    const { username, password, email, confirmedPassword } = values;

    return (
        <Wrapper>
            <FormContainer onSubmit={handleSubmit}>
                <FormTitle>Sign Up</FormTitle>
                <form>
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
                        <Label htmlFor="confirmedPassword">Confirm Password</Label>
                        <Input type="password" id="confirmedPassword" name="confirmedPassword" onChange={handleChange} value={confirmedPassword} />
                        {errors.confirmedPassword ? <div>{errors.confirmedPassword}</div> : null}
                    </InputField>
                    <Button disabled={isSubmitting} type="submit">Sign up</Button>
                </form>
            </FormContainer>
        </Wrapper >
    )
}

export default SignUp
