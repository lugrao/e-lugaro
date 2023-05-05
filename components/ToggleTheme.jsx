import { useTheme } from "utils/useTheme"
import { MoonIcon } from "components/icons/MoonIcon"
import { SunIcon } from "components/icons/SunIcon"

const ToggleTheme = () => {
  const { colorMode, setColorMode } = useTheme()
  function handleToggle() {
    const newColorMode = colorMode === "dark" ? "light" : "dark"
    setColorMode(newColorMode)
  }
  return (
    <>
      <div onClick={handleToggle} className="toggle">
        {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
      </div>
      <style jsx>{`
        .toggle {
          width: 15px;
          height: 15px;
          position: absolute;
          right: 0;
          padding: 10px 25px;
        }
      `}</style>
    </>
  )
}

export { ToggleTheme }
