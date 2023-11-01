// hooks //
import { useAddGeoState } from "./hooks/useAddGeoState";

//components//
import { Box, ButtonGroup, Button, Typography } from "@mui/material";

//static data//
import { geoList } from "store/editorGeoTask/data";

const AddGeo = () => {
    const { initGeo, adaptGeoList, onClickUpdateInitGeo, onClickUpdateGeoList } = useAddGeoState();

    return (
        <Box>
            <Typography>Выберите исходное гео</Typography>
            <ButtonGroup>
                {geoList &&
                    geoList.length > 0 &&
                    geoList.map((geo) => {
                        return (
                            <Button
                                key={geo}
                                size="small"
                                variant={initGeo === geo ? "contained" : "outlined"}
                                aria-label={geo}
                                onClick={onClickUpdateInitGeo}
                            >
                                {geo}
                            </Button>
                        );
                    })}
            </ButtonGroup>
            {initGeo && (
                <>
                    <Typography>Выберите гео на добавление</Typography>
                    <ButtonGroup>
                        {geoList &&
                            geoList.length > 0 &&
                            geoList.map((geo) => {
                                if (initGeo !== geo) {
                                    return (
                                        <Button
                                            key={geo}
                                            size="small"
                                            variant={adaptGeoList.includes(geo) ? "contained" : "outlined"}
                                            aria-label={geo}
                                            onClick={onClickUpdateGeoList}
                                        >
                                            {geo}
                                        </Button>
                                    );
                                }
                            })}
                    </ButtonGroup>
                </>
            )}
        </Box>
    );
};

export { AddGeo };
