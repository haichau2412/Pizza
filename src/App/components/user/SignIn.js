import React from 'react';
import { FormContainer, FormTitle, InputField, Label, Input, Button, Wrapper } from './StyledAuth';
import {
    useFormik
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { authUserbySignup } from '../../redux/auth/AuthSlice';
import { validateLogin } from './validator';
import { history } from '../../service/History';

const initialValues = {
    username: '',
    password: ''
};

const getAuthenticated = (state) => {
    return state.auth.authenticated
};


const SignIn = () => {


    const isAuthenticated = useSelector(getAuthenticated);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            setSubmitting(true);
            try {
                await dispatch(authUserbySignup({ values, type: 'login' }));
            }
            catch (error) {

            }
            setSubmitting(false);
        },
        validate: validateLogin
    })

    if (isAuthenticated) {
        history.push('/home');
    }


    const { errors, values, handleChange, handleSubmit, isSubmitting } = formik;
    const { username, password } = values;

    return (
        <Wrapper>
            <FormContainer onSubmit={handleSubmit}>
                <FormTitle>Sign in</FormTitle>
                <form >
                    <InputField>
                        <Label htmlFor="username">Username</Label>
                        <Input autoFocus type="text" id="username" name="username" onChange={handleChange} value={username} />
                        {errors.username ? <div>{errors.username}</div> : null}
                    </InputField>
                    <InputField>
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" name="password" onChange={handleChange} value={password} />
                        {errors.password ? <div>{errors.password}</div> : null}
                    </InputField>
                    <Button disabled={isSubmitting} type="submit">Sign in</Button>
                </form>
            </FormContainer>
        </Wrapper>
    )
}

export default SignIn;