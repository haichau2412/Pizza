import React from 'react';
import { StyledCart, StyledInfo, TableHeading, Empty } from './StyledCart';
import Product from './Product';
import OrderCheckout from './OrderCheckout';
import { useSelector } from 'react-redux';
import Alert from '../sharecomponents/alert/Alert';
import { history } from '../../service/History';
import { resetMsg } from '../../redux/auth/AuthSlice';
import { useDispatch } from 'react-redux';
const getAuthenticated = (state) => {
    return state.auth.authenticated;
};

const getCart = (state) => state.cart;

const Cart = () => {

    const dispatch = useDispatch();
    const isAuthenticated = useSelector(getAuthenticated);
    const [showPopup, setShowPopup] = React.useState(false);

    const cart = useSelector(getCart);
    const keys = Object.keys(cart.products);
    const { items, total } = cart;

    const [message, setMessage] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [isVisible, setIsVisible] = React.useState(false);
    const [shoudNavigate, setShouldNavigate] = React.useState(false);

    React.useEffect(() => {
        if (shoudNavigate) {

            history.push('/history');
        }
    }, [shoudNavigate]);

    const handleSuccessOrder = () => {
        setShouldNavigate(true);
    }
    const handleClickAlert = () => {
        setIsVisible(false);
    }

    React.useEffect(() => {
        if (items === 0) {
            setShowPopup(false);
        }
    }, [items]);


    React.useEffect(() => {
        dispatch(resetMsg());

        return () => dispatch(resetMsg());
    }, [dispatch]);

    const handlePopup = React.useCallback(() => {
        if (!isAuthenticated) {
            setMessage('You have to sign in before checkout');
            setStatus('warning');
            setIsVisible(true);
        } else if (items === 0) {
            setMessage('Empty cart, please add product to begin checkout');
            setStatus('warning');
            setIsVisible(true);
        } else {
            setShowPopup(pre => !pre);
            setIsVisible(false);
        }
    }, [isAuthenticated, items]);

    const productsInfo = keys.map((productId, index) => {
        return <Product key={index} product={cart.products[productId]} productId={productId} />
    })
    return (
        <>
            <Alert status={status} msg={message} isVisible={isVisible} handleClick={handleClickAlert} handleSuccessOrder={handleSuccessOrder} />
            <StyledCart>
                <StyledInfo>
                    <TableHeading>
                        <p>Product</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                    </TableHeading>
                    {keys.length === 0 ? <Empty>There's no product in cart</Empty> : productsInfo}
                </StyledInfo>
                <OrderCheckout ulti={{ items, setStatus, setMessage, handleClickAlert, setIsVisible, isVisible, shoudNavigate }} showPopup={showPopup} handleClick={handlePopup} data={{ items, total }} />
            </StyledCart>
        </>
    )
}

export default Cart;
