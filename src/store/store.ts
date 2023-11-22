import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { editorTextTaskReducer } from "./editorTextTask";
import { editorGeoTaskReducer } from "./editorGeoTask";
import { editorCommentsTaskReducer } from "./editorCommentsTask";
import { compilerLogListReducer } from "./compilerLogList";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    editorTextTask: editorTextTaskReducer,
    editorGeoTask: editorGeoTaskReducer,
    editorCommentsTask: editorCommentsTaskReducer,
    compilerLogList: compilerLogListReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

const persistor = persistStore(store);

export { store, persistor };
