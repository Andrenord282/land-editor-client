import { IStore } from "store/types";
import { ITextListElement, TEditorTaskListName } from "./types";

export const selectLandAddress = (state: IStore): string => state.editorTextTask.landAddress;
export const selectJSONstring = (state: IStore): string => state.editorTextTask.JSONstring;
export const selectSrcHtmlString = (state: IStore): string => state.editorTextTask.srcHtmlString;
export const selectImgFolderName = (state: IStore) => state.editorTextTask.imgFolderName;
export const selectTaskList = (state: IStore, taskListName: TEditorTaskListName): ITextListElement[] =>
    state.editorTextTask[taskListName];
export const selectInputTextList = (state: IStore): ITextListElement[] => state.editorTextTask.inputTextList;
export const selectreplaceText = (state: IStore): ITextListElement[] => state.editorTextTask.replaceText;
export const selectAddGeoTextList = (state: IStore): ITextListElement[] => state.editorTextTask.addGeoText;
