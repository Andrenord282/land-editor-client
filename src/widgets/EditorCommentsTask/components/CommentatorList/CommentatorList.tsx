// hooks //
import { useCommentatorListState } from "./hooks/useCommentatorListState";

// components //
import { Box, Grid } from "@mui/material";
import { CommentatorListItem } from "../CommentatorListItem";

const CommentatorList = () => {
    const { commentatorList } = useCommentatorListState();

    return (
        <Box>
            <Grid container flexDirection="column" rowSpacing={2}>
                {commentatorList &&
                    commentatorList.length > 0 &&
                    commentatorList.map((commentator, index) => {
                        const { id, value } = commentator;

                        return (
                            <Grid item key={id}>
                                <CommentatorListItem commentatorIndex={index} commentatorId={id} commentator={value} />
                            </Grid>
                        );
                    })}
            </Grid>
        </Box>
    );
};

export { CommentatorList };
