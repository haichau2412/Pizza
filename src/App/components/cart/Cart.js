import React from 'react'
import { StyledCart } from './StyledCart'
import ProductInfo from './ProductInfo'
import Price from './Price'

function Cart() {

    return (
        <StyledCart>
            <ProductInfo />
            <Price />
        </StyledCart>
    )
}

export default Cart
