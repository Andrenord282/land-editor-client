import { IStore } from "store/types";
import { TTextListElement, TEditorTaskListName } from "./types";

export const selectLandAddress = (state: IStore): string => state.editorTextTask.landAddress;
export const selectJSONstring = (state: IStore): string => state.editorTextTask.JSONstring;
export const selectSrcHtmlString = (state: IStore): string => state.editorTextTask.srcHtmlString;
export const selectImgFolderName = (state: IStore) => state.editorTextTask.imgFolderName;
export const selectTaskList = (state: IStore, taskListName: TEditorTaskListName): TTextListElement[] =>
    state.editorTextTask[taskListName];
export const selectInputTextList = (state: IStore): TTextListElement[] => state.editorTextTask.inputTextList;
export const selectreplaceText = (state: IStore): TTextListElement[] => state.editorTextTask.replaceText;
export const selectAddGeoTextList = (state: IStore): TTextListElement[] => state.editorTextTask.addGeoText;
