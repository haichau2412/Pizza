import React from 'react';
import { FormContainer, FormTitle, InputField, Label, Input, Button, Wrapper, LoadingIcon, ErrorDiv } from './StyledAuth';
import {
    useFormik
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { authUser, resetMsg } from '../../redux/auth/AuthSlice';
import { validateLogin } from './validator';
import { history } from '../../service/History';
import Alert from '../sharecomponents/alert/Alert';
import sprite from '../../assets/sprite.svg';


const initialValues = {
    username: '',
    password: ''
};

const getMsg = (state) => {
    return state.auth.msg
};

const getAuthenticating = (state) => state.auth.authenticating;


const getAuthenticated = (state) => {
    return state.auth.authenticated;
};

const SignIn = () => {

    const message = useSelector(getMsg);

    const isAuthenticated = useSelector(getAuthenticated);

    const isAuthenticating = useSelector(getAuthenticating);

    const dispatch = useDispatch();

    const [isVisible, setIsVisible] = React.useState(false);

    const handleClick = () => {
        setIsVisible(false);
    }


    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            setSubmitting(true);
            try {
                dispatch(authUser({ values, type: 'login' }));
            }
            catch (error) {

            }
            setIsVisible(true);
            setSubmitting(false);
        },
        validate: validateLogin
    })

    React.useEffect(() => {
        dispatch(resetMsg());
    }, [dispatch])

    React.useEffect(() => {
        if (isAuthenticated) {
            history.push('/menu');
        }
        return () => {
            dispatch(resetMsg());
        };
    }, [isAuthenticated, dispatch]);

    const { errors, values, handleChange, handleSubmit, isSubmitting, handleBlur } = formik;
    const { username, password } = values;

    let status = message === 'Network error' ? 'error' : 'warning';

    return (
        <>
            <Alert status={status} msg={message} isVisible={isVisible} handleClick={handleClick} />
            <Wrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Sign in</FormTitle>
                    <form >
                        <InputField>
                            <Label htmlFor="username">Username</Label>
                            <Input autoFocus type="text" id="username" name="username" onChange={handleChange} value={username} onBlur={handleBlur} />
                            <ErrorDiv>{errors.username}</ErrorDiv>
                        </InputField>
                        <InputField>
                            <Label htmlFor="password">Password</Label>
                            <Input type="password" id="password" name="password" onChange={handleChange} value={password} onBlur={handleBlur} />
                            <ErrorDiv>{errors.password}</ErrorDiv>
                        </InputField>
                        <Button disabled={isSubmitting} type="submit">Sign in</Button>
                    </form>
                    <LoadingIcon isAuthenticating={isAuthenticating}  >
                        <svg>
                            <use href={sprite + '#icon-spinner2'} />
                        </svg>
                    </LoadingIcon>
                </FormContainer>
            </Wrapper>

        </>
    )
}

export default SignIn;