import React from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";
import { StyledBody } from './Styled';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Body = () => {
    return (
        <Switch>
            <Route path="/:page">
                <StyledBody>
                    <Sidebar>
                    </Sidebar>
                    <Content>
                    </Content>
                </StyledBody>
            </Route>
        </Switch>

    )
}

export default Body;