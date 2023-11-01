// hooks //
import { useInputJSONstate } from "./hooks/useInputJSONstate";

// components //
import { Box, Grid, TextField, Button } from "@mui/material";

const InputJSON = () => {
    const {
        inputTextListState,
        textFieldValue,
        helperText,
        errorState,
        onClickWriteInputTextList,
        onClickDeleteInputTextList,
        onChangeTextField,
    } = useInputJSONstate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container columnSpacing={2} justifyContent="space-between" alignItems="center">
                <Grid item xs>
                    <TextField
                        name="input-json"
                        type="text"
                        variant="outlined"
                        size="small"
                        sx={{ position: "relative", width: "100%" }}
                        error={errorState}
                        label="Введите JSON"
                        helperText={helperText}
                        FormHelperTextProps={{
                            sx: {
                                position: "absolute",
                                top: "100%",
                                width: "140%",
                                margin: "0 5px",
                            },
                        }}
                        value={textFieldValue}
                        onChange={onChangeTextField}
                    />
                </Grid>
                <Grid item xs={4}>
                    {
                        {
                            initInputTextList: (
                                <Button size="small" variant="contained" onClick={onClickWriteInputTextList}>
                                    Добавить
                                </Button>
                            ),
                            recordedInputTextList: (
                                <Button size="small" variant="contained" onClick={onClickDeleteInputTextList}>
                                    Удалить
                                </Button>
                            ),
                        }[inputTextListState]
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export { InputJSON };
