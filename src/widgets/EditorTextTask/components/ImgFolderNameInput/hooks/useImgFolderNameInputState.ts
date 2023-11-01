// utilities //
import { ErrorManager } from "utilities/errorManager";

// react //
import { useState, useEffect, ChangeEvent } from "react";

// redux //
import { useDispatch, useSelector } from "react-redux";

// actions //
import { editorCommentsTaskActions } from "store/editorCommentsTask";
import { editorTextTaskActions } from "store/editorTextTask";

// selectors //
import { selectImgFolderName } from "store/editorTextTask";

// types //
import { PayloadImgFolderName } from "store/editorTextTask";

type TImgFolderNameState = "initImgFolderName" | "recordedImgFolderName";

type TImgFolderNameInputState = {
    imgFolderNameState: TImgFolderNameState;
    textFieldValue: string;
    helperText: string;
    errorState: boolean;
    handlerChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickWriteImgFolderName: () => void;
    onClickDeleteImgFolderName: () => void;
};

const useImgFolderNameInputState = (): TImgFolderNameInputState => {
    const dispatch = useDispatch();
    const imgFolderName = useSelector(selectImgFolderName);
    const [imgFolderNameState, setImgFolderNameState] = useState<TImgFolderNameState>(
        !imgFolderName ? "initImgFolderName" : "recordedImgFolderName"
    );
    const [textFieldValue, setTextFieldValue] = useState(imgFolderName);
    const [helperText, setHelperText] = useState(!imgFolderName ? "" : `название папки: ${imgFolderName}`);
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        if (!textFieldValue) {
            setImgFolderNameState("initImgFolderName");
        }
    }, [textFieldValue]);

    const onClickWriteImgFolderName = () => {
        try {
            if (errorState) {
                setErrorState(false);
            }

            if (textFieldValue.length === 0) {
                throw new ErrorManager("Error onClickWriteImgFolderName", "текстовое поле пустое");
            }

            const data: PayloadImgFolderName = {
                imgFolderName: textFieldValue,
            };

            dispatch(editorTextTaskActions.writeImgFolderName(data));
            setImgFolderNameState("recordedImgFolderName");
            setHelperText(`название папки: ${textFieldValue}`);
        } catch (error) {
            if (error instanceof Error) {
                const name = error.name;
                const message = error.message;
                setErrorState(true);
                setHelperText(`${name}: ${message}`);
            }
        }
    };

    const onClickDeleteImgFolderName = () => {
        dispatch(editorTextTaskActions.deleteImgFolderName());
        setTextFieldValue("");
        setHelperText("");
        setImgFolderNameState("initImgFolderName");
    };

    const handlerChangeTextField = (e: ChangeEvent<HTMLInputElement>) => {
        if (helperText) {
            setHelperText("");
        }
        if (errorState) {
            setErrorState(false);
        }

        const textFieldValue = e.target.value.trim();
        setTextFieldValue(textFieldValue);
    };

    return {
        imgFolderNameState,
        textFieldValue,
        helperText,
        errorState,
        handlerChangeTextField,
        onClickWriteImgFolderName,
        onClickDeleteImgFolderName,
    };
};

export { useImgFolderNameInputState };
