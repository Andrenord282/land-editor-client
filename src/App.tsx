// react-router-dom //
import { BrowserRouter, Routes, Route } from "react-router-dom";

// redux //
import { Provider } from "react-redux";
import { store } from "store";

// pages //
import { EditorTextTaskPage, EditorGeoTaskPage, EditorCommentsPage, CompilerPage } from "pages";

// widget //
import { Navigate } from "widgets/Navigate/Navigate";

//components //
import { Container } from "@mui/material";

// styled //
import { Styled } from "styled";

const App = () => {
    return (
        <Styled>
            <Container maxWidth="lg">
                <Provider store={store}>
                    <BrowserRouter>
                        <Navigate />
                        <Routes>
                            <Route path="/">
                                <Route index element={<EditorTextTaskPage />} />
                                <Route path="/set-geo" element={<EditorGeoTaskPage />} />
                                <Route path="/set-comments" element={<EditorCommentsPage />} />
                                <Route path="/compile" element={<CompilerPage />} />
                            </Route>
                        </Routes>
                    </BrowserRouter>
                </Provider>
            </Container>
        </Styled>
    );
};

export { App };
