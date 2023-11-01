// react //
import { useState, MouseEvent } from "react";

//redux//
import { useDispatch } from "react-redux";

//actions//
import { editorGeoTaskActions } from "store/editorGeoTask";

// types //
import { TGeoTaskType } from "store/editorGeoTask";

type TEditorGeoTaskState = {
    geoTaskType: TGeoTaskType;
    onClickSelectGeoTaskType: (e: MouseEvent<HTMLButtonElement>) => void;
};

const useEditorGeoTaskState = (): TEditorGeoTaskState => {
    const dispatch = useDispatch();
    const [geoTaskType, setGeoTaskType] = useState<TGeoTaskType>("add-geo");

    const onClickSelectGeoTaskType = (e: MouseEvent<HTMLButtonElement>) => {
        const self = e.currentTarget;
        const selfAriaLabel = self.getAttribute("aria-label");

        if (selfAriaLabel) {
            setGeoTaskType(selfAriaLabel as TGeoTaskType);
            dispatch(editorGeoTaskActions.resetValues());
        }
    };

    return {
        geoTaskType,
        onClickSelectGeoTaskType,
    };
};

export { useEditorGeoTaskState };
