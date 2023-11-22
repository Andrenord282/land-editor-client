import { Box, Typography, Grid } from "@mui/material";
import { TReplaceGeoListLog } from "store/compilerLogList/types";

type TReplaceGeoListLogProps = {
    replaceGeoListLog: TReplaceGeoListLog | undefined;
};

const ReplaceGeoListLog = (props: TReplaceGeoListLogProps) => {
    const { replaceGeoListLog } = props;

    if (!replaceGeoListLog) return;

    return (
        <Box>
            <Grid container flexDirection="column" rowSpacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1">
                        заменено имен: {replaceGeoListLog.replaceCounterNames} из {replaceGeoListLog.totalCounterNames}
                    </Typography>
                    <Typography variant="body1">
                        заменено аватарок: {replaceGeoListLog.replaceCounterAva} из {replaceGeoListLog.totalCounterAva}
                    </Typography>
                    {replaceGeoListLog.errorNameList &&
                        replaceGeoListLog.errorNameList.length > 0 &&
                        replaceGeoListLog.errorNameList.map((item) => {
                            return (
                                <Typography key={item} variant="body1">
                                    нет имени: {item}
                                </Typography>
                            );
                        })}
                    {replaceGeoListLog.errorAvaList &&
                        replaceGeoListLog.errorAvaList.length > 0 &&
                        replaceGeoListLog.errorAvaList.map((item) => {
                            return (
                                <Typography key={item} variant="body1">
                                    нет аватарки: {item}
                                </Typography>
                            );
                        })}
                </Grid>
            </Grid>
        </Box>
    );
};

export { ReplaceGeoListLog };
