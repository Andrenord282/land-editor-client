import { IStore } from "store/types";

const selectInitGeo = (state: IStore) => state.editorGeoTask.initGeo;
const selectReplacedGeo = (state: IStore) => state.editorGeoTask.replacedGeo;
const selectAdaptGeoList = (state: IStore) => state.editorGeoTask.adaptGeoList;

export { selectInitGeo, selectReplacedGeo, selectAdaptGeoList };
