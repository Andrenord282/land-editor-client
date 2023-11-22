import { formService } from "utilities/formService";
import { useState, useRef, RefObject, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { compilerLogListActions, selectRefToNewLand } from "store/compilerLogList";
import { useTasksDataCollection } from "./useTasksDataCollection";
import { ServerResponse, TFetchOptions, useFetch } from "hooks/useFetch";
import { PayloadCompilerLogList } from "store/compilerLogList/types";

type TFileInputState = {
    refToNewLand: string;
    compilationCompleted: boolean;
    fileName: string;
    fileInputRef: RefObject<HTMLInputElement> | null;
    activeSendBtn: boolean;
    onClickAddFile: () => void;
    onChangeFileInput: (e: ChangeEvent<HTMLInputElement>) => void;
    onClickCompilation: () => void;
};

const useFileInputState = (): TFileInputState => {
    const dispatch = useDispatch();
    const refToNewLand = useSelector(selectRefToNewLand);
    const [fileName, setFileName] = useState("");
    const [activeSendBtn, setActiveSendBtn] = useState(false);
    const [compilationCompleted, setCompilationCompleted] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const { dataCollection } = useTasksDataCollection();
    const { postFetch } = useFetch();

    const onClickAddFile = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
            dispatch(compilerLogListActions.resetCompilerLogList());
        }
    };

    const onChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (formService.fileList.length > 0) {
            formService.resetFileList();
        }

        if (e.target.files && e.target.files.length === 1) {
            const selectedFile = e.target.files[0];
            const data = dataCollection();
            formService.pushFile(selectedFile);
            formService.collectData(data);
            setFileName(selectedFile.name);
            setActiveSendBtn(true);
        }
    };

    const onClickCompilation = async () => {
        const fetchOpstions: TFetchOptions = {
            url: "http://localhost:6700/compile/post",
            body: formService.formData,
        };

        const response = await postFetch(fetchOpstions);
        if (response instanceof Response && response.status === ServerResponse.SUCCESS) {
            const logList = (await response.json()) as PayloadCompilerLogList;
            dispatch(compilerLogListActions.updateCompilerLogList(logList));
            setCompilationCompleted(true);
        }
    };

    return {
        refToNewLand,
        compilationCompleted,
        fileName,
        fileInputRef,
        activeSendBtn,
        onClickAddFile,
        onChangeFileInput,
        onClickCompilation,
    };
};

export { useFileInputState };
