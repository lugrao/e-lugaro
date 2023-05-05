import { COLORS } from "styles/colors"

const COLOR_MODE_KEY = "color-mode"
const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"

function setColorsByTheme() {
  const colors = "COLORS_placeholder"
  const colorModeKey = "COLOR_MODE_KEY_placeholder"
  const colorModeCssProp = "INITIAL_COLOR_MODE_CSS_PROP_placeholder"

  // check for a system's preferred theme
  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const prefersDarkFromMQ = mql.matches

  // check localStorage for a theme chosen with the site's toggler
  const persistedPreference = localStorage.getItem(colorModeKey)

  let colorMode = "light"

  const hasUsedToggle = typeof persistedPreference === "string"

  if (hasUsedToggle) {
    colorMode = persistedPreference
  } else {
    colorMode = prefersDarkFromMQ ? "dark" : "light"
  }

  let root = document.documentElement

  root.style.setProperty(colorModeCssProp, colorMode)

  // Add CSS variables and its values to the root
  // These variables are used by styles/global.css and the
  // components to color the site
  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`

    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

// This script tag is inserted at build time
const ThemeScriptTag = () => {
  // Convert setColorsByTheme() to string
  const boundFn = String(setColorsByTheme)
    // Replace placeholders with actual data
    .replace(`"COLORS_placeholder"`, JSON.stringify(COLORS))
    .replace("COLOR_MODE_KEY_placeholder", COLOR_MODE_KEY)
    .replace(
      "INITIAL_COLOR_MODE_CSS_PROP_placeholder",
      INITIAL_COLOR_MODE_CSS_PROP
    )

  // Add a function call at the end of the setColorsByTheme() string
  let calledFunction = `(${boundFn})()`

  // Insert the called setColorsByTheme() in the script tag
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />
}

export { ThemeScriptTag }
