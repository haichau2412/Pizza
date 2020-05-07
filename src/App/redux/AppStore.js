import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './auth/AuthSlice';
import cartReducer from './cart/CartSlice';

const appStore = combineReducers({
    auth: authReducer,
    cart: cartReducer
});

export default appStore;
