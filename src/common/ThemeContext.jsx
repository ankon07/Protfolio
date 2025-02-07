import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.body.setAttribute('data-theme', theme); // Corrected from 'date-theme'
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        // Corrected from 'toogleTheme'
        // console.log("Theme Toggled")
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children} {/* Corrected from 'childern' */}
        </ThemeContext.Provider>
    );
};
