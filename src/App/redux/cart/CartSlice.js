import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState:
    {
        isExist: {},
        products: {
        }
    },
    reducers: {
        addToCart: (state, action) => {

            const { product } = action.payload;
            console.log(product);
            const { photo, name, description, price, _id } = product;
            let quantity;
            const isNewProduct = state.isExist._id;

            if (!isNewProduct) {
                state.isExist[_id] = true;
                quantity = 1;
            }
            else {
                quantity = state.products[_id].quantity;
                quantity += 1;
            }
            state.products[_id] = { photo, name, description, price, quantity };
        },
        add: (state, action) => {
            const { product } = action;
            state[product.id].quantity += 1;
        },
        reduce: (state, action) => {
            const { product } = action;
            state[product.id].quantity -= 1;
        }
    },
});


const { actions, reducer } = cartSlice;

export const { addToCart, add, reduce } = actions;

export default reducer;

