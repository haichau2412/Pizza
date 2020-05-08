import React from 'react';
import {
    useFormik
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormTitle, InputField, Label, Input, Button, FormContainer, Wrapper } from './StyledAuth';
import { authUser, resetMsg } from '../../redux/auth/AuthSlice';
import { validateSignup } from './validator';
import { history } from '../../service/History';
import Alert from '../sharecomponents/Alert';

const initialValues = {
    username: '',
    password: '',
    email: '',
    confirmedPassword: ''
};

const getMsg = (state) => {
    return state.auth.msg
};

const SignUp = () => {

    const message = useSelector(getMsg);

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            setSubmitting(true);
            try {
                dispatch(resetMsg());
                await dispatch(authUser({ values, type: 'signup' }));
            }
            catch (error) {
            }
            setSubmitting(false);
        },
        validate: validateSignup
    })

    React.useEffect(() => {
        if (message === 'Email sent') {
            history.push('/home');
        }
        return () => {
            dispatch(resetMsg());
        };
    }, [message,dispatch]);

    const { errors, values, handleChange, handleSubmit, isSubmitting } = formik;
    const { username, password, email, confirmedPassword } = values;

    const makeAlert = React.useCallback(() => {
        if (message === 'Email sent') {
            alert(`Confirm email has been sent to your email, please check to verify your account and log in again`);
        } else if (message) {
            alert(message);
        }
    }, [message]);


    return (
        <>
            <Alert alert={makeAlert} />
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
        </>
    )
}

export default SignUp
