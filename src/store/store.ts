import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { userSlice } from '../features/auth/userSlice';
import { modalSlice } from '../features/modalSlice';
import { tournamentSlice } from '../features/tournamentSlice';

const persistConfig = {
  key: 'user',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

export const store = configureStore({
  reducer: {
    user: persistedReducer,
    modal: modalSlice.reducer,
    tournaments: tournamentSlice.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
    },
  }
  )
})

export const persistor = persistStore(store)