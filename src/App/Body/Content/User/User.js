import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {
    Switch,
    Route
} from 'react-router-dom';

const routes = [
    {
        path: '/user/signin',
        component: SignIn,
    },
    {
        path: '/user/signUp',
        component: SignUp,
    },


]

function User() {
    return (
        <Switch>
            {routes.map((route, index) => {
                return <Route key={index} path={`${route.path}`}>
                    <route.component />
                </Route>
            })}
        </Switch>
    )
}

export default User
