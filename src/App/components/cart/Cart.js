import React from 'react';
import { StyledCart, StyledInfo, TableHeading } from './StyledCart';
import Product from './Product';
import OrderCheckout from './OrderCheckout';
import { useSelector } from 'react-redux';

const getAuthenticated = (state) => {
    return state.auth.authenticated;
};

const getCart = (state) => state.cart;

const Cart = () => {

    const isAuthenticated = useSelector(getAuthenticated);
    const [showPopup, setShowPopup] = React.useState(false);
    const cart = useSelector(getCart);
    const keys = Object.keys(cart.products);
    const { items, total } = cart;

    const handlePopup = React.useCallback(() => {
        if (!isAuthenticated) {
            alert('You have to login before checkout')
        }
        else {
            setShowPopup(pre => !pre);
        }
    }, [isAuthenticated]);

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
            <OrderCheckout showPopup={showPopup} handleClick={handlePopup} data={{ items, total }} />
        </StyledCart>
    )
}

export default Cart;
