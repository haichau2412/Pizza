import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState:
    {
        isExist: {},
        products: {},
        total: 0,
        items: 0
    },
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


        }
    },
});


const { actions, reducer } = cartSlice;

export const { addToCart, add, reduce } = actions;

export default reducer;