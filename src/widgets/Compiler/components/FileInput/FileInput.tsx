import { useFileInputState } from "./hooks/useFileInputState";
import { Box, Typography, Input, Button, Grid } from "@mui/material";

const FileInput = () => {
    const {
        refToNewLand,
        compilationCompleted,
        fileName,
        fileInputRef,
        activeSendBtn,
        onClickAddFile,
        onChangeFileInput,
        onClickCompilation,
    } = useFileInputState();

    return (
        <Box>
            <Grid container columnSpacing={2}>
                <Grid item sx={{ display: "none" }}>
                    <Input inputRef={fileInputRef} type="file" multiline={false} onChange={onChangeFileInput} />
                </Grid>
                <Grid item>
                    <Button size="small" variant="contained" onClick={onClickAddFile}>
                        Прикрепить архив
                    </Button>
                    {fileName && (
                        <Grid item>
                            <Typography variant="body1">Название архива: {fileName}</Typography>
                        </Grid>
                    )}
                </Grid>
                {activeSendBtn && (
                    <Grid item>
                        <Button size="small" variant="contained" onClick={onClickCompilation}>
                            Запустить компиляцию
                        </Button>
                    </Grid>
                )}
                {compilationCompleted && (
                    <Grid item>
                        <Button size="small" variant="contained" href={refToNewLand} download={true}>
                            Скачать архив
                        </Button>
                    </Grid>
                )}
            </Grid>
        </Box>
    );
};

export { FileInput };
