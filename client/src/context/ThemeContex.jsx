import React, { createContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  
  const initialTheme = localStorage.getItem("theme") === "true" ? true : false;
  const checkState = localStorage.getItem("checkboxState") === "false" ? false : true;
  const [theme, setTheme] = useState(initialTheme);
    const [checkboxState, setCheckboxState] = useState(checkState);
    useEffect(() => {
      localStorage.setItem("theme", theme);
      localStorage.setItem("checkboxState", checkboxState);

  }, [theme]);

  const handleChange = () => {
    setCheckboxState(!checkboxState);
    setTheme((theme) => !theme);
};

 

  return (
    <ThemeContext.Provider value={{handleChange, theme, checkboxState}}>{children}</ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
