import React from "react";
import ReactDOM from "react-dom/client";
import App from "./layout/App";
import GlobalStyle from "./layout/App.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
