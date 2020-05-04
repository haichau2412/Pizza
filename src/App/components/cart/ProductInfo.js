import React from 'react';
import { TableHeading, StyledInfo, StyledHr } from './StyledCart';
import Product from './Product';

const ProductInfo = () => {
    return (
        <StyledInfo>
            <TableHeading>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </TableHeading>
            <Product />
            <Product />
            <Product />
        </StyledInfo>
    )
}

export default ProductInfo