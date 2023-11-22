// hooks //
import { useTaskListState } from "./hooks/useTaskListState";

//components//
import { Box, Stack, Typography } from "@mui/material";
import { TaskListItem } from "../TaskListItem";

//types//
import { TTextListElement, TEditorTaskListName } from "store/editorTextTask";

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
            <Box sx={{ height: "850px", overflow: "auto", p: "10px 10px 10px 0" }}>
                {taskListElements &&
                    taskListElements.length > 0 &&
                    taskListElements.map((element: TTextListElement, index) => {
                        return (
                            <TaskListItem key={element.id} itemIdndex={index} listName={listName} element={element} />
                        );
                    })}
            </Box>
        </Stack>
    );
};

export { TaskList };
