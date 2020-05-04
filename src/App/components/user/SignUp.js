import React, { useCallback } from 'react';
import {
    useFormik
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormTitle, InputField, Label, Input, Button, FormContainer, Wrapper } from './StyledAuth';
import { signup } from '../../service/UserServices';
import { authUserbySignup } from '../../redux/auth/AuthSlice';

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
    else if (confirmedPassword !== password) {
        errors.confirmedPassword = 'ConfirmedPassword not matching'
    }
    return errors;

}

const getName = (state) => {
    return state.auth
};

const SignUp = () => {

    const authInfo = useSelector(getName);
    const dispatch = useDispatch();

    const memoizedCallback = useCallback(() => console.log(authInfo), [authInfo]);

    memoizedCallback();

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            setSubmitting(true);
            try {
                dispatch(authUserbySignup(values));
            }
            catch (error) {

            }
            setSubmitting(false);
        },
        validate
    })

    const { errors, values, handleChange, handleSubmit, isSubmitting } = formik;
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
