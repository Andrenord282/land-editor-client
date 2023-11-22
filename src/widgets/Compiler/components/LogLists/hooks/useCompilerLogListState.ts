import { useSelector } from "react-redux";
import { selectadapGeoListLog, selectReplaceGeoListLog, selectReplaceTextListLog } from "store/compilerLogList";
import { TGeoListLog, TReplaceGeoListLog, TReplaceTextListLog } from "store/compilerLogList/types";
import { TTextListElement, selectAddGeoTextList } from "store/editorTextTask";

type TCompilerLogListState = {
    replaceTextListLog: TReplaceTextListLog | undefined;
    addGeoTextListLog: TTextListElement[];
    replaceGeoListLog: TReplaceGeoListLog | undefined;
    adaptGeoListLog: TGeoListLog | undefined;
};

const useCompilerLogListState = (): TCompilerLogListState => {
    const replaceTextListLog = useSelector(selectReplaceTextListLog);
    const addGeoTextListLog = useSelector(selectAddGeoTextList);
    const replaceGeoListLog = useSelector(selectReplaceGeoListLog);
    const adaptGeoListLog = useSelector(selectadapGeoListLog);

    return {
        replaceTextListLog,
        addGeoTextListLog,
        replaceGeoListLog,
        adaptGeoListLog,
    };
};

export { useCompilerLogListState };
