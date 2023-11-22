import { IAnyObject } from "types";

export type TTextListElement = {
    id: string;
    name: string;
};

export type TEditorTextTaskSlice = {
    landAddress: string;
    srcHtmlString: string;
    JSONstring: string;
    imgFolderName: string;
    inputTextList: TTextListElement[];
    replaceText: TTextListElement[];
    addGeoText: TTextListElement[];
}

export type TEditorTaskListName = "inputTextList" | "replaceText" | "addGeoText";

export type PayloadMoveTextListItem = {
    deleteInList: TEditorTaskListName;
    moveToList: TEditorTaskListName;
    element: TTextListElement;
};

export type PayloadLandAddress = {
    landAddress: string;
};

export type PayloadInputTextList = {
    inputTextList: TTextListElement[];
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
    newItemValue: TTextListElement;
};
