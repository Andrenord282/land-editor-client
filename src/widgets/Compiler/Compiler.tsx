// components //
import { Box, Grid } from "@mui/material";
import { FileInput } from "./components/FileInput";

const Compiler = () => {
    return (
        <Box sx={{ p: "20px 0 20px 0" }}>
            <Grid container columnSpacing={4} alignItems="stretch" sx={{ minHeight: "790px" }}>
                <Grid item xs={4}>
                    <FileInput />
                </Grid>
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    );
};

export { Compiler };
