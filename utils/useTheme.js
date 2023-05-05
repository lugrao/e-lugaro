import { useContext } from "react"
import { ThemeContext } from "utils/ThemeProvider"

function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error("ThemeContext must be used within a ThemeProvider")
  }

  return context
}

export { useTheme }
