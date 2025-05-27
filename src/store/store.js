// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // saves to localStorage
import { combineReducers } from 'redux'
import demoReducer from './slices/demoSlice'
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

// Configuration for persist
const persistConfig = {
  key: 'root',
  storage, // use localStorage
}

// Combine all slices here (you can add more in future)
const rootReducer = combineReducers({
  demo: demoReducer,
})

// Wrap combined reducer with persist capabilities
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create the store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // 👇 Ignore these redux-persist actions
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

// Create persistor
export const persistor = persistStore(store)
