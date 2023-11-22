import { Box, Grid } from "@mui/material";
import { InputList } from "./components/InputList";
import { CommentatorList } from "./components/CommentatorList";
import { CommentList } from "./components/CommentList";

const EditorCommentsTask = () => {
    return (
        <Box sx={{ p: "20px 0 20px 0" }}>
            <Grid container columnSpacing={4} alignItems="stretch">
                <Grid item xs={4} sx={{ height: "850px", overflow: "auto", p: "10px 10px 10px 0" }}>
                    <InputList />
                </Grid>
                <Grid item xs={4} sx={{ height: "850px", overflow: "auto", p: "10px 10px 10px 0" }}>
                    <CommentatorList />
                </Grid>
                <Grid item xs={4} sx={{ height: "850px", overflow: "auto", p: "10px 10px 10px 0" }}>
                    <CommentList />
                </Grid>
            </Grid>
        </Box>
    );
};

export { EditorCommentsTask };
