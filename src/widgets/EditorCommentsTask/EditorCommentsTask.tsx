// components //
import { Box, Grid } from "@mui/material";
import { InputList } from "./components/InputList";
import { CommentatorList } from "./components/CommentatorList";
import { CommentList } from "./components/CommentList";

const EditorCommentsTask = () => {
    return (
        <Box sx={{ p: "20px 0 20px 0" }}>
            <Grid container columnSpacing={4} alignItems="stretch" sx={{ minHeight: "790px" }}>
                <Grid item xs={4}>
                    <InputList />
                </Grid>
                <Grid item xs={4}>
                    <CommentatorList />
                </Grid>
                <Grid item xs={4}>
                    <CommentList />
                </Grid>
            </Grid>
        </Box>
    );
};

export { EditorCommentsTask };
