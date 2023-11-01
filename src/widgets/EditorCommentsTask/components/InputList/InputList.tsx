//components//
import { Grid } from "@mui/material";
import { SelectorInput } from "../SelectorInput";
import { CommentListInput } from "../CommentListInput";
import { CommentatorButtonList } from "../CommentatorButtonList";

const InputList = () => {
    return (
        <Grid container flexDirection="column" rowSpacing={2} sx={{ height: "100%" }}>
            <Grid item>
                <SelectorInput label="Введите селектор имен комментариев" selectorType="commentNameSelector" />
            </Grid>
            <Grid item>
                <SelectorInput label="Введите селектор аватарок комментариев" selectorType="commentAvaSelector" />
            </Grid>
            <Grid item>
                <CommentListInput />
            </Grid>
            <Grid item sx={{ position: "sticky", top: "40px" }}>
                <CommentatorButtonList />
            </Grid>
        </Grid>
    );
};

export { InputList };
