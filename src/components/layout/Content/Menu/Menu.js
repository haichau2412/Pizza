import React from 'react';
import styled from 'styled-components';
import SideBar from '../SideBar/SideBar';
import ProductView from './ProductView';
import SmallCartView from './SmallCartView';
import routes from '../SideBar/routes';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";

const MenuWrapper = styled.div`
    display: flex;
`;

function Menu() {


    return (
        <MenuWrapper >
            <ProductView>Menu</ProductView>
            <SmallCartView></SmallCartView>
        </MenuWrapper>
    )
};

export default Menu;
