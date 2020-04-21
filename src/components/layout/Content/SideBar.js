import React from 'react';
import styled from 'styled-components';

const StyledSideBar = styled.nav`
    background-color: #fff;
    flex: 0 0 10%;
`;

function SideBar() {
    return (
        <StyledSideBar>SideBar</StyledSideBar>
    )
}

export default SideBar;
