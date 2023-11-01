export type TCommentatorListElement = {
    id: string;
    value: string;
};

export interface IEditorCommnentsTaskSlice {
    commentNameSelector: string;
    commentAvaSelector: string;
    commentListSelector: string;
    commentatorList: TCommentatorListElement[];
    commentList: string[];
}

export type TSelectorName = "commentListSelector" | "commentNameSelector" | "commentAvaSelector";

export type PayloadSelectorType = {
    selectorType: "commentNameSelector" | "commentAvaSelector" | "commentListSelector";
    selectorValue: string;
};

export type PayloadCommentList = {
    commentList: string[];
};

export type PayloadAddCommentator = {
    commentatorId: string;
    commentatorValue: string;
};

export type PayloadDeleteCommentator = {
    commentatorId: string;
};

export type PayloadUpdatedCommentator = {
    commentatorId: string;
    commentatorValue: string;
};
