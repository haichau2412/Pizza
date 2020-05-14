import React from 'react';
// import Alert from '../sharecomponents/alert/Alert';
import { useFormik } from 'formik';
import { checkout, resetMsg } from '../../redux/cart/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { CheckoutForm, LoadingIcon, ErrorDiv } from './StyledCart'
import sprite from '../../assets/sprite.svg';

const initialValues = {
    address: '',
    phone: '',
};

const getRequesting = (state) => state.cart.requesting;
const getToken = (state) => state.auth.token;
const getMsg = (state) => state.cart.msg;

const AddressForm = ({ ulti }) => {

    const { setStatus, setMessage, setIsVisible } = ulti;
    const message = useSelector(getMsg);
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    const isRequesting = useSelector(getRequesting);

    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            dispatch(checkout({ ...values, token }));
        },
        validate: (values) => {
            const errors = {};
            const { address, phone } = values;

            if (!address) {
                errors.address = 'Required';
            }
            if (!phone) {
                errors.phone = 'Required';
            } else if (!/(^(056|058|059|03[2-9]|09[0-4]|09[6-9]|08[1-9]|070|07[6-9])){1}[0-9]{7}$/g.test(phone)) {
                errors.phone = 'Invalid phone number'
            }
            return errors;

        }
    });
    const { errors, values, handleChange, handleSubmit, handleBlur } = formik;
    const { address, phone } = values;

    React.useEffect(() => {
        dispatch(resetMsg());

        return () => dispatch(resetMsg());
    }, [dispatch])

    React.useEffect(() => {
        if (message === 'Order successfully') {
            setMessage(message);
            setStatus('success');
            setIsVisible(true);

        } else {
            setMessage(message);
            setStatus('error');
            setIsVisible(true);
        }
    }, [dispatch, message, setIsVisible, setMessage, setStatus]);


    return (
        <CheckoutForm onSubmit={handleSubmit}>
            <form>
                <label htmlFor="phone">Phone for shipping</label>
                <input type="text" id="phone" name="phone" onChange={handleChange} value={phone} onBlur={handleBlur} />
                <ErrorDiv>{errors.phone}</ErrorDiv>
                <label htmlFor="address">Address for shipping</label>
                <textarea type="text" id="address" name="address" onChange={handleChange} value={address} onBlur={handleBlur} />
                <ErrorDiv>{errors.address}</ErrorDiv>
                <button disabled={isRequesting} type="submit">Check out</button>
                {isRequesting ? <LoadingIcon>
                    <svg>
                        <use href={sprite + '#icon-spinner2'} />
                    </svg>
                </LoadingIcon> : null}
            </form>
        </CheckoutForm>
    )
}

export default React.memo(AddressForm);