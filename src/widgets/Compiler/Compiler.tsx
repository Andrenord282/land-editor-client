import { Box, Grid } from "@mui/material";
import { FileInput } from "./components/FileInput";
import { LogLists } from "./components/LogLists";

const Compiler = () => {
    return (
        <Box sx={{ p: "20px 0 20px 0" }}>
            <Grid item xs={4} sx={{ marginBottom: 2 }}>
                <FileInput />
            </Grid>
            <Grid item xs={12} sx={{ height: "850px", overflow: "auto", p: "10px 10px 10px 0" }}>
                <LogLists />
            </Grid>
        </Box>
    );
};

export { Compiler };
