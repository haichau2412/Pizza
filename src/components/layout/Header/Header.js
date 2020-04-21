import React from 'react';
import styled from 'styled-components';

import HeaderNav from './HeaderNav';
import HeaderEnd from './HeaderEnd';


const StyledHeader = styled.header`
    
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.colors.darkGrey};
    align-items: center;

`;


const Header = () => {
    return (
        <StyledHeader>
            <HeaderNav />
            <HeaderEnd />
        </StyledHeader>
    )
}

export default Header;
