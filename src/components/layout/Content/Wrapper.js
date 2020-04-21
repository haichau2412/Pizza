import React from 'react';
import styled from 'styled-components';
import SideBar from './SideBar';
import ProductView from './ProductView';
import SmallCartView from './SmallCartView';

const ContentWrapper = styled.div`
    display: flex;
`;

function Wrapper() {
    return (
        <ContentWrapper >
            <SideBar></SideBar>
            <ProductView></ProductView>
            <SmallCartView></SmallCartView>
        </ContentWrapper>
    )
};

export default Wrapper
