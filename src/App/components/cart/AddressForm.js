import React from 'react';
import Alert from '../sharecomponents/Alert';
import { useFormik } from 'formik';
import { checkout, resetMsg } from '../../redux/cart/CartSlice';
import { useSelector, useDispatch } from 'react-redux';
import { CheckoutForm } from './StyledCart'

const initialValues = {
    address: '',
};

const getToken = (state) => state.auth.token;
const getMsg = (state) => state.cart.msg;

const AddressForm = () => {

    const message = useSelector(getMsg);
    const token = useSelector(getToken);
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues,
        onSubmit: async (values, { setSubmitting, resetForm }) => {

            setSubmitting(true);
            try {
                await dispatch(checkout({ ...values, token }));
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
        return () => {
            dispatch(resetMsg());
        }
    }, [dispatch]);

    const makeAlert = React.useCallback(() => {
        if (message) {
            alert(message);
        }
    }, [message]);

    return (
        <>
            <Alert alert={makeAlert} />
            <CheckoutForm onSubmit={handleSubmit}>
                <form>
                    <label htmlFor="address">Address for shipping</label>
                    <textarea type="text" id="address" name="address" onChange={handleChange} value={address} />
                    {errors.address ? <div>{errors.address}</div> : null}
                    <button disabled={isSubmitting} type="submit">Check out</button>
                </form>
            </CheckoutForm>
        </>
    )
}

export default React.memo(AddressForm);