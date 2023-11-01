import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { primaryTheme } from "./themes/primaryTheme";

interface IStyledPorps {
    children: ReactNode;
}

const Styled = (props: IStyledPorps) => {
    const { children } = props;

    return <ThemeProvider theme={primaryTheme}>{children}</ThemeProvider>;
};

export { Styled };
