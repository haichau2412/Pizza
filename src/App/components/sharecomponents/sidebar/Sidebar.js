import React from 'react';
import { StyledLink, StyledSidebar, StyledItem } from './Styled';

function Sidebar({ routes }) {
    return (
        <StyledSidebar>
            {routes.map((route, index) => {
                return (
                    <StyledItem key={index}>
                        <StyledLink to={`${route.path}`}>
                            {route.content}
                        </StyledLink>
                    </StyledItem>
                )
            })}
        </StyledSidebar>
    )
}

export default Sidebar;
