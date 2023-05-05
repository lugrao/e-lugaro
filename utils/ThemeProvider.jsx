import { createContext, useEffect, useState } from "react"
import { COLORS } from "styles/colors"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [colorMode, setColorMode] = useState(null)

  useEffect(() => {
    // Get (potential) system's color preference
    const mql = window.matchMedia("(prefers-color-scheme: dark)")

    // Handler that sets system's preferred color mode and remove user's
    // preference from localStorage
    const handleChange = () => {
      const newColorMode = mql.matches ? "dark" : "light"
      setColorMode(newColorMode)
      updateColors(newColorMode)
      window.localStorage.removeItem("color-mode")
    }

    // Add event listener for changing the color mode when the system's
    // preference changes
    mql.addEventListener("change", handleChange)

    // Remove event listener when component unmounts
    return () => mql.removeEventListener("change", handleChange)
  }, [])

  function updateColors(newColorMode) {
    const root = document.documentElement
    const colors = COLORS

    // update colors in root
    Object.entries(colors).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`
      root.style.setProperty(cssVarName, colorByTheme[newColorMode])
    })
  }

  function setAndPersistColorMode(newColorMode) {
    setColorMode(newColorMode)

    // update root's colors
    updateColors(newColorMode)

    // update localStorage's color-mode
    window.localStorage.setItem("color-mode", newColorMode)
  }

  return (
    <ThemeContext.Provider
      value={{ colorMode, setColorMode: setAndPersistColorMode }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }
