import { Box, Typography, Grid } from "@mui/material";
import { TReplaceTextListLog } from "store/compilerLogList/types";

type TReplaceTextListLogProps = {
    replaceTextListLog: TReplaceTextListLog | undefined;
};

const ReplaceTextListLog = (props: TReplaceTextListLogProps) => {
    const { replaceTextListLog } = props;

    if (!replaceTextListLog) return;

    return (
        <Box>
            <Grid container flexDirection="column">
                <Typography variant="body1">
                    Сделана замена: {replaceTextListLog.replaceTextCounter} из {replaceTextListLog.totalPairText}
                </Typography>
                {replaceTextListLog.notFoundText && replaceTextListLog.notFoundText.length > 0 && (
                    <Typography variant="body1">Не удалось поменять текст:</Typography>
                )}
                {replaceTextListLog.notFoundText &&
                    replaceTextListLog.notFoundText.length > 0 &&
                    replaceTextListLog.notFoundText.map((pairText) => {
                        return (
                            <Box key={pairText.old} sx={{ border: "1px solid #000", padding: "5px" }}>
                                <Typography variant="body1" sx={{ backgroundColor: "red" }}>
                                    Старый текст
                                </Typography>
                                <Typography variant="body1">{pairText.old}</Typography>
                                <Typography variant="body1" sx={{ backgroundColor: "yellow" }}>
                                    Новый текст
                                </Typography>
                                <Typography variant="body1">{pairText.new}</Typography>
                            </Box>
                        );
                    })}
            </Grid>
        </Box>
    );
};

export { ReplaceTextListLog };
