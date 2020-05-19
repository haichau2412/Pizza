import React from 'react';
import { history } from '../../service/History';


const RedirectHome = () => {

    React.useEffect(() => {
        history.push('/home');
    }, [])
    return (
        <></>
    )
}

export default RedirectHome;