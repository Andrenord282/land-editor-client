// hooks //
import { useCommentatorListItemState } from "./hooks/useCommentatorListItemState";

// components //
import { Box, Grid, Typography, IconButton, Input } from "@mui/material";
import { Edit, CheckCircle, Cancel, Delete } from "@mui/icons-material";

export type TCommentatorListItemProps = {
    commentatorId: string;
    commentatorIndex: number;
    commentator: string;
};

const CommentatorListItem = (props: TCommentatorListItemProps) => {
    const { commentatorIndex } = props;
    const {
        editorToggle,
        text,
        textFieldValue,
        onClickEditorToggle,
        onChangeTextField,
        onClickUpdateText,
        onCilckDeleteItem,
    } = useCommentatorListItemState(props);

    return (
        <Box sx={{ py: 2, px: 3, border: "solid 1px #000" }}>
            <Grid container flexDirection="column" rowSpacing={2}>
                <Typography variant="body1">Номер комментария {commentatorIndex + 1}</Typography>
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
            </Grid>
            <Grid item container justifyContent="flex-end">
                {
                    {
                        close: (
                            <Grid item>
                                <IconButton size="small" onClick={onClickEditorToggle}>
                                    <Edit fontSize="small" />
                                </IconButton>
                                <IconButton aria-label="inputTextList" size="small" onClick={onCilckDeleteItem}>
                                    <Delete fontSize="small" />
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
            </Grid>
        </Box>
    );
};

export { CommentatorListItem };
