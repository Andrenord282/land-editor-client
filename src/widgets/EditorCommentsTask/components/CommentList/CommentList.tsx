//redux//
import { useSelector } from "react-redux";

// hooks //
import { useCommentListState } from "./hooks/useCommentListState";

//components//
import { Box, Grid, Typography } from "@mui/material";

const CommentList = () => {
    const { commentList } = useCommentListState();

    return (
        <Grid container flexDirection="column" rowSpacing={3}>
            {commentList &&
                commentList.length > 0 &&
                Array.from(commentList).map((comment, index: number) => {
                    return (
                        <Grid item key={index}>
                            <Typography variant="body1">Номер комментария: {index + 1}</Typography>
                            <Box
                                sx={{ border: "1px solid #000", padding: "5px" }}
                                dangerouslySetInnerHTML={{ __html: comment }}
                            ></Box>
                        </Grid>
                    );
                })}
        </Grid>
    );
};

export { CommentList };
