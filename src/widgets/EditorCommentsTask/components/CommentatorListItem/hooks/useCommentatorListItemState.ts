// react //
import { useState, ChangeEvent, MouseEvent } from "react";

// redux //
import { useDispatch } from "react-redux";

// types //
import { TCommentatorListItemProps } from "../CommentatorListItem";
import { PayloadDeleteCommentator, PayloadUpdatedCommentator } from "store/editorCommentsTask/types";
import { editorCommentsTaskActions } from "store/editorCommentsTask";

type TEditorToggle = "open" | "close";

type TCommentatorListItemState = {
    editorToggle: TEditorToggle;
    text: string;
    textFieldValue: string;
    onClickEditorToggle: () => void;
    onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickUpdateText: (e: MouseEvent<HTMLButtonElement>) => void;
    onCilckDeleteItem: () => void;
};

const useCommentatorListItemState = (props: TCommentatorListItemProps): TCommentatorListItemState => {
    const dispatch = useDispatch();
    const { commentatorId, commentator } = props;
    const [editorToggle, setEditorToggle] = useState<TEditorToggle>("close");
    const [text, setText] = useState(commentator);
    const [textBuffer, setTextBuffer] = useState("");
    const [textFieldValue, setTextFieldValue] = useState(text);

    const onClickEditorToggle = () => {
        setTextBuffer(text);
        setEditorToggle((prevToggle) => (prevToggle === "close" ? "open" : "close"));
    };

    const onChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
        const textFieldValue = e.target.value;
        setTextFieldValue(textFieldValue);
    };

    const onClickUpdateText = (e: MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        const btnAriaLabel = btn.getAttribute("aria-label");

        switch (true) {
            case btnAriaLabel === "update-text" && textFieldValue !== textBuffer:
                setText(textFieldValue);
                setEditorToggle("close");

                const data: PayloadUpdatedCommentator = {
                    commentatorId,
                    commentatorValue: textFieldValue,
                };

                dispatch(editorCommentsTaskActions.updateCommentator(data));
                break;
            case btnAriaLabel === "remove-text":
                setText(textBuffer);
                setEditorToggle("close");
                break;

            default:
                setText(textBuffer);
                setEditorToggle("close");
                break;
        }
    };

    const onCilckDeleteItem = () => {
        const data: PayloadDeleteCommentator = {
            commentatorId,
        };

        dispatch(editorCommentsTaskActions.deleteCommentator(data));
    };

    return {
        editorToggle,
        text,
        textFieldValue,
        onClickEditorToggle,
        onChangeTextField,
        onClickUpdateText,
        onCilckDeleteItem,
    };
};

export { useCommentatorListItemState };
