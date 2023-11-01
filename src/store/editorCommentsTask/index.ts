export { editorCommentsTaskActions } from "./editorCommentsTaskSlice";
export { editorCommentsTaskReducer } from "./editorCommentsTaskSlice";

export {
    selectCommentListSelector,
    selectCommentNameSelector,
    selectCommentAvaSelector,
    selectCommentatorList,
    selectCommentList,
} from "./selectors";

//types//
export {
    TCommentatorListElement,
    TSelectorName,
    PayloadSelectorType,
    PayloadCommentList,
    PayloadAddCommentator,
} from "./types";
