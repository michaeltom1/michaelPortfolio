import ThemeProviderContext from './context/ThemeProviderContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { cssJs } from "./styles/Styles.js";
import { StrictMode } from 'react'
import App from './App.jsx'

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

document.getElementById("style").innerHTML = cssJs;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-center" />
    <BrowserRouter>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </BrowserRouter>
  </StrictMode>
);

