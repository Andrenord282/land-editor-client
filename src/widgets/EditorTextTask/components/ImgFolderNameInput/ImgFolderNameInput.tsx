// hooks //
import { useImgFolderNameInputState } from "./hooks/useImgFolderNameInputState";

//components//
import { Box, Grid, TextField, Button } from "@mui/material";

const ImgFolderNameInput = () => {
    const {
        imgFolderNameState,
        textFieldValue,
        helperText,
        errorState,
        handlerChangeTextField,
        onClickWriteImgFolderName,
        onClickDeleteImgFolderName,
    } = useImgFolderNameInputState();

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
                        label="Введите название папки с картинками"
                        error={errorState}
                        helperText={helperText}
                        FormHelperTextProps={{
                            sx: { width: "140%", margin: "0 5px" },
                        }}
                        value={textFieldValue}
                        onChange={handlerChangeTextField}
                    />
                </Grid>
                {
                    {
                        initImgFolderName: (
                            <Grid item xs={4}>
                                <Button fullWidth size="small" variant="contained" onClick={onClickWriteImgFolderName}>
                                    Добавить
                                </Button>
                            </Grid>
                        ),
                        recordedImgFolderName: (
                            <Grid item xs={4}>
                                <Button fullWidth size="small" variant="contained" onClick={onClickDeleteImgFolderName}>
                                    Удалить
                                </Button>
                            </Grid>
                        ),
                    }[imgFolderNameState]
                }
            </Grid>
        </Box>
    );
};

export { ImgFolderNameInput };
