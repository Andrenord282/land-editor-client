//redux//
import { useDispatch } from "react-redux";

//actions//
import { editorGeoTaskActions } from "store/editorGeoTask";

//types//
import { PayloadGeoValue } from "store/editorGeoTask";

const useEditorGeoTaskController = () => {
    const dispatch = useDispatch();

    const handleUpdateInitGeo = (data: PayloadGeoValue) => {
        dispatch(editorGeoTaskActions.updateInitGeo(data));
    };

    const handleReplaceGeo = (data: PayloadGeoValue) => {
        dispatch(editorGeoTaskActions.updateReplaceGeo(data));
    };

    const handleUpdateGeoList = (data: PayloadGeoValue) => {
        dispatch(editorGeoTaskActions.updateGeoList(data));
    };

    const handleResetValue = () => {
        dispatch(editorGeoTaskActions.resetValues());
    };

    return {
        handleUpdateInitGeo,
        handleReplaceGeo,
        handleUpdateGeoList,
        handleResetValue,
    };
};

export { useEditorGeoTaskController };
