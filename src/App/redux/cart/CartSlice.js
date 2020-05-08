import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserServices from '../../service/UserServices';

export const checkout = createAsyncThunk(
    'cart/checkoutStatus',
    async (info, { getState, requestId }) => {
        const { currentRequestId, requesting, products, total } = getState().cart;

        if (requesting === false || requestId === currentRequestId) {
            return
        }
        const data = await UserServices.checkout({ ...info, cart: products, totalPrice: total });
        return { ...data };
    }
)

const initialState = {
    requesting: false,
    isExist: {},
    products: {},
    total: 0,
    items: 0,
    msg: '',
    currentRequestId: ''
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product } = action.payload;
            const { photo, name, description, price, _id } = product;
            let quantity;
            const isNewProduct = state.isExist[_id];

            if (!isNewProduct) {
                state.isExist[_id] = true;
                quantity = 1;
            }
            else {
                quantity = state.products[_id].quantity;
                quantity += 1;
            }
            state.total += price;
            state.items += 1;
            state.products[_id] = { photo, name, description, price, quantity };
        },
        add: (state, action) => {

            const { _id } = action.payload;
            state.total += state.products[_id].price;
            state.items += 1;
            state.products[_id].quantity += 1;
        },
        reduce: (state, action) => {
            const { _id } = action.payload;
            let quantity = state.products[_id].quantity;
            state.total -= state.products[_id].price;
            state.items -= 1;

            if (quantity === 1) {

                state.isExist[_id] = false;
                delete state.products[_id];
            }
            else {
                state.products[_id].quantity -= 1;
            }
        },
        resetMsg: (state, action) => {
            state.msg = '';
        }
    },
    extraReducers: {
        [checkout.pending]: (state, action) => {
            if (state.requesting === false) {
                state.requesting = true;
            }
        },
        [checkout.fulfilled]: (state, action) => {
            const { requestId } = action.meta;
            const { msg } = action.payload;


            if (state.requesting === true && state.currentRequestId === requestId) {
                state.requesting = false;
                state.currentRequestId = undefined
            }
            if (msg) {
                state.isExist = {};
                state.products = {};
                state.total = 0;
                state.items = 0;
                state.msg = msg;
            }
        },
        [checkout.rejected]: (state, action) => {
            const { requestId } = action.meta;
            if (state.requesting === true && state.currentRequestId === requestId) {
                state.requesting = false;
                state.currentRequestId = undefined;
                state.msg = '';
            }
        }
    }
});


const { actions, reducer } = cartSlice;

export const { addToCart, add, reduce, resetMsg } = actions;

export default reducer;