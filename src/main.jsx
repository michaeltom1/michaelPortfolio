import ThemeProviderContext from "./context/ThemeProviderContext.jsx";
import DataProviderContext from "./context/DataProviderContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { cssJs } from "./styles/Styles.js";
import { StrictMode } from "react";
import App from "./App.jsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./index.css"

document.getElementById("style").innerHTML = cssJs;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProviderContext>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <DataProviderContext>
          <App />
        </DataProviderContext>
      </BrowserRouter>
    </ThemeProviderContext>
  </StrictMode>
);
