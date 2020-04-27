import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import { StyledBody } from './Styled';
import Auth from '../../components/auth/Auth';
import Menu from '../../components/menu/Menu';
import Cart from '../../components/cart/Cart';
import Home from '../../components/home/Home';

const routes = [
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
        component: Auth,
    }
]

const Body = () => {
    return (

        <Switch>
            {routes.map((route, index) => {
                return <Route key={index} path={`${route.path}`}>
                    <StyledBody>
                        <route.component />
                    </StyledBody>
                </Route>
            })}
        </Switch>

    )
}

export default Body;