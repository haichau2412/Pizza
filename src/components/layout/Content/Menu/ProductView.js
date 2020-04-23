import React from 'react';
import styled from 'styled-components';

const ProductFrame = styled.section`
    background-color: blue;
    flex: 0 0 60%;
`;

function ProductView() {
    return (
        <ProductFrame>ProductFrame</ProductFrame>
    )
}

export default ProductView
