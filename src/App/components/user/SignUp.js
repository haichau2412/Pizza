import React from 'react';
import {
    useFormik
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { FormTitle, LoadingIcon, InputField, Label, Input, Button, FormContainer, Wrapper, ErrorDiv, NavLink } from './StyledAuth';
import { authUser, resetMsg,resetAuthenticating } from '../../redux/auth/AuthSlice';
import { validateSignup } from './validator';
import Alert from '../sharecomponents/alert/Alert';
import sprite from '../../assets/sprite.svg';

const initialValues = {
    username: '',
    password: '',
    email: '',
    confirmedPassword: ''
};

const getMsg = (state) => {
    return state.auth.msg
};

const getAuthenticating = (state) => state.auth.authenticating;


const SignUp = () => {

    const message = useSelector(getMsg);

    const isAuthenticating = useSelector(getAuthenticating);

    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = React.useState(false);

    const handleClick = () => {
        setIsVisible(false);
    }


    const formik = useFormik({
        initialValues,
        onSubmit: (values, { resetForm }) => {
            dispatch(authUser({ values, type: 'signup' }));
        },
        validate: validateSignup
    })

    React.useEffect(() => {
        dispatch(resetMsg());
        dispatch(resetAuthenticating());
        return () => {
            dispatch(resetMsg());
            dispatch(resetAuthenticating());
        };
    }, [dispatch]);

    React.useEffect(() => {
        if (message && !isAuthenticating) {
            setIsVisible(true);
        }
    }, [message, dispatch, isAuthenticating]);

    const { errors, values, handleChange, handleSubmit, handleBlur } = formik;
    const { username, password, email, confirmedPassword } = values;

    let status = message === 'Confirm email sent' ? 'success' : message === 'Network error' ? 'error' : 'warning';

    return (
        <>
            <Alert status={status} msg={message} isVisible={isVisible} handleClick={handleClick} />
            <Wrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Sign Up</FormTitle>
                    <NavLink to="/auth/signin">Have account ? Please sign in</NavLink>
                    <form>
                        <InputField>
                            <Label htmlFor="username">Username</Label>
                            <Input autoFocus type="text" id="username" name="username" onChange={handleChange} value={username} onBlur={handleBlur} />
                            <ErrorDiv>{errors.username}</ErrorDiv>
                        </InputField>
                        <InputField>
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" name="email" onChange={handleChange} value={email} onBlur={handleBlur} />
                            <ErrorDiv>{errors.email}</ErrorDiv>
                        </InputField>
                        <InputField>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" onChange={handleChange} value={password} onBlur={handleBlur} />
                            <ErrorDiv>{errors.password}</ErrorDiv>
                        </InputField>
                        <InputField>
                            <Label htmlFor="confirmedPassword">Confirm Password</Label>
                            <Input type="password" id="confirmedPassword" name="confirmedPassword" onChange={handleChange} value={confirmedPassword} onBlur={handleBlur} />
                            <ErrorDiv>{errors.confirmedPassword}</ErrorDiv>
                        </InputField>
                        <Button disabled={isAuthenticating} type="submit">Sign up</Button>
                    </form>
                    <LoadingIcon isAuthenticating={isAuthenticating}  >
                        <svg>
                            <use href={sprite + '#icon-spinner2'} />
                        </svg>
                    </LoadingIcon>
                </FormContainer>
            </Wrapper >
        </>
    )
}

export default SignUp
