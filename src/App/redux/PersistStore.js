import { configureStore } from '@reduxjs/toolkit';
import appReducer from './AppStore';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart'], //Things u want to persist
    blacklist: [], //Things u dont
};


const rootReducer = (state, action) => {
    if (action.type === 'logout') {
        state = undefined
        storage.removeItem('persist:root');
    }
    return appReducer(state, action)
}
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

