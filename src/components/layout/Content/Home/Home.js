import React from 'react'
import {
    useRouteMatch,
    Switch,
    Route
} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import News from './News';
import Stores from './Stores';

const routes = [
    {
        path: '/home/contact',
        component: Contact,
    },
    {
        path: '/home/news',
        component: News,
    },
    {
        path: '/home/about',
        component: About,
    },
    {
        path: '/home/stores',
        component: Stores,
    }

]

function Home() {
    let { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <News />
            </Route>
            {routes.map((route, index) => {
                return <Route key={index} exact path={`${route.path}`}>
                    <route.component />
                </Route>
            })}
        </Switch>
    )
}

export default Home
