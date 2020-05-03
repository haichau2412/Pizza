import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'], //Things u want to persist
    blacklist: [], //Things u dont
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, authReducer);


export const store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
    middleware: [thunk]
});

export const persistor = persistStore(store);

export default {
    store,
    persistor
};

