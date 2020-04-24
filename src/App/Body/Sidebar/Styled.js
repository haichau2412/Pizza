import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledSidebar = styled.nav`
    background-color: ${(props) => props.theme.colors.grey};
    flex: 0 8%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const StyledLink = styled(Link)`
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