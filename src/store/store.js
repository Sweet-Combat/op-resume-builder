import { configureStore } from "@reduxjs/toolkit";
import resumeDataReducer from "./features/resumeData/resumeData.slice";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: 'resumeData',
  storage,
}

const persistedReducer = persistReducer(persistConfig, resumeDataReducer);

export const store = configureStore({
  reducer: {
    resumeData: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export const persistor = persistStore(store);