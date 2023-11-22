import { IStore } from "store/types";
import { TReplaceTextListLog, TAddGeoTexListLog, TReplaceGeoListLog, TGeoListLog } from "./types";

export const selectRefToNewLand = (state: IStore): string => state.compilerLogList.refToNewLand;
export const selectReplaceTextListLog = (state: IStore): TReplaceTextListLog | undefined =>
    state.compilerLogList.replaceTextListLog;
export const selectaAddGeoTextListLog = (state: IStore): TAddGeoTexListLog | undefined =>
    state.compilerLogList.addGeoTextListLog;
export const selectReplaceGeoListLog = (state: IStore): TReplaceGeoListLog | undefined =>
    state.compilerLogList.replaceGeoListLog;
export const selectadapGeoListLog = (state: IStore): TGeoListLog | undefined => state.compilerLogList.adapGeoListLog;
