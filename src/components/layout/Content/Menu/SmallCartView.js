import React from 'react';
import styled from 'styled-components';

const CartFrame = styled.section`
    background-color: green;
    flex: 1;
`;

function SmallCartView() {
    return (
        <CartFrame>CartFrame</CartFrame>
    )
}

export default SmallCartView
