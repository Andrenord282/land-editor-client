// hooks //
import { useSelectorInputState } from "./hooks/useSelectorInputState";

//components//
import { Box, Grid, TextField, Button } from "@mui/material";

type TSelectorInputLabel = "Введите селектор имен комментариев" | "Введите селектор аватарок комментариев";

export type TSelectorInputProps = {
    selectorType: "commentNameSelector" | "commentAvaSelector";
    label: TSelectorInputLabel;
};

const SelectorInput = (props: TSelectorInputProps) => {
    const { label } = props;
    const {
        selectorState,
        textFieldValue,
        errorState,
        helperText,
        onChangeTextField,
        onClickWriteSelector,
        onClickDeleteSelector,
    } = useSelectorInputState(props);

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
                        label={label}
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

export { SelectorInput };
