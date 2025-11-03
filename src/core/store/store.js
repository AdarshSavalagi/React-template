import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { PERSIST } from 'redux-persist';

const persistConfig = {
    key: 'authKey',
    storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// const loggerMiddleware = (storeAPI) => (next) => (action) => {
//   console.log('Dispatching:', action);
//   let result = next(action); // pass action to reducer
//   console.log('Next state:', storeAPI.getState());
//   return result;
// };

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [PERSIST],
            },
        })
});

export const persister = persistStore(store);
