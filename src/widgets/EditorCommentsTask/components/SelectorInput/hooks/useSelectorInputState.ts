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
import { selectSelectorName } from "store/editorCommentsTask/selectors";

// types //
import { IStore } from "store/types";
import { TSelectorInputProps } from "../SelectorInput";
import { PayloadSelectorType } from "store/editorCommentsTask";

type TSelectorState = "initSelector" | "recordedSelcetor";

type TSelectorInputState = {
    selectorState: TSelectorState;
    textFieldValue: string;
    errorState: boolean;
    helperText: string;
    onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickWriteSelector: () => void;
    onClickDeleteSelector: () => void;
};

const useSelectorInputState = (props: TSelectorInputProps): TSelectorInputState => {
    const { selectorType } = props;
    const dispatch = useDispatch();
    const selectorName = useSelector((state: IStore) => selectSelectorName(state, selectorType));
    const srcHtmlString = useSelector(selectSrcHtmlString);
    const [selectorState, setSelectorState] = useState<TSelectorState>(
        !selectorName ? "initSelector" : "recordedSelcetor"
    );
    const [textFieldValue, setTextFieldValue] = useState(selectorName);
    const [errorState, setErrorState] = useState(false);
    const [helperText, setHelperText] = useState(!selectorName ? "" : `добавлен селектор: ${selectorName}`);

    useEffect(() => {
        if (!textFieldValue) {
            setSelectorState("initSelector");
        }
    }, [textFieldValue]);

    const onClickWriteSelector = () => {
        try {
            if (errorState) {
                setErrorState(false);
            }

            if (!textFieldValue) {
                throw new ErrorManager(
                    "Error onClickWriteSelector",
                    `не удалось найти html, добавьте в иходных данный`
                );
            }

            const parser = new DOMParser();
            const DOM = parser.parseFromString(srcHtmlString, "text/html");

            if (DOM.querySelectorAll(textFieldValue).length === 0) {
                throw new ErrorManager("Error onClickWriteSelector", `не удалось найти селектор: ${textFieldValue}`);
            }

            const data: PayloadSelectorType = {
                selectorType,
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
            selectorType,
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
        errorState,
        helperText,
        onChangeTextField,
        onClickWriteSelector,
        onClickDeleteSelector,
    };
};

export { useSelectorInputState };
