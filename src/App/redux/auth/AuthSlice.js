import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: { id: 0, username: '' },
        authenticating: false,
        authenticated: false,
        tooken: '',
        error: ''
    },
    reducers: {
        request: (state, action) => {
            state.authenticating = true;
        },
        success: (state, action) => {
            state.currentUser = action.payload.username;
            state.authenticated = true;
            state.authenticating = false;
            state.tooken = action.payload.tooken;
        },
        error: (state, action) => {
            state.authenticating = false;
            state.error = action.payload.error;
        }
    },
});
const { actions, reducer } = authSlice;

export const { request, success, error } = actions;
export default reducer;
