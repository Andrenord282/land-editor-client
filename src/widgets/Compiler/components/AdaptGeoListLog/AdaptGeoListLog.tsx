import { Box, Typography, Grid } from "@mui/material";
import { TGeoListLog } from "store/compilerLogList/types";

type TAdaptGeoListLogProps = {
    adaptGeoListLog: TGeoListLog | undefined;
};

const AdaptGeoListLog = (props: TAdaptGeoListLogProps) => {
    const { adaptGeoListLog } = props;

    if (!adaptGeoListLog || adaptGeoListLog.length === 0) return;

    return (
        <Box>
            <Grid container flexDirection="column" rowSpacing={2}>
                {adaptGeoListLog.map((geoItem) => {
                    return (
                        <Grid item xs={12} key={geoItem.countryCode}>
                            <Typography variant="body1">ГЕО: {geoItem.countryCode}</Typography>
                            <Typography variant="body1">
                                добавлено имен: {geoItem.addCounterNames} из {geoItem.totalCounterNames}
                            </Typography>
                            <Typography variant="body1">
                                добавлено аватарок: {geoItem.addCounterAva} из {geoItem.totalCounterAva}
                            </Typography>
                            {geoItem.errorNameList &&
                                geoItem.errorNameList.length > 0 &&
                                geoItem.errorNameList.map((item) => {
                                    return (
                                        <Typography key={item} variant="body1">
                                            нет имени: {item}
                                        </Typography>
                                    );
                                })}
                            {geoItem.errorAvaList &&
                                geoItem.errorAvaList.length > 0 &&
                                geoItem.errorAvaList.map((item) => {
                                    return (
                                        <Typography key={item} variant="body1">
                                            нет аватарки: {item}
                                        </Typography>
                                    );
                                })}
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export { AdaptGeoListLog };
