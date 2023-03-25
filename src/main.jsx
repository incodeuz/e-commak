import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContextApi from "./context/contextApi";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextApi>
      <App />
    </ContextApi>
  </BrowserRouter>
);
