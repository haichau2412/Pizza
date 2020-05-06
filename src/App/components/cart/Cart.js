import React from 'react'
import { StyledCart, StyledInfo, TableHeading } from './StyledCart'
import Product from './Product';
import Price from './Price'
import { useSelector } from 'react-redux';


const getCart = (state) => state.cart
function Cart() {

    const cart = useSelector(getCart);
    const keys = Object.keys(cart.products);
    const { items, total } = cart

    return (
        <StyledCart>
            <StyledInfo>
                <TableHeading>
                    <p>Product</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                </TableHeading>
                {keys.map((productId, index) => {
                    return <Product key={index} product={cart.products[productId]} productId={productId} />
                })}
            </StyledInfo>
            <Price data={{ items, total }} />
        </StyledCart>
    )
}

export default Cart
