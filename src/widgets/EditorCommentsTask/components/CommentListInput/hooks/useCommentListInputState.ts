// utilities //
import { ErrorManager } from "utilities/errorManager";

// react //
import { useState, useEffect, ChangeEvent } from "react";

// redux //
import { useDispatch, useSelector } from "react-redux";

// actions //
import { editorCommentsTaskActions } from "store/editorCommentsTask";

// selectors //
import { selectSrcHtmlString } from "store/editorTextTask";
import {
    selectCommentAvaSelector,
    selectCommentNameSelector,
    selectCommentListSelector,
} from "store/editorCommentsTask";

// hooks //
import { useInitCommentList } from "./useInitCommentList";

// types //
import { PayloadSelectorType } from "store/editorCommentsTask";

type TSelectorState = "initSelector" | "recordedSelcetor";

type TCommentListInputState = {
    selectorState: TSelectorState;
    textFieldValue: string;
    helperText: string;
    errorState: boolean;
    onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickWriteSelector: () => void;
    onClickDeleteSelector: () => void;
};

const useCommentListInputState = (): TCommentListInputState => {
    const dispatch = useDispatch();
    const commentAvaSelector = useSelector(selectCommentAvaSelector);
    const commentNameSelector = useSelector(selectCommentNameSelector);
    const commentListSelector = useSelector(selectCommentListSelector);
    const { initCommentList } = useInitCommentList();
    const [selectorState, setSelectorState] = useState<TSelectorState>(
        !commentListSelector ? "initSelector" : "recordedSelcetor"
    );
    const [textFieldValue, setTextFieldValue] = useState(commentListSelector || "");
    const [helperText, setHelperText] = useState(!commentListSelector ? "" : `добавлен селектор: ${textFieldValue}`);
    const [errorState, setErrorState] = useState(false);
    const srcHtmlString = useSelector(selectSrcHtmlString);

    useEffect(() => {
        if (!textFieldValue) {
            setSelectorState("initSelector");
        }
    }, [textFieldValue]);

    const onClickWriteSelector = () => {
        try {
            const parser = new DOMParser();
            const DOM = parser.parseFromString(srcHtmlString, "text/html");

            if (errorState) {
                setErrorState(false);
            }

            if (DOM.querySelectorAll(textFieldValue).length === 0) {
                throw new ErrorManager("Error onClickWriteSelector", `не удалось найти селектор: ${textFieldValue}`);
            }

            if (!commentAvaSelector) {
                throw new ErrorManager("Error onClickWriteSelector", `пожалуйста, укажите селектор аватарок`);
            }

            if (!commentNameSelector) {
                throw new ErrorManager("Error onClickWriteSelector", `пожалуйста, укажите селектор имен`);
            }

            initCommentList(DOM, {
                avaSelector: commentAvaSelector,
                nameSelector: commentNameSelector,
                commentSelector: textFieldValue,
            });

            const data: PayloadSelectorType = {
                selectorType: "commentListSelector",
                selectorValue: textFieldValue,
            };

            dispatch(editorCommentsTaskActions.writeSelector(data));

            setSelectorState("recordedSelcetor");
            setHelperText(`добавлен селектор: ${textFieldValue}`);
        } catch (error) {
            if (error instanceof Error) {
                const name = error.name;
                const message = error.message;
                setErrorState(true);
                setHelperText(`${name}: ${message}`);
            }
        }
    };

    const onClickDeleteSelector = () => {
        const data: PayloadSelectorType = {
            selectorType: "commentListSelector",
            selectorValue: "",
        };

        dispatch(editorCommentsTaskActions.deleteSelector(data));

        if (helperText) {
            setHelperText("");
        }

        setTextFieldValue("");
        setSelectorState("initSelector");
    };

    const onChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
        if (helperText) {
            setHelperText("");
        }

        if (errorState) {
            setErrorState(false);
        }

        const textFieldValue = e.target.value;
        setTextFieldValue(textFieldValue);
    };

    return {
        selectorState,
        textFieldValue,
        helperText,
        errorState,
        onChangeTextField,
        onClickWriteSelector,
        onClickDeleteSelector,
    };
};

export { useCommentListInputState };
// const onClickUpdateCommentList = () => {
//     try {
//         if (!commentNameSelector) {
//             throw new ErrorManager("Ошибка, отсутсвует селектор", "нет селектора имя комментатора");
//         }
//         if (!commentAvaSelector) {
//             throw new ErrorManager("Ошибка, отсутсвует селектор", "нет слектора ава комментатора");
//         }

//         const commentListNodes: NodeListOf<Element> = htmlDOM.querySelectorAll(textFieldValue);

//         if (commentListNodes.length === 0) {
//             throw new ErrorManager("Ошибка, селектор не найден", `селектор "${textFieldValue}" не найден`);
//         }
//         const data: IInitCommentListData = {
//             commentName: commentNameSelector,
//             commentAva: commentAvaSelector,
//             commentListNodes: commentListNodes,
//         };

//         // const initCommentList = getInitCommentList(data);
//         // editorCommentsController.handlerUpdateCommentList({ commentList: initCommentList });

//         setHelperText(`селектор найден: ${textFieldValue}`);
//     } catch (error) {
//         if (error instanceof Error) {
//             const name = error.name;
//             const message = error.message;
//             setErrorState(true);
//             setHelperText(`${name}: ${message}`);
//         }
//     }
// };

// const handlerChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
//     setTextFieldValue(e.target.value);
//     if (errorState) {
//         setErrorState(false);
//     }
//     setHelperText("нажмите кнопку добавить");
// };
