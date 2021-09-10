import { useState, createContext } from 'react';

export const ThemeContext = createContext();

const initialTheme = 'light';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(initialTheme);

  const handleTheme = e => {
    setTheme(e.target.value);
  };

  const data = { theme, handleTheme };

  return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
