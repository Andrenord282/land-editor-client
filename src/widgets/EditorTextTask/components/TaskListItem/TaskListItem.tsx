//hooks//
// import { useEventOutside } from "hooks/useEventOutside";
import { useTaskListItemState } from "./hooks/useTaskListItemState";

//components//
import { Box, Grid, Typography, IconButton, Input } from "@mui/material";
import { Edit, CheckCircle, Cancel, Delete, Title, Public } from "@mui/icons-material";

//types//
import { ITextListElement, TEditorTaskListName } from "store/editorTextTask";

export interface ITaskListItemProps {
    itemIdndex: number;
    element: ITextListElement;
    listName: TEditorTaskListName;
}

const TaskListItem = (props: ITaskListItemProps) => {
    const { listName } = props;
    const {
        editorToggle,
        text,
        textFieldValue,
        onClickEditorToggle,
        onChangeTextField,
        onClickUpdateText,
        onClickMoveListItem,
    } = useTaskListItemState(props);

    return (
        <Box
            sx={{ py: 2, px: 3, border: "solid 1px #000" }}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Grid container flexDirection="column" rowSpacing={2}>
                {
                    {
                        close: (
                            <Grid item xs={12}>
                                <Typography variant="body1">{text}</Typography>
                            </Grid>
                        ),
                        open: (
                            <Grid item xs={12}>
                                <Input multiline onChange={onChangeTextField} value={textFieldValue} fullWidth />
                            </Grid>
                        ),
                    }[editorToggle]
                }
                <Grid item container justifyContent="space-between">
                    {
                        {
                            close: (
                                <Grid item>
                                    <IconButton size="small" onClick={onClickEditorToggle}>
                                        <Edit fontSize="small" />
                                    </IconButton>
                                </Grid>
                            ),
                            open: (
                                <Grid item>
                                    <IconButton aria-label="update-text" size="small" onClick={onClickUpdateText}>
                                        <CheckCircle fontSize="small" />
                                    </IconButton>
                                    <IconButton aria-label="remove-text" size="small" onClick={onClickUpdateText}>
                                        <Cancel fontSize="small" />
                                    </IconButton>
                                </Grid>
                            ),
                        }[editorToggle]
                    }
                    {
                        {
                            replaceText: (
                                <Grid item>
                                    <IconButton aria-label="addGeoText" size="small" onClick={onClickMoveListItem}>
                                        <Public fontSize="small" />
                                    </IconButton>
                                    <IconButton aria-label="inputTextList" size="small" onClick={onClickMoveListItem}>
                                        <Delete fontSize="small" />
                                    </IconButton>
                                </Grid>
                            ),
                            addGeoText: (
                                <Grid item>
                                    <IconButton aria-label="replaceText" size="small" onClick={onClickMoveListItem}>
                                        <Title fontSize="small" />
                                    </IconButton>
                                    <IconButton aria-label="inputTextList" size="small" onClick={onClickMoveListItem}>
                                        <Delete fontSize="small" />
                                    </IconButton>
                                </Grid>
                            ),
                            inputTextList: (
                                <Grid item>
                                    <IconButton aria-label="replaceText" size="small" onClick={onClickMoveListItem}>
                                        <Title fontSize="small" />
                                    </IconButton>
                                    <IconButton aria-label="addGeoText" size="small" onClick={onClickMoveListItem}>
                                        <Public fontSize="small" />
                                    </IconButton>
                                </Grid>
                            ),
                        }[listName]
                    }
                </Grid>
            </Grid>
        </Box>
    );
};

export { TaskListItem };
