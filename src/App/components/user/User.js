import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import routes from './routes';

function User() {
    return (
        <Switch>
            {routes.map((route, index) => {
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
