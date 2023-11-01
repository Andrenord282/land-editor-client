import { IAnyObject } from "types";

export interface ITextListElement extends IAnyObject {
    id: string;
    name: string;
}

export interface IEditorTextTaskSlice {
    landAddress: string;
    srcHtmlString: string;
    JSONstring: string;
    imgFolderName: string;
    inputTextList: ITextListElement[];
    replaceText: ITextListElement[];
    addGeoText: ITextListElement[];
}

export type TEditorTaskListName = "inputTextList" | "replaceText" | "addGeoText";

export type PayloadMoveTextListItem = {
    deleteInList: TEditorTaskListName;
    moveToList: TEditorTaskListName;
    element: ITextListElement;
};

export type PayloadLandAddress = {
    landAddress: string;
};

export type PayloadInputTextList = {
    inputTextList: ITextListElement[];
};

export type PayloadSrcHtmlString = {
    srcHtmlString: string;
};

export type PayloadImgFolderName = {
    imgFolderName: string;
};

export type PayloadUpdatedTextListItem = {
    taskListName: TEditorTaskListName;
    taskListItemIntex: number;
    newItemValue: ITextListElement;
};
