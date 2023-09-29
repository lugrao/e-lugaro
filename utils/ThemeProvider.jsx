"use client";
import { createContext, useEffect, useState } from "react";
import { COLORS } from "styles/colors";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(null);

  useEffect(() => {
    // Set initial color mode
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    setColorMode(initialColorValue);

    // Change site's color mode when the system's preferred color mode
    // changes:

    // Get system's color preference
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    // Handler that  changes the color mode and removes user's
    // preference from localStorage
    const handleChange = () => {
      const newColorMode = mql.matches ? "dark" : "light";
      setColorMode(newColorMode);
      updateColors(newColorMode);
      window.localStorage.removeItem("color-mode");
    };

    // Event listener that waits for system's color mode changes and
    // executes the handler when that happens
    mql.addEventListener("change", handleChange);

    // Remove event listener when component unmounts
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  function updateColors(newColorMode) {
    const root = document.documentElement;
    const colors = COLORS;

    // Update colors in root
    Object.entries(colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;
      root.style.setProperty(cssVarName, colorByTheme[newColorMode]);
    });
  }

  function setAndPersistColorMode(newColorMode) {
    setColorMode(newColorMode);

    // Update root's colors
    updateColors(newColorMode);

    // Update localStorage's color-mode
    window.localStorage.setItem("color-mode", newColorMode);
  }

  return (
    <ThemeContext.Provider
      value={{ colorMode, setColorMode: setAndPersistColorMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
