import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserServices from '../../service/UserServices';

export const authUser = createAsyncThunk(
    'auth/authUserStatus',
    async (info, { getState, requestId }) => {
        const { currentRequestId, authenticating } = getState().auth;;
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
        msg: '',
    },
    reducers: {
        resetMsg: (state, action) => {
            state.msg = '';
        }
    },
    extraReducers: {
        [authUser.pending]: (state, action) => {
            if (state.authenticating === false) {
                state.authenticating = true;
                state.currentRequestId = action.meta.requestId;
            }
        },
        [authUser.fulfilled]: (state, action) => {
            const { requestId } = action.meta
            const { msg, username, token } = action.payload;
            if (state.authenticating === true && state.currentRequestId === requestId) {
                state.authenticating = false
                state.currentRequestId = undefined
                state.currentUser = ''
            }

            if (msg) {
                state.msg = msg;
            } else if (token) {
                state.msg = '';
                state.currentUser = username;
                state.authenticated = true;
                state.token = token;
            }
        },
        [authUser.rejected]: (state, action) => {

            const { requestId } = action.meta
            if (state.authenticating === true && state.currentRequestId === requestId) {
                state.authenticating = false;
                state.currentRequestId = undefined;
                state.currentUser = '';
                state.msg = 'Network error';
            }

        },
    }
});


const { actions, reducer } = authSlice;

export const { resetMsg } = actions;

export default reducer;

