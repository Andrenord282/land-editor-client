import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { PayloadCompilerLogList, TCompilerLogListSlice } from "./types";

const initialState: TCompilerLogListSlice = {
    refToNewLand: "",
    replaceTextListLog: undefined,
    addGeoTextListLog: undefined,
    replaceGeoListLog: undefined,
    adapGeoListLog: undefined,
};

export const compilerLogListSlice = createSlice({
    name: "compilerLogList",
    initialState,
    reducers: {
        updateCompilerLogList: (state, action: PayloadAction<PayloadCompilerLogList>) => {
            const { refToNewLand, replaceTextListLog, addGeoTextListLog, replaceGeoListLog, adapGeoListLog } =
                action.payload;

            state.refToNewLand = refToNewLand;
            state.replaceTextListLog = replaceTextListLog;
            state.addGeoTextListLog = addGeoTextListLog;
            state.replaceGeoListLog = replaceGeoListLog;
            state.adapGeoListLog = adapGeoListLog;
        },

        resetCompilerLogList: (state) => {
            state.refToNewLand = "";
            state.replaceTextListLog = undefined;
            state.addGeoTextListLog = undefined;
            state.replaceGeoListLog = undefined;
            state.adapGeoListLog = undefined;
        },
    },
});

export const { actions: compilerLogListActions } = compilerLogListSlice;
export const { reducer: compilerLogListReducer } = compilerLogListSlice;
