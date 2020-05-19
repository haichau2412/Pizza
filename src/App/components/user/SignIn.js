import React from 'react';
import { FormContainer, FormTitle, InputField, Label, Input, Button, Wrapper, LoadingIcon, ErrorDiv, NavLink } from './StyledAuth';
import {
    useFormik
} from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { authUser, resetMsg, resetAuthenticating } from '../../redux/auth/AuthSlice';
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
        onSubmit: (values) => {
            dispatch(authUser({ values, type: 'login' }));
        },
        validate: validateLogin
    })

    React.useEffect(() => {
        dispatch(resetMsg());
        dispatch(resetAuthenticating())

        return () => {
            dispatch(resetMsg());
            dispatch(resetAuthenticating())
        }
    }, [dispatch]);

    React.useEffect(() => {
        if (message && !isAuthenticating) {
            setIsVisible(true);
        }
    }, [message, dispatch, isAuthenticating]);

    React.useEffect(() => {
        if (isAuthenticated) {
            if (history.location?.state?.pre === '/cart' && history.location.state.items !== 0) {
                history.push('/cart');
            }
            else {
                history.push('/menu');
            }
        }
    }, [isAuthenticated, dispatch]);

    const { errors, values, handleChange, handleSubmit, handleBlur } = formik;
    const { username, password } = values;

    let status = message === 'Network error' ? 'error' : 'warning';

    return (
        <>
            <Alert status={status} msg={message} isVisible={isVisible} handleClick={handleClick} />
            <Wrapper>
                <FormContainer onSubmit={handleSubmit}>
                    <FormTitle>Sign in</FormTitle>
                    <NavLink to="/auth/signup">Don't have account ? Please sign up</NavLink>
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
                        <Button disabled={isAuthenticating} type="submit">Sign in</Button>
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