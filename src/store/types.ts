import { TEditorTextTaskSlice } from "./editorTextTask";
import { IEditorGeoTaskSlice } from "./editorGeoTask/types";
import { IEditorCommnentsTaskSlice } from "./editorCommentsTask/types";
import { TCompilerLogListSlice } from "./compilerLogList/types";

export interface IStore {
    editorTextTask: TEditorTextTaskSlice;
    editorGeoTask: IEditorGeoTaskSlice;
    editorCommentsTask: IEditorCommnentsTaskSlice;
    compilerLogList: TCompilerLogListSlice;
}
