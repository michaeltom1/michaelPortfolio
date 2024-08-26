import { createContext, useContext, useState } from "react";
import { home } from "../styles/Styles";

const ThemeContext = createContext();

function ThemeProviderContext({ children }) {
  return (
    <div className={`${home.theme}`}>
      <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
    </div>
  );
}
export default ThemeProviderContext;

export function useTheme() {
  return useContext(ThemeContext);
}
