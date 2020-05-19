import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import User from '../../components/user/User';
import Menu from '../../components/menu/Menu';
import Cart from '../../components/cart/Cart';
import Home from '../../components/home/Home';
import Confirm from '../../components/home/Confirm';
import History from '../../components/history/History';
import RedirectHome from './RedirectHome';
import { useSelector } from 'react-redux';

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/cart',
        component: Cart,
    },
    {
        path: '/auth',
        component: User,
    },
]

const Body = () => {

    const auth = useSelector((state) => state.auth.authenticated);
    return (
        <Switch>
            {routes.map((route, index) => {
                return <Route key={index} exact={route.exact} path={`${route.path}`}>
                    <route.component />
                </Route>
            })}
            <Route path="/confirm/:hashedToken/:username">
                <Confirm />
            </Route>

            {auth ? <Route path="/history">
                <History />
            </Route> : null}

            <Route path='*' exact={true} component={RedirectHome} />
        </Switch>
    )
}

export default Body;