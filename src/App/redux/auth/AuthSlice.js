import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserServices from '../../service/UserServices';

export const authUserbySignup = createAsyncThunk(
    'auth/authUserbySignupStatus',
    async (info, { getState, requestId }) => {
        const { currentRequestId, authenticating } = getState().auth;
        if (authenticating === false || requestId !== currentRequestId) {
            return
        }
        const data = await UserServices.authUser(info);
        return { ...data, username: info.values.username };
    }
)


export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentRequestId: '',
        currentUser: '',
        authenticating: false,
        authenticated: false,
        token: '',
        error: ''
    },
    reducers: {
    },
    extraReducers: {
        [authUserbySignup.pending]: (state, action) => {
            if (state.authenticating === false) {
                state.authenticating = true;
                state.currentRequestId = action.meta.requestId;
            }
        },
        [authUserbySignup.fulfilled]: (state, action) => {
            const { requestId } = action.meta
            const { msg, username, token, success, data } = action.payload;
            if (state.authenticating === true && state.currentRequestId === requestId) {
                state.authenticating = false
                state.currentRequestId = undefined
                state.currentUser = ''
            }

            if (msg) {
                state.currentUser = username;
                state.error = msg;
            } else {
                state.currentUser = username;
                state.authenticated = true;
                state.token = token;
            }
        },
        [authUserbySignup.rejected]: (state, action) => {
            const { requestId } = action.meta
            if (state.authenticating === true && state.currentRequestId === requestId) {
                state.authenticating = false;
                state.currentRequestId = undefined;
                state.currentUser = ''
            }

        },
    }
});


const { actions, reducer } = authSlice;

export const { request, success, error } = actions;

export default reducer;

