import React from 'react';
import { TableHeading, StyledInfo } from './StyledCart';
import Product from './Product';
import { useSelector } from 'react-redux';


const getCart = (state) => state.cart.products
const ProductInfo = () => {
    const cart = useSelector(getCart);
    const keys = Object.keys(cart)


    return (
        <StyledInfo>
            <TableHeading>
                <p>Product</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
            </TableHeading>
            {keys.map((productId, index) => {
                return <Product key={index} product={cart[productId]} />
            })}
        </StyledInfo>
    )
}

export default ProductInfo