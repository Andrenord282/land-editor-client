//react//
import { MouseEvent } from "react";

//redux//
import { useDispatch, useSelector } from "react-redux";

//actions//
import { editorGeoTaskActions } from "store/editorGeoTask";

//selectors//
import { selectReplacedGeo } from "store/editorGeoTask";

//types//
import { TGeoValue, PayloadGeoValue } from "store/editorGeoTask";

//static data//
import { geoList } from "store/editorGeoTask/data";

type TReplaceGeoState = {
    replacedGeo: TGeoValue;
    onClickReplaceGeo: (e: MouseEvent<HTMLButtonElement>) => void;
};

const useReplaceGeoState = (): TReplaceGeoState => {
    const dispatch = useDispatch();
    const replacedGeo = useSelector(selectReplacedGeo);

    const onClickReplaceGeo = (e: MouseEvent<HTMLButtonElement>) => {
        const self = e.currentTarget;
        const selfAriaLabel = self.getAttribute("aria-label");

        if (selfAriaLabel) {
            const data: PayloadGeoValue = {
                geoValue: selfAriaLabel as TGeoValue,
            };

            dispatch(editorGeoTaskActions.updateReplaceGeo(data));
        }
    };

    return { replacedGeo, onClickReplaceGeo };
};

export { useReplaceGeoState };
