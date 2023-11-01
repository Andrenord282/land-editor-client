// hooks //
import { useFileInputState } from "./hooks/useFileInputState";

// components //
import { Box, Typography, Input, Button, Grid } from "@mui/material";

const FileInput = () => {
    const { fileName, fileInputRef, onClickAddFile, onChangeFileInput, onClickCompilation } = useFileInputState();

    return (
        <Box sx={{ border: "#000" }}>
            <Grid container flexDirection="column" rowSpacing={2}>
                <Grid item>
                    <Input inputRef={fileInputRef} type="file" sx={{ display: "none" }} onChange={onChangeFileInput} />
                </Grid>
                <Grid item>
                    <Button size="small" variant="contained" onClick={onClickAddFile}>
                        Прикрепить архив
                    </Button>
                </Grid>
                {fileName && (
                    <Grid item>
                        <Typography variant="body1">Название архива: {fileName}</Typography>
                    </Grid>
                )}
                <Grid item>
                    <Button size="small" variant="contained" onClick={onClickCompilation}>
                        Запустить компиляцию
                    </Button>
                </Grid>
                <Grid item>
                    <Button size="small" variant="contained" onClick={onClickAddFile}>
                        Скачать сборку
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export { FileInput };
