import React from 'react';
import { StyledLink, StyledSidebar, StyledItem } from './StyledSidebar';

function Sidebar({ routes, handleClick }) {

    return (
        <StyledSidebar>
            {routes.map((route, index) => {
                return (
                    <StyledItem key={index}>
                        <StyledLink to={`${route.path}`} onClick={() => handleClick(route.content)}>
                            {route.content}
                        </StyledLink>
                    </StyledItem>
                )
            })}
        </StyledSidebar>
    )
}

export default Sidebar;
