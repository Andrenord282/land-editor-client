// redux //
import { useSelector } from "react-redux";

// selectors //
import { selectImgFolderName, selectreplaceText, selectAddGeoTextList } from "store/editorTextTask";
import { selectInitGeo, selectReplacedGeo, selectAdaptGeoList } from "store/editorGeoTask";
import { selectCommentNameSelector, selectCommentAvaSelector, selectCommentatorList } from "store/editorCommentsTask";

// types //
import { ITextListElement } from "store/editorTextTask";
import { TGeoValue } from "store/editorGeoTask";
import { TCommentatorListElement } from "store/editorCommentsTask";

export type TCollcetionData = {
    replaceText: ITextListElement[];
    addGeoText: ITextListElement[];
    initGeo: TGeoValue;
    replacedGeo: TGeoValue;
    adaptGeoList: TGeoValue[];
    imgFolderName: string;
    commentNameSelector: string;
    commentAvaSelector: string;
    commentatorList: TCommentatorListElement[];
};

type TTasksDataCollection = {
    dataCollection: () => TCollcetionData;
};

const useTasksDataCollection = (): TTasksDataCollection => {
    const imgFolderName = useSelector(selectImgFolderName);
    const replaceText = useSelector(selectreplaceText);
    const addGeoText = useSelector(selectAddGeoTextList);
    const initGeo = useSelector(selectInitGeo);
    const replacedGeo = useSelector(selectReplacedGeo);
    const adaptGeoList = useSelector(selectAdaptGeoList);
    const commentNameSelector = useSelector(selectCommentNameSelector);
    const commentAvaSelector = useSelector(selectCommentAvaSelector);
    const commentatorList = useSelector(selectCommentatorList);

    const dataCollection = (): TCollcetionData => {
        return {
            imgFolderName,
            replaceText,
            addGeoText,
            initGeo,
            replacedGeo,
            adaptGeoList,
            commentNameSelector,
            commentAvaSelector,
            commentatorList,
        };
    };

    return {
        dataCollection,
    };
};

export { useTasksDataCollection };
