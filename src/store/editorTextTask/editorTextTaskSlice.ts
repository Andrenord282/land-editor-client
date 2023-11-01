import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
    IEditorTextTaskSlice,
    PayloadLandAddress,
    PayloadInputTextList,
    PayloadSrcHtmlString,
    PayloadMoveTextListItem,
    PayloadUpdatedTextListItem,
    PayloadImgFolderName,
} from "./types";

import { landAddress, srcHtmlString, inputTextList } from "data";
import JSONDATA from "data.json";

const JSONstring = JSON.stringify(JSONDATA);

const initialState: IEditorTextTaskSlice = {
    landAddress: landAddress,
    srcHtmlString: srcHtmlString,
    JSONstring: JSONstring,
    imgFolderName: "images",
    inputTextList: inputTextList,
    replaceText: [],
    addGeoText: [],
};

export const editorTextTaskSlice = createSlice({
    name: "editTextTask",
    initialState,
    reducers: {
        writeLandAddress: (state, action: PayloadAction<PayloadLandAddress>) => {
            const { landAddress } = action.payload;
            state.landAddress = landAddress;
        },

        deleteLandAddress: (state) => {
            state.landAddress = "";
        },

        wrtireSrcHtmlString: (state, action: PayloadAction<PayloadSrcHtmlString>) => {
            const { srcHtmlString } = action.payload;
            state.srcHtmlString = srcHtmlString;
        },

        deleteSrcHtmlStrings: (state) => {
            state.srcHtmlString = "";
        },

        writeImgFolderName: (state, action: PayloadAction<PayloadImgFolderName>) => {
            const { imgFolderName } = action.payload;

            state.imgFolderName = imgFolderName;
        },

        deleteImgFolderName: (state) => {
            state.imgFolderName = "";
        },

        writeInputTextList: (state, action: PayloadAction<PayloadInputTextList>) => {
            const { inputTextList } = action.payload;
            state.inputTextList = inputTextList;
        },

        deleteInputTextList: (state) => {
            state.inputTextList = [];
        },

        moveTextListItem: (state, action: PayloadAction<PayloadMoveTextListItem>) => {
            const { moveToList, deleteInList, element } = action.payload;

            state[moveToList] = [...state[moveToList], element];
            state[deleteInList] = state[deleteInList].filter((current) => current.id !== element.id);
        },

        updateTextListItem: (state, action: PayloadAction<PayloadUpdatedTextListItem>) => {
            const { taskListName, taskListItemIntex, newItemValue } = action.payload;

            state[taskListName] = [
                ...state[taskListName].slice(0, taskListItemIntex),
                newItemValue,
                ...state[taskListName].slice(taskListItemIntex + 1),
            ];
        },
    },
});

export const { actions: editorTextTaskActions } = editorTextTaskSlice;
export const { reducer: editorTextTaskReducer } = editorTextTaskSlice;
