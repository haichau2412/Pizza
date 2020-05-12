import React from 'react';
// import Alert from '../sharecomponents/alert/Alert';
import { useFormik } from 'formik';
import { checkout, resetMsg } from '../../redux/cart/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { CheckoutForm, LoadingIcon } from './StyledCart'
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
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            setSubmitting(true);
            try {
                dispatch(checkout({ ...values, token }));
            }
            catch (error) {

            }
            setSubmitting(false);
        },
        validate: (values) => {
            const errors = {};
            const { address } = values;

            if (!address) {
                errors.address = 'Required';
            }
            return errors;

        }
    });
    const { errors, values, handleChange, handleSubmit, isSubmitting } = formik;
    const { address } = values;

    React.useEffect(() => {
        dispatch(resetMsg());
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
                <label htmlFor="address">Address for shipping</label>
                <textarea type="text" id="address" name="address" onChange={handleChange} value={address} />
                {errors.address ? <div>{errors.address}</div> : null}
                <button disabled={isSubmitting} type="submit">Check out</button>
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