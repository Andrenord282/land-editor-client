import { IEditorTextTaskSlice } from "./editorTextTask";
import { IEditorGeoTaskSlice } from "./editorGeoTask/types";
import { IEditorCommnentsTaskSlice } from "./editorCommentsTask/types";

export interface IStore {
    editorTextTask: IEditorTextTaskSlice;
    editorGeoTask: IEditorGeoTaskSlice;
    editorCommentsTask: IEditorCommnentsTaskSlice;
}
