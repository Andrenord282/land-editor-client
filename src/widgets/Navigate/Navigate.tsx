import { Link as RouterLink } from "react-router-dom";
import { Grid, Button } from "@mui/material";

const Navigate = () => {
    return (
        <Grid container columnSpacing={2} justifyContent="center">
            <Grid item>
                <Button component={RouterLink} to="/" variant="contained">
                    Ихсодные данные
                </Button>
            </Grid>
            <Grid item>
                <Button component={RouterLink} to="/set-geo" variant="contained">
                    Настройка ГЕО
                </Button>
            </Grid>
            <Grid item>
                <Button component={RouterLink} to="/set-comments" variant="contained">
                    Настройка комментариев
                </Button>
            </Grid>
            <Grid item>
                <Button component={RouterLink} to="/compile" variant="contained">
                    Сборка ленда
                </Button>
            </Grid>
        </Grid>
    );
};

export { Navigate };
