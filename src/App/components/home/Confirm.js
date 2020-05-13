import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { confirmEmail } from '../../redux/auth/AuthSlice';
import { history } from '../../service/History';

const getAuthenticated = (state) => state.auth.authenticated;

const Confirm = () => {
    // const [msg, setMsg] = React.useState('');
    let { hashedToken, username } = useParams();

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(getAuthenticated);

    React.useEffect(() => {
        dispatch(confirmEmail({ hashedToken, username }))
    });

    React.useEffect(() => {
        if (isAuthenticated === true) {
            history.push('/menu');
        }
    }, [isAuthenticated, dispatch]);


    return (
        <>

        </>
    )
}

export default Confirm;