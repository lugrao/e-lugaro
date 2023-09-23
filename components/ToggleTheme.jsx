/** @jsxImportSource @emotion/react */
import { useTheme } from "utils/useTheme";
import { Moon, Sun } from "./icons/lib";

const ToggleTheme = (props) => {
  const { colorMode, setColorMode } = useTheme();

  function handleToggle() {
    const newColorMode = colorMode === "dark" ? "light" : "dark";
    setColorMode(newColorMode);
  }
  const iconStyles = {
    width: 23,
    height: 23,
  }
  if (!colorMode) return;

  return (
    <>
      <div
        className="toggle"
        onClick={handleToggle}
        css={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 50,
          height: 50,
          borderRadius: 50,
          marginLeft: "auto",
          ":hover": {
            backgroundcolor: "red",
          },
        }}
        {...props}
      >
        {colorMode === "light" ? <Sun css={iconStyles} /> : <Moon css={iconStyles}/>}
      </div>
    </>
  );
};

export { ToggleTheme };
