// utilities //
import { formService } from "utilities/formService";

// react //
import { useState, useRef, RefObject, ChangeEvent } from "react";

// hooks //
import { useTasksDataCollection } from "./useTasksDataCollection";
import { TFetchOptions, useFetch } from "hooks/useFetch";

type TFileInputState = {
    fileName: string;
    fileInputRef: RefObject<HTMLInputElement> | null;
    onClickAddFile: () => void;
    onChangeFileInput: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickCompilation: () => void;
};

const useFileInputState = (): TFileInputState => {
    const [fileName, setFileName] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { dataCollection } = useTasksDataCollection();
    const { postFetch } = useFetch();

    const onClickAddFile = () => {
        if (fileInputRef.current) fileInputRef.current.click();
    };

    const onChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length === 1) {
            const selectedFile = e.target.files[0];
            const data = dataCollection();
            formService.pushFile(selectedFile);
            formService.collectData(data);
            setFileName(selectedFile.name);
        }
    };

    const onClickCompilation = () => {
        const fetchOpstions: TFetchOptions = {
            url: "http://localhost:5000/compile/post",
            body: formService.formData,
        };

        postFetch(fetchOpstions);
    };

    return {
        fileName,
        fileInputRef,
        onClickAddFile,
        onChangeFileInput,
        onClickCompilation,
    };
};

export { useFileInputState };
