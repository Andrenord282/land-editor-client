// react //
import { useState, useRef, ChangeEvent, MouseEvent } from "react";

// redux //
import { useDispatch } from "react-redux";

// actions //
import { PayloadUpdatedTextListItem, TEditorTaskListName, editorTextTaskActions } from "store/editorTextTask";

// types //
import { PayloadMoveTextListItem } from "store/editorTextTask";
import { ITaskListItemProps } from "../TaskListItem";

type TEditorToggle = "open" | "close";

type TTaskListItemState = {
    editorToggle: TEditorToggle;
    text: string;
    textFieldValue: string;
    onClickEditorToggle: () => void;
    onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickUpdateText: (e: MouseEvent<HTMLButtonElement>) => void;
    onClickMoveListItem: (e: MouseEvent<HTMLButtonElement>) => void;
};

const useTaskListItemState = (props: ITaskListItemProps): TTaskListItemState => {
    const dispatch = useDispatch();
    const { itemIdndex, element, listName } = props;
    const id = element.id;
    const [editorToggle, setEditorToggle] = useState<TEditorToggle>("close");
    const [text, setText] = useState(element.name);
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

                const data: PayloadUpdatedTextListItem = {
                    taskListName: listName,
                    taskListItemIntex: itemIdndex,
                    newItemValue: { id, name: textFieldValue },
                };

                dispatch(editorTextTaskActions.updateTextListItem(data));
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

    const onClickMoveListItem = (e: MouseEvent<HTMLButtonElement>) => {
        const btn = e.currentTarget;
        const btnAriaLabel = btn.getAttribute("aria-label");

        if (btnAriaLabel) {
            const data: PayloadMoveTextListItem = {
                deleteInList: listName,
                moveToList: btnAriaLabel as TEditorTaskListName,
                element,
            };

            dispatch(editorTextTaskActions.moveTextListItem(data));
        }
    };

    return {
        editorToggle,
        text,
        textFieldValue,
        onClickEditorToggle,
        onChangeTextField,
        onClickUpdateText,
        onClickMoveListItem,
    };
};

export { useTaskListItemState };
