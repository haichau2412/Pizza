import React from 'react'
import {
    useParams,
    Route,
    Switch
} from 'react-router-dom';

import Cart from './Content/Cart/Cart';
import Home from './Content/Home/Home';
import Menu from './Content/Menu/Menu';
import User from './Content/User/User';
import styled from 'styled-components';

const routes = [
    {
        path: '/menu',
        component: Menu
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/cart',
        component: Cart
    },
    {
        path: '/user',
        component: User
    }
]

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
`;

function ContentRoutes() {


    return (

        <Switch>
            {routes.map((route, index) => {
                return <Route key={index} path={`${route.path}`}>
                    <Content>
                        <route.component />
                    </Content>

                </Route>
            })}
        </Switch>



    )
}

export default ContentRoutes
