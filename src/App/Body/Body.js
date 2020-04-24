import React from 'react';
import {
    Route,
} from "react-router-dom";
import { StyledBody } from './Styled';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Body = () => {
    return (
        <Route path="/:page">
            <StyledBody>
                <Sidebar>
                </Sidebar>
                <Content>
                </Content>
            </StyledBody>
        </Route>
    )
}

export default Body;