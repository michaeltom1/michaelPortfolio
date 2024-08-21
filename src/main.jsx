import ThemeProviderContext from './context/ThemeProviderContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProviderContext>
        <App />
      </ThemeProviderContext>
    </BrowserRouter>
  </StrictMode>
);
