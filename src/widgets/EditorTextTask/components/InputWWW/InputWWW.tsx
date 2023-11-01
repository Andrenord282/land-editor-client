// hooks //
import { useInputWWWState } from "./hooks/useInputWWWState";

// components //
import { Box, Grid, TextField, Button } from "@mui/material";

const InputWWW = () => {
    const {
        landAddressState,
        textFieldValue,
        helperText,
        errorState,
        onClickWriteLandAddress,
        onClickDeleteLandAddress,
        onChangeTextField,
    } = useInputWWWState();

    return (
        <Box>
            <Grid container columnSpacing={2} justifyContent="space-between" alignItems="center">
                <Grid item xs={8} sx={{ position: "relative" }}>
                    <TextField
                        name="input-json"
                        type="text"
                        variant="outlined"
                        size="small"
                        fullWidth
                        sx={{ position: "relative" }}
                        error={errorState}
                        label="Введите адрес"
                        helperText={helperText}
                        FormHelperTextProps={{
                            sx: {
                                fontSize: "0.75rem",
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
                            initAddress: (
                                <Button size="small" variant="contained" onClick={onClickWriteLandAddress}>
                                    Добавить
                                </Button>
                            ),
                            recordedAddress: (
                                <Button size="small" variant="contained" onClick={onClickDeleteLandAddress}>
                                    Удалить
                                </Button>
                            ),
                        }[landAddressState]
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export { InputWWW };
