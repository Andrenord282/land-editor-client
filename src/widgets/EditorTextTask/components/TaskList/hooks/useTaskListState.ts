// redux //
import { useSelector } from "react-redux";

// selectors //
import { TTextListElement, selectTaskList } from "store/editorTextTask";

// types //
import { IStore } from "store/types";
import { ITaskListProps } from "../TaskList";

type TTaskListState = {
    taskListElements: TTextListElement[];
};

const useTaskListState = (props: ITaskListProps): TTaskListState => {
    const { listName } = props;

    const taskListElements = useSelector((state: IStore) => selectTaskList(state, listName));
    return { taskListElements };
};

export { useTaskListState };
