//redux//
import { useSelector } from "react-redux";

//selectors
import { selectCommentList } from "store/editorCommentsTask";

type TCommentListState = {
    commentList: string[];
};

const useCommentListState = (): TCommentListState => {
    const commentList = useSelector(selectCommentList);
    
    return {
        commentList,
    };
};

export { useCommentListState };
