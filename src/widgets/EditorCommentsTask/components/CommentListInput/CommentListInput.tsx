import { useCommentListInputState } from "./hooks/useCommentListInputState";
import { Box, Grid, TextField, Button } from "@mui/material";

const CommentListInput = () => {
    const {
        selectorState,
        textFieldValue,
        helperText,
        errorState,
        onChangeTextField,
        onClickWriteSelector,
        onClickDeleteSelector,
    } = useCommentListInputState();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container columnSpacing={2} justifyContent="space-between">
                <Grid item xs>
                    <TextField
                        name="input-json"
                        type="text"
                        variant="outlined"
                        size="small"
                        fullWidth
                        error={errorState}
                        label="Введите селектор комментариев"
                        helperText={helperText}
                        FormHelperTextProps={{
                            sx: { width: "140%", margin: "0 5px" },
                        }}
                        value={textFieldValue}
                        onChange={onChangeTextField}
                    />
                </Grid>
                {
                    {
                        initSelector: (
                            <Grid item xs={4}>
                                <Button fullWidth size="small" variant="contained" onClick={onClickWriteSelector}>
                                    Добавить
                                </Button>
                            </Grid>
                        ),
                        recordedSelcetor: (
                            <Grid item xs={4}>
                                <Button fullWidth size="small" variant="contained" onClick={onClickDeleteSelector}>
                                    Удалить
                                </Button>
                            </Grid>
                        ),
                    }[selectorState]
                }
            </Grid>
        </Box>
    );
};

export { CommentListInput };
