import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';

import productsReducer from './productsSlice';
import salesReducer from './salesSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products', 'sales'],
};

const rootReducer = combineReducers({
  products: productsReducer,
  sales: salesReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export const persistor = persistStore(store);
export default store;
