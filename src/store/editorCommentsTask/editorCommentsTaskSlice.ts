import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
    IEditorCommnentsTaskSlice,
    PayloadSelectorType,
    PayloadCommentList,
    PayloadAddCommentator,
    PayloadDeleteCommentator,
    PayloadUpdatedCommentator,
} from "./types";

const initialState: IEditorCommnentsTaskSlice = {
    commentNameSelector: "",
    commentAvaSelector: "",
    commentListSelector: "",
    commentatorList: [],
    commentList: [],
};

export const editorCommentsTaskSlice = createSlice({
    name: "editorCommentsTask",
    initialState,
    reducers: {
        writeSelector: (state, action: PayloadAction<PayloadSelectorType>) => {
            const { selectorType, selectorValue } = action.payload;

            state[selectorType] = selectorValue;
        },

        deleteSelector: (state, action: PayloadAction<PayloadSelectorType>) => {
            const { selectorType, selectorValue } = action.payload;

            state[selectorType] = selectorValue;
        },

        writeCommentList: (state, action: PayloadAction<PayloadCommentList>) => {
            const { commentList } = action.payload;

            state.commentList = commentList;
        },

        deleteCommentList: (state) => {
            state.commentList = [];
        },

        addCommentator: (state, action: PayloadAction<PayloadAddCommentator>) => {
            const { commentatorId, commentatorValue } = action.payload;

            state.commentatorList = [...state.commentatorList, { id: commentatorId, value: commentatorValue }];
        },

        deleteCommentator: (state, action: PayloadAction<PayloadDeleteCommentator>) => {
            const { commentatorId } = action.payload;

            state.commentatorList = state.commentatorList.filter((commentator) => commentator.id !== commentatorId);
        },

        updateCommentator: (state, action: PayloadAction<PayloadUpdatedCommentator>) => {
            const { commentatorId, commentatorValue } = action.payload;

            state.commentatorList = state.commentatorList.map((commentator) => {
                if (commentator.id === commentatorId) {
                    return {
                        id: commentatorId,
                        value: commentatorValue,
                    };
                } else {
                    return commentator;
                }
            });
        },
    },
});

export const { actions: editorCommentsTaskActions } = editorCommentsTaskSlice;
export const { reducer: editorCommentsTaskReducer } = editorCommentsTaskSlice;
