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

const routes = [
    {
        path: '/',
        component: Menu,
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
    }
]

const Body = () => {

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
        </Switch>
    )
}

export default Body;