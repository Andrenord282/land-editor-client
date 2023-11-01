export { editorTextTaskActions } from "./editorTextTaskSlice";
export { editorTextTaskReducer } from "./editorTextTaskSlice";

// selectors //
export {
    selectLandAddress,
    selectJSONstring,
    selectSrcHtmlString,
    selectImgFolderName,
    selectTaskList,
    selectInputTextList,
    selectreplaceText,
    selectAddGeoTextList,
} from "./selectors";

//types//
export {
    IEditorTextTaskSlice,
    ITextListElement,
    PayloadMoveTextListItem,
    TEditorTaskListName,
    PayloadLandAddress,
    PayloadInputTextList,
    PayloadSrcHtmlString,
    PayloadImgFolderName,
    PayloadUpdatedTextListItem,
} from "./types";
