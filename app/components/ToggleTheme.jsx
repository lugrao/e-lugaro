"use client"

import styles from "./ToggleTheme.module.css";
import { useTheme } from "utils/useTheme";
import { Moon, Sun } from "./icons/lib";

const ToggleTheme = (props) => {
  const { colorMode, setColorMode } = useTheme();
  const inconSize = {
    width: 23,
    height: 23,
  };

  function handleToggle() {
    const newColorMode = colorMode === "dark" ? "light" : "dark";
    setColorMode(newColorMode);
  }

  if (!colorMode) return;

  return (
    <>
      <div className={styles.toggle} onClick={handleToggle} {...props}>
        {colorMode === "light" ? (
          <Sun {...inconSize} />
        ) : (
          <Moon {...inconSize} />
        )}
      </div>
    </>
  );
};

export { ToggleTheme };
