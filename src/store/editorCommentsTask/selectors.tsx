import { IStore } from "store/types";
import { TSelectorName } from "./types";

export const selectSelectorName = (state: IStore, selectorName: TSelectorName) =>
    state.editorCommentsTask[selectorName];
export const selectCommentNameSelector = (state: IStore) => state.editorCommentsTask.commentNameSelector;
export const selectCommentAvaSelector = (state: IStore) => state.editorCommentsTask.commentAvaSelector;
export const selectCommentListSelector = (state: IStore) => state.editorCommentsTask.commentListSelector;
export const selectCommentatorList =  (state: IStore) => state.editorCommentsTask.commentatorList;
export const selectCommentList = (state: IStore) => state.editorCommentsTask.commentList;
