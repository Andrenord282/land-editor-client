// utilities //
import { ErrorManager, getObjectFieldValue } from "utilities";

// react //
import { useState, useEffect, ChangeEvent } from "react";

// redux //
import { useDispatch, useSelector } from "react-redux";

// actions //
import { editorTextTaskActions } from "store/editorTextTask";

// selectors //
import { selectJSONstring } from "store/editorTextTask";

// types //
import { ITextListElement } from "store/editorTextTask";
import { PayloadInputTextList } from "store/editorTextTask";

type TInputTextListState = "initInputTextList" | "recordedInputTextList";

type TInputJSONstate = {
    inputTextListState: TInputTextListState;
    textFieldValue: string;
    helperText: string;
    errorState: boolean;
    onClickWriteInputTextList: () => void;
    onClickDeleteInputTextList: () => void;
    onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useInputJSONstate = (): TInputJSONstate => {
    const dispatch = useDispatch();
    const JSONString = useSelector(selectJSONstring);
    const [inputTextListState, setInputTextListState] = useState<TInputTextListState>(
        !JSONString ? "initInputTextList" : "recordedInputTextList"
    );
    const [textFieldValue, setTextFieldValue] = useState(!JSONString ? "" : JSONString);
    const [helperText, setHelperText] = useState(!JSONString ? "" : "список задач добавлен");
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        if (!textFieldValue) {
            setHelperText("");
            setInputTextListState("initInputTextList");
        }
    }, [textFieldValue]);

    const onClickWriteInputTextList = () => {
        try {
            const parsedJSON = JSON.parse(textFieldValue);
            const checkLists = getObjectFieldValue("checklists", parsedJSON);

            if (!Array.isArray(checkLists)) {
                throw new ErrorManager(
                    "Error onClickWriteInputTextList",
                    "не удалось найти массив чеклистов: https://"
                );
            }

            const checkListItems: ITextListElement[][] = [];

            for (let index = 0; index < checkLists.length; index++) {
                checkListItems.push(checkLists[index].checkItems);
            }

            const inputTextList: ITextListElement[] = checkListItems.flat();

            console.log(inputTextList);

            const data: PayloadInputTextList = {
                inputTextList,
            };

            dispatch(editorTextTaskActions.writeInputTextList(data));
            setInputTextListState("recordedInputTextList");
            setHelperText("список задач добавлен");
        } catch (error) {
            if (error instanceof Error) {
                const name = error.name;
                const message = error.message;
                setErrorState(true);
                setHelperText(`${name}: ${message}`);
            }
        }
    };

    const onClickDeleteInputTextList = () => {
        if (helperText) {
            setHelperText("");
        }
        dispatch(editorTextTaskActions.deleteInputTextList());
        setTextFieldValue("");
        setInputTextListState("initInputTextList");
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
        inputTextListState,
        textFieldValue,
        helperText,
        errorState,
        onClickWriteInputTextList,
        onClickDeleteInputTextList,
        onChangeTextField,
    };
};

export { useInputJSONstate };
