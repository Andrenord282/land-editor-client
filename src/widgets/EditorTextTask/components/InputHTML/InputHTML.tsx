// hooks //
import { useInputHtmlState } from "./hooks/useInputHTMLstate";

// components //
import { Box, Grid, TextField, Button } from "@mui/material";

const textString = "";

const InputHTML = () => {
    const {
        srcHtmlStringState,
        textFieldValue,
        helperText,
        errorState,
        onClickWriteSrcHtmlString,
        onClickDeleteSrcHtmlString,
        onChangeTextField,
    } = useInputHtmlState();

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
                        label="Введите HTML"
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
                            initsrcHtmlString: (
                                <Button size="small" variant="contained" onClick={onClickWriteSrcHtmlString}>
                                    Добавить
                                </Button>
                            ),
                            recordedsrcHtmlString: (
                                <Button size="small" variant="contained" onClick={onClickDeleteSrcHtmlString}>
                                    Удалить
                                </Button>
                            ),
                        }[srcHtmlStringState]
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export { InputHTML };
