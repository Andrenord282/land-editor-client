//react//
import { MouseEvent } from "react";

//redux//
import { useDispatch, useSelector } from "react-redux";

//actions//
import { editorGeoTaskActions } from "store/editorGeoTask";

//selectors//
import { selectInitGeo, selectAdaptGeoList, PayloadGeoValue } from "store/editorGeoTask";

//types//
import { TGeoValue } from "store/editorGeoTask";

type TAddGeoState = {
    initGeo: TGeoValue;
    adaptGeoList: TGeoValue[];
    onClickUpdateInitGeo: (e: MouseEvent<HTMLButtonElement>) => void;
    onClickUpdateGeoList: (e: MouseEvent<HTMLButtonElement>) => void;
};

const useAddGeoState = (): TAddGeoState => {
    const dispatch = useDispatch();
    const initGeo = useSelector(selectInitGeo);
    const adaptGeoList = useSelector(selectAdaptGeoList);

    const onClickUpdateInitGeo = (e: MouseEvent<HTMLButtonElement>) => {
        const self = e.currentTarget;
        const selfAriaLabel = self.getAttribute("aria-label");

        if (selfAriaLabel) {
            const data: PayloadGeoValue = {
                geoValue: selfAriaLabel as TGeoValue,
            };
            dispatch(editorGeoTaskActions.updateInitGeo(data));
        }
    };

    const onClickUpdateGeoList = (e: MouseEvent<HTMLButtonElement>) => {
        const self = e.currentTarget;
        const selfAriaLabel = self.getAttribute("aria-label");

        if (selfAriaLabel) {
            const data: PayloadGeoValue = {
                geoValue: selfAriaLabel as TGeoValue,
            };
            dispatch(editorGeoTaskActions.updateGeoList(data));
        }
    };

    return { initGeo, adaptGeoList, onClickUpdateInitGeo, onClickUpdateGeoList };
};

export { useAddGeoState };
