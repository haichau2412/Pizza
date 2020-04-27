import React from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';
import {
    Route,
    Switch,
    BrowserRouter as Router
} from 'react-router-dom';
import Sidebar from '../sharecomponents/sidebar/Sidebar';
import routes from './routes';

const routesAuth = [
    {
        path: '/auth/signin',
        component: SignIn,
    },
    {
        path: '/auth/signUp',
        component: SignUp,
    },
]

function Auth() {
    return (
        <Router>
            <Sidebar routes={routes} />
            <Switch>
                {routesAuth.map((route, index) => {
                    return (
                        <Route key={index} path={`${route.path}`}>
                            <route.component />
                        </Route>
                    )
                })}
            </Switch>
        </Router>
    )
}

export default Auth;
