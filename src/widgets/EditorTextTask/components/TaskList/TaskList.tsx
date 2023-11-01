// hooks //
import { useTaskListState } from "./hooks/useTaskListState";

//components//
import { Stack, Typography } from "@mui/material";
import { TaskListItem } from "../TaskListItem";

//types//
import { ITextListElement, TEditorTaskListName } from "store/editorTextTask";

export type ITaskListProps = {
    title: string;
    listName: TEditorTaskListName;
};

const TaskList = (props: ITaskListProps) => {
    const { title, listName } = props;
    const { taskListElements } = useTaskListState(props);
    return (
        <Stack spacing={2}>
            <Typography variant="h5">{title}</Typography>
            {taskListElements &&
                taskListElements.length > 0 &&
                taskListElements.map((element: ITextListElement, index) => {
                    return <TaskListItem key={element.id} itemIdndex={index} listName={listName} element={element} />;
                })}
        </Stack>
    );
};

export { TaskList };
