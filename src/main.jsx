import ThemeProviderContext from './context/ThemeProviderContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { cssJs } from "./styles/Styles.js";
import { StrictMode } from 'react'
import App from './App.jsx'

document.getElementById("style").innerHTML = cssJs;

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </BrowserRouter>
  </StrictMode>
);

