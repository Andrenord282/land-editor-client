import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IEditorGeoTaskSlice, PayloadGeoValue } from "./types";

import { geoList } from "./data";

const initialState: IEditorGeoTaskSlice = {
    initGeo: "",
    replacedGeo: "",
    geoList: geoList,
    adaptGeoList: [],
};

export const editorGeoTaskSlice = createSlice({
    name: "editGeoTask",
    initialState,
    reducers: {
        updateInitGeo: (state, action: PayloadAction<PayloadGeoValue>) => {
            const { geoValue } = action.payload;

            state.adaptGeoList = [];

            if (state.initGeo === geoValue) {
                state.initGeo = "";
            } else {
                state.initGeo = geoValue;
            }
        },

        updateReplaceGeo: (state, action: PayloadAction<PayloadGeoValue>) => {
            const { geoValue } = action.payload;

            if (state.replacedGeo === geoValue) {
                state.replacedGeo = "";
            } else {
                state.replacedGeo = geoValue;
            }
        },

        updateGeoList: (state, action: PayloadAction<PayloadGeoValue>) => {
            const { geoValue } = action.payload;

            if (state.adaptGeoList.includes(geoValue)) {
                state.adaptGeoList = state.adaptGeoList.filter((current) => current !== geoValue);
            } else {
                state.adaptGeoList = [...state.adaptGeoList, geoValue];
            }
        },

        resetValues: (state) => {
            state.initGeo = "";
            state.replacedGeo = "";
            state.adaptGeoList = [];
        },
    },
});

export const { actions: editorGeoTaskActions } = editorGeoTaskSlice;
export const { reducer: editorGeoTaskReducer } = editorGeoTaskSlice;
