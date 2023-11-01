// utilities //
import { ErrorManager } from "utilities";

// react //
import { useState, useEffect, ChangeEvent } from "react";

// redux //
import { useDispatch, useSelector } from "react-redux";

// actions //
import { editorTextTaskActions } from "store/editorTextTask";

// selectors //
import { selectSrcHtmlString } from "store/editorTextTask";

// types//
import { PayloadSrcHtmlString } from "store/editorTextTask";

type TSrcHtmlStringState = "initsrcHtmlString" | "recordedsrcHtmlString";

type TInputHtmlState = {
    srcHtmlStringState: TSrcHtmlStringState;
    textFieldValue: string;
    helperText: string;
    errorState: boolean;
    onClickWriteSrcHtmlString: () => void;
    onClickDeleteSrcHtmlString: () => void;
    onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useInputHtmlState = (): TInputHtmlState => {
    const dispatch = useDispatch();
    const srcHtmlString = useSelector(selectSrcHtmlString);
    const [srcHtmlStringState, setSrcHtmlStringState] = useState<TSrcHtmlStringState>(
        !srcHtmlString ? "initsrcHtmlString" : "recordedsrcHtmlString"
    );
    const [textFieldValue, setTextFieldValue] = useState(!srcHtmlString ? "" : srcHtmlString);
    const [helperText, setHelperText] = useState(!srcHtmlString ? "" : "html разметка добавлена");
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        if (!textFieldValue) {
            setHelperText("");
            setSrcHtmlStringState("initsrcHtmlString");
        }
    }, [textFieldValue]);

    const onClickWriteSrcHtmlString = () => {
        try {
            if (!/<html/.test(textFieldValue)) {
                throw new ErrorManager("Error onClickWriteSrcHtmlString", "не удалось найти разметку html");
            }

            const srcHtmlString = textFieldValue.replace(/s+/g, "");

            const data: PayloadSrcHtmlString = {
                srcHtmlString,
            };

            dispatch(editorTextTaskActions.wrtireSrcHtmlString(data));

            setSrcHtmlStringState("recordedsrcHtmlString");
            setHelperText("html разметка добавлена");
        } catch (error) {
            if (error instanceof Error) {
                const name = error.name;
                const message = error.message;
                setErrorState(true);
                setHelperText(`${name}: ${message}`);
            }
        }
    };

    const onClickDeleteSrcHtmlString = () => {
        if (helperText) {
            setHelperText("");
        }
        dispatch(editorTextTaskActions.deleteSrcHtmlStrings());
        setTextFieldValue("");
        setSrcHtmlStringState("initsrcHtmlString");
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
        srcHtmlStringState,
        textFieldValue,
        helperText,
        errorState,
        onClickWriteSrcHtmlString,
        onClickDeleteSrcHtmlString,
        onChangeTextField,
    };
};

export { useInputHtmlState };
