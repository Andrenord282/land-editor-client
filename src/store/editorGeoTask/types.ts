type TGeoTaskType = "replace-geo" | "add-geo";

type TGeoValue = "RU" | "KZ" | "UZ" | "KG" | "TJ" | "GE" | "";

interface IEditorGeoTaskSlice {
    initGeo: TGeoValue;
    replacedGeo: TGeoValue;
    geoList: TGeoValue[];
    adaptGeoList: TGeoValue[];
}

interface PayloadGeoValue {
    geoValue: TGeoValue;
}

export { IEditorGeoTaskSlice, PayloadGeoValue, TGeoTaskType, TGeoValue };
