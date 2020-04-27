import React from 'react';
import { StyledLink, StyledSidebar } from './Styled';

function Sidebar({ routes }) {
    return (
        <StyledSidebar>
            {routes.map((route, index) => {
                return (
                    <StyledLink key={index} to={`${route.path}`}>
                        {route.content}
                    </StyledLink>
                )
            })}
        </StyledSidebar>
    )
}

export default Sidebar;
