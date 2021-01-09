import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import useAsync from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';
//import get from 'lodash/get';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
//import useAsync from 'react-async';

import rootReducer from '../reducers'; // the value from combineReducers
// const STORAGE = get(window, 'localStorage', ''); // GOOD
const persistConfig = {
 key: 'root',
 storage: useAsync
};

const middlewares = [];

// eslint-disable-next-line no-undef
//if (__DEV__) {
  middlewares.push(thunkMiddleware, createLogger());
//}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(applyMiddleware(...middlewares)),
);

export const persistor = persistStore(store);
