import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PokemonDetail from "./components/PokemonDetail.tsx";
import App from "./App.tsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    "card-theme": {
      primary: "#ffee52",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route element={<Navigate to="/pokemon" />} path="/" />
          <Route index element={<App />} path="/pokemon" />
          <Route element={<PokemonDetail />} path="/pokemon/:id" />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
