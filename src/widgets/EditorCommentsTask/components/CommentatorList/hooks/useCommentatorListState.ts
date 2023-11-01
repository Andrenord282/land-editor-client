// redux //
import { useSelector } from "react-redux";

// selectors //
import { TCommentatorListElement, selectCommentatorList } from "store/editorCommentsTask";

type TCommentatorListState = {
    commentatorList: TCommentatorListElement[];
};

const useCommentatorListState = (): TCommentatorListState => {
    const commentatorList = useSelector(selectCommentatorList);

    return {
        commentatorList,
    };
};

export { useCommentatorListState };
