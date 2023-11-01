// redux //
import { useSelector } from "react-redux";

// selectors //
import { ITextListElement, selectTaskList } from "store/editorTextTask";

// types //
import { IStore } from "store/types";
import { ITaskListProps } from "../TaskList";

type TTaskListState = {
    taskListElements: ITextListElement[];
};

const useTaskListState = (props: ITaskListProps): TTaskListState => {
    const { listName } = props;

    const taskListElements = useSelector((state: IStore) => selectTaskList(state, listName));
    return { taskListElements };
};

export { useTaskListState };
