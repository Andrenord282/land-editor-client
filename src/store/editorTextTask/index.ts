export { editorTextTaskActions } from "./editorTextTaskSlice";
export { editorTextTaskReducer } from "./editorTextTaskSlice";

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

export {
    TEditorTextTaskSlice,
    TTextListElement,
    PayloadMoveTextListItem,
    TEditorTaskListName,
    PayloadLandAddress,
    PayloadInputTextList,
    PayloadSrcHtmlString,
    PayloadImgFolderName,
    PayloadUpdatedTextListItem,
} from "./types";
