import React from 'react';
import { useParams } from 'react-router-dom';
import routes from './routes';
import { StyledLink, StyledSidebar } from './Styled';



function Sidebar() {
    let { page } = useParams();
    return (
        <StyledSidebar>
            {routes[page].map((route, index) => {
                return (
                    <StyledLink key={index} to={`/${page}/${route.path}`}>
                        {route.content}
                    </StyledLink>
                )
            })}
        </StyledSidebar>
    )
}

export default Sidebar;
