// utilities //
import { ErrorManager } from "utilities/errorManager";

// react //
import { useState, useEffect, ChangeEvent } from "react";

// redux //
import { useDispatch, useSelector } from "react-redux";

// actions //
import { editorTextTaskActions } from "store/editorTextTask";

// selectors //
import { selectLandAddress } from "store/editorTextTask";

// types //
import { PayloadLandAddress } from "store/editorTextTask";

type TLandAddressState = "initAddress" | "recordedAddress";

type TInputWWWState = {
    landAddressState: TLandAddressState;
    textFieldValue: string;
    helperText: string;
    errorState: boolean;
    onClickWriteLandAddress: () => void;
    onClickDeleteLandAddress: () => void;
    onChangeTextField: (e: ChangeEvent<HTMLInputElement>) => void;
};

const useInputWWWState = (): TInputWWWState => {
    const dispatch = useDispatch();
    const landAddress = useSelector(selectLandAddress);
    const [landAddressState, setLandAddressState] = useState<TLandAddressState>(
        !landAddress ? "initAddress" : "recordedAddress"
    );
    const [textFieldValue, setTextFieldValue] = useState(!landAddress ? "" : landAddress);
    const [helperText, setHelperText] = useState(!landAddress ? "" : `добавлен адрес: ${textFieldValue}`);
    const [errorState, setErrorState] = useState(false);

    useEffect(() => {
        if (!textFieldValue) {
            setHelperText("");
            setLandAddressState("initAddress");
        }
    }, [textFieldValue]);

    const onClickWriteLandAddress = () => {
        try {
            if (!/^https:\/\//.test(textFieldValue)) {
                throw new ErrorManager("Error onClickWriteLandAddress", "текстовое поле не содержит: https://");
            }
            const data: PayloadLandAddress = {
                landAddress: textFieldValue,
            };

            dispatch(editorTextTaskActions.writeLandAddress(data));
            setLandAddressState("recordedAddress");
            setHelperText(`добавлен адрес: ${textFieldValue}`);
        } catch (error) {
            if (error instanceof Error) {
                const name = error.name;
                const message = error.message;
                setErrorState(true);
                setHelperText(`${name}: ${message}`);
            }
        }
    };

    const onClickDeleteLandAddress = () => {
        if (helperText) {
            setHelperText("");
        }
        dispatch(editorTextTaskActions.deleteLandAddress());
        setTextFieldValue("");
        setLandAddressState("initAddress");
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
        landAddressState,
        textFieldValue,
        helperText,
        errorState,
        onClickWriteLandAddress,
        onClickDeleteLandAddress,
        onChangeTextField,
    };
};

export { useInputWWWState };
