// hooks //
import { useReplaceGeoState } from "./hooks/useReplaceGeoState";

//components//
import { Box, ButtonGroup, Button, Typography } from "@mui/material";

//static data//
import { geoList } from "store/editorGeoTask/data";

const ReplaceGeo = () => {
    const { replacedGeo, onClickReplaceGeo } = useReplaceGeoState();

    return (
        <Box>
            <Typography>Выберите новое гео</Typography>
            <ButtonGroup>
                {geoList &&
                    geoList.length > 0 &&
                    geoList.map((geo) => {
                        return (
                            <Button
                                key={geo}
                                size="small"
                                variant={replacedGeo === geo ? "contained" : "outlined"}
                                aria-label={geo}
                                onClick={onClickReplaceGeo}
                            >
                                {geo}
                            </Button>
                        );
                    })}
            </ButtonGroup>
        </Box>
    );
};

export { ReplaceGeo };
