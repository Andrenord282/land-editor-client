import { AdaptGeoListLog } from "../AdaptGeoListLog";
import { ReplaceGeoListLog } from "../ReplaceGeoListLog";
import { ReplaceTextListLog } from "../ReplaceTextListLog";
import { useCompilerLogListState } from "./hooks/useCompilerLogListState";
import { Box, Typography, Input, Button, Grid } from "@mui/material";

const LogLists = () => {
    const { replaceTextListLog, addGeoTextListLog, replaceGeoListLog, adaptGeoListLog } = useCompilerLogListState();

    return (
        <Box>
            <Grid container columnSpacing={2}>
                {replaceTextListLog && (
                    <Grid item xs={4}>
                        <ReplaceTextListLog replaceTextListLog={replaceTextListLog} />
                    </Grid>
                )}
                {adaptGeoListLog && (
                    <Grid item xs={4}>
                        <AdaptGeoListLog adaptGeoListLog={adaptGeoListLog} />
                    </Grid>
                )}
                {replaceGeoListLog && (
                    <Grid item xs={4}>
                        <ReplaceGeoListLog replaceGeoListLog={replaceGeoListLog} />
                    </Grid>
                )}

                <Grid item xs={4}></Grid>
            </Grid>
        </Box>
    );
};

export { LogLists };
