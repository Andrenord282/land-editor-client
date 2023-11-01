// hooks //
import { useEditorGeoTaskState } from "./hooks/useEditorGeoTaskState";

// components //
import { Box, Grid } from "@mui/material";
import { SelectTaskType } from "./components/SelectTaskType";
import { ReplaceGeo } from "./components/ReplaceGeo";
import { AddGeo } from "./components/AddGeo";

const EditorGeoTask = () => {
    const { geoTaskType, onClickSelectGeoTaskType } = useEditorGeoTaskState();

    return (
        <Box sx={{ flexGrow: 1, p: "20px 0 20px 0" }}>
            <Grid container flexDirection="column" rowSpacing={2}>
                <Grid item xs={4}>
                    <SelectTaskType geoTaskType={geoTaskType} onClickSelectGeoTaskType={onClickSelectGeoTaskType} />
                </Grid>
                {geoTaskType === "replace-geo" && (
                    <Grid item xs={4}>
                        <ReplaceGeo />
                    </Grid>
                )}
                {geoTaskType === "add-geo" && (
                    <Grid item xs={4}>
                        <AddGeo />
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export { EditorGeoTask };
