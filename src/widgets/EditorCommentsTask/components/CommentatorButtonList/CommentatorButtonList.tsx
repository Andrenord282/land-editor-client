// hooks //
import { useCommentatorButtonListState } from "./hooks/useCommentatorButtonListState";

//components//
import { Box, Grid, Button, Typography } from "@mui/material";

const CommentatorButtonList = () => {
    const { onClickAddCommentator } = useCommentatorButtonListState();

    return (
        <Box>
            <Grid container justifyContent="center" rowSpacing={2} columnSpacing={2}>
                <Grid item xs={12}>
                    <Typography variant="body1" textAlign="center">
                        Настройте список комментаторов
                    </Typography>
                </Grid>
                <Grid item xs={5}>
                    <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        aria-label="Мужчина"
                        onClick={onClickAddCommentator}
                    >
                        Мужчина
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        aria-label="Женщина"
                        onClick={onClickAddCommentator}
                    >
                        Женщина
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        aria-label="Герой"
                        onClick={onClickAddCommentator}
                    >
                        Герой
                    </Button>
                </Grid>
                <Grid item xs={5}>
                    <Button
                        fullWidth
                        size="small"
                        variant="contained"
                        aria-label="Повторить: -1"
                        onClick={onClickAddCommentator}
                    >
                        Повторить: -1
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export { CommentatorButtonList };
