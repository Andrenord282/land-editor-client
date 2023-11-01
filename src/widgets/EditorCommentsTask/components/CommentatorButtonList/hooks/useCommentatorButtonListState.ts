// react //
import { MouseEvent } from "react";

// redux //
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

// actions //
import { editorCommentsTaskActions } from "store/editorCommentsTask";

// types //
import { PayloadAddCommentator } from "store/editorCommentsTask";

type TCommentatorButtonListState = {
    onClickAddCommentator: (e: MouseEvent<HTMLButtonElement>) => void;
};

const useCommentatorButtonListState = (): TCommentatorButtonListState => {
    const dispatch = useDispatch();

    const onClickAddCommentator = (e: MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        const btnAriaLabel = btn.getAttribute("aria-label");

        if (!btnAriaLabel) {
            return;
        }

        const data: PayloadAddCommentator = {
            commentatorId: nanoid(),
            commentatorValue: btnAriaLabel,
        };

        dispatch(editorCommentsTaskActions.addCommentator(data));
    };

    return {
        onClickAddCommentator,
    };
};

export { useCommentatorButtonListState };
