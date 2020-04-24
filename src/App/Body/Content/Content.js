import React from 'react'
import {
    Route,
    Switch
} from 'react-router-dom';
import Menu from './Menu/Menu';
import Home from './Home/Home';
import Cart from './Cart/Cart';
import User from './User/User';
import { ContentWrapper } from './Styled';


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
        path: '/user',
        component: User
    }
]



const Content = () => {

    return (
        <Switch>
            {routes.map((route, index) => {
                return <Route key={index} path={`${route.path}`}>
                    <ContentWrapper>
                        <route.component />
                    </ContentWrapper>

                </Route>
            })}
        </Switch>
    )
};

export default Content;
