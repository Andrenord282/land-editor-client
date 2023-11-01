import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { editorTextTaskReducer } from "./editorTextTask";
import { editorGeoTaskReducer } from "./editorGeoTask";
import { editorCommentsTaskReducer } from "./editorCommentsTask";

const rootReducer = combineReducers({
    editorTextTask: editorTextTaskReducer,
    editorGeoTask: editorGeoTaskReducer,
    editorCommentsTask: editorCommentsTaskReducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export { store };
