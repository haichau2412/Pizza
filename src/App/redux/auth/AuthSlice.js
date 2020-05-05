import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import UserServices from '../../service/UserServices';


export const authUserbySignup = createAsyncThunk(
    'auth/authUserbySignupStatus',
    async (info, thunkAPI) => {
        const data = await UserServices.signup(info);
        return data;
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: { id: 0, username: '' },
        authenticating: false,
        authenticated: false,
        token: '',
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
            state.token = action.payload.tooken;
        },
        error: (state, action) => {
            state.authenticating = false;
            state.error = action.payload.error;
        }
    },
    extraReducers: {
        [authUserbySignup.fulfilled]: (state, action) => {
            console.log(action.payload);
        }
    }
});


const { actions, reducer } = authSlice;

export const { request, success, error } = actions;

export default reducer;

