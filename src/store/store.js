import { configureStore } from "@reduxjs/toolkit";
import resumeDataReducer from "./features/resumeData/resumeData.slice";
import templateReducer from "./features/template.slice";

import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfigResume = {
  key: 'resumeData',
  storage,
}

const persistConfigTemplate = {
  key: 'templateId',
  storage,
}

const persistedReducerResume = persistReducer(persistConfigResume, resumeDataReducer);

const persistedReducerTemplate = persistReducer(persistConfigTemplate, templateReducer);

export const store = configureStore({
  reducer: {
    resumeData: persistedReducerResume,
    template: persistedReducerTemplate,
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    })
})

export const persistor = persistStore(store);