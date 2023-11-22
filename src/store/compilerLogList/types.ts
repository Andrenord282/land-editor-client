export type TCountryCode = "RU" | "KZ" | "UZ" | "KG" | "TJ";

type TInitText = {
    initText?: string;
};

export type TReplaceText = {
    old: string;
    new: string;
};

export type TReplaceTextListLog = {
    totalPairText: number;
    replaceTextCounter: number;
    notFoundText: TReplaceText[];
};

export type TAddGeoTexItem = TInitText & {
    [key in TCountryCode]?: string;
};

export type TAddGeoTexListLog = {
    totalAddGeoText: number;
    addGeoTextCounter: number;
    notFoundText: TAddGeoTexItem[];
};

export type TReplaceGeoListLog = {
    totalCounterNames: number;
    totalCounterAva: number;
    replaceCounterNames: number;
    replaceCounterAva: number;
    errorNameList: string[];
    errorAvaList: string[];
};

export type TGeoListLogItem = {
    countryCode: string;
    totalCounterNames: number;
    addCounterNames: number;
    totalCounterAva: number;
    addCounterAva: number;
    errorNameList: string[];
    errorAvaList: string[];
};

export type TGeoListLog = TGeoListLogItem[];

export type TCompilerLogListSlice = {
    refToNewLand: string;
    replaceTextListLog?: TReplaceTextListLog;
    addGeoTextListLog?: TAddGeoTexListLog;
    replaceGeoListLog?: TReplaceGeoListLog;
    adapGeoListLog?: TGeoListLog;
};

export type PayloadCompilerLogList = {
    refToNewLand: string;
    replaceTextListLog?: TReplaceTextListLog;
    addGeoTextListLog?: TAddGeoTexListLog;
    replaceGeoListLog?: TReplaceGeoListLog;
    adapGeoListLog?: TGeoListLog;
};
