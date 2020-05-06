import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './RootStore';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [ 'user','cart'], //Things u want to persist
    blacklist: [], //Things u dont
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

export const persistor = persistStore(store);

export default {
    store,
    persistor
};

