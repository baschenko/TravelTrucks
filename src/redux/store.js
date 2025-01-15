import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import campersReducer from './campers/slice';
// import authReducer from "./auth/slice";

const persistAuthConfig = {
  key: 'campers',
  storage,
  whitelist: ['campers'],
};

//sergqaz@mail.com

const persistedAuthReducer = persistReducer(persistAuthConfig, campersReducer);

export const store = configureStore({
  reducer: {
    campers: persistedAuthReducer,
    // campers: campersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
