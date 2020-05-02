import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import routes from './routes';

const status = 'unauthenticated';

function User() {
    return (
        <Switch>
            {routes[status].map((route, index) => {
                return (
                    <Route key={index} path={`${route.path}`}>
                        <route.component />
                    </Route>
                )
            })}
        </Switch>
    )
}

export default User;
