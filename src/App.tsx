import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "store";
import { PersistGate } from "redux-persist/integration/react";
import { EditorTextTaskPage, EditorGeoTaskPage, EditorCommentsPage, CompilerPage } from "pages";
import { Navigate } from "widgets/Navigate/Navigate";
import { Container } from "@mui/material";
import { Styled } from "styled";

const App = () => {
    return (
        <Styled>
            <Container maxWidth="lg">
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
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
                    </PersistGate>
                </Provider>
            </Container>
        </Styled>
    );
};

export { App };
