import React from 'react';
import SideBar from './Content/SideBar/SideBar';
import Menu from './Content/Menu/Menu';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import routes from './Content/SideBar/routes';
import styled from 'styled-components';
import ContentRoutes from './ContentRoutes';

const StyledWrapper = styled.div`
    display: flex;
    height: 92%;
`;

const ContentWrapper = () => {
    return (
        <Switch>
            <Route path="/:page">
                <StyledWrapper>
                    <SideBar>
                    </SideBar>
                    <ContentRoutes>
                    </ContentRoutes>
                </StyledWrapper>
            </Route>


        </Switch>

    )
}

export default ContentWrapper;