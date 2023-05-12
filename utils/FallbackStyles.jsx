/* Styles for when JS disabled */

import { COLORS } from "styles/colors"

const FallbackStyles = () => {
  return (
    <style>
      {`
        html {
            --color-text: ${COLORS.text.light};
            --color-background: ${COLORS.background.light}
        }
        
        a {
            --color-links: ${COLORS.links.light}
        }
        `}
    </style>
  )
}

export { FallbackStyles }
