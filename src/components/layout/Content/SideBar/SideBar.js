import React from 'react';
import styled from 'styled-components';
import {
    useParams,
    Link
} from 'react-router-dom';
import routes from './routes';

const StyledSideBar = styled.nav`
    background-color: ${(props) => props.theme.colors.grey};
    flex: 0 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    text-decoration: none;

    :not(:last-child){
        margin-bottom: 2rem;
    }

    :visited {
        text-decoration: none;
    }
    
    
`;

function SideBar() {
    let { page } = useParams();
    return (
        <StyledSideBar>
            {routes[page].routes.map((route, index) => {
                if (route.path === 'default') {
                    return <></>;
                }
                return (
                    <StyledLink key={index} to={`/${page}/${route.path}`}>
                        {route.content}
                    </StyledLink>
                )

            })}
        </StyledSideBar>
    )
}

export default SideBar;
