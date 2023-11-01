// components //
import { Box, Grid } from "@mui/material";
import { InputWWW } from "./components/InputWWW";
import { InputJSON } from "./components/InputJSON";
import { InputHTML } from "./components/InputHTML";
import { TaskLists } from "./components/TaskLists";
import { ImgFolderNameInput } from "./components/ImgFolderNameInput";

const EditorTextTask = () => {
    return (
        <Box sx={{ p: "40px 0 40px 0" }}>
            <Grid container>
                <Grid item container xs={12} columnSpacing={4} mb={6}>
                    <Grid item xs={3}>
                        <InputWWW />
                    </Grid>
                    <Grid item xs={3}>
                        <InputJSON />
                    </Grid>
                    <Grid item xs={3}>
                        <InputHTML />
                    </Grid>
                    <Grid item xs={3}>
                        <ImgFolderNameInput />
                    </Grid>
                </Grid>
                <TaskLists />
            </Grid>
        </Box>
    );
};

export { EditorTextTask };
