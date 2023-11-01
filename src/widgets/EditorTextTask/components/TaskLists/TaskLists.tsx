//selectors//
import { selectInputTextList, selectreplaceText, selectAddGeoTextList } from "store/editorTextTask";

//components//
import { Grid } from "@mui/material";
import { TaskList } from "../TaskList";

const TaskLists = () => {

    return (
        <Grid item container xs={12} columnSpacing={4}>
            <Grid item xs={4}>
                <TaskList title="Список заданий" listName="inputTextList" />
            </Grid>
            <Grid item xs={4}>
                <TaskList title="Замена текста" listName="replaceText" />
            </Grid>
            <Grid item xs={4}>
                <TaskList title="Добавление гео" listName="addGeoText" />
            </Grid>
        </Grid>
    );
};

export { TaskLists };
