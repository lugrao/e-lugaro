/* Styles for when JS disabled */

import { COLORS } from "styles/colors";

const FallbackStyles = () => {
  return (
    <style>
      {`
        html {
            font-family: sans-serif;
            --color-text: ${COLORS.text.light};
            --color-background: ${COLORS.background.light};
            --color-shadows: ${COLORS.shadows.light};
            --color-foreground: ${COLORS.foreground.light};
            --color-shadows: ${COLORS.shadows.light};
            --color-links: ${COLORS.links.light};
        }
      `}
    </style>
  );
};

export { FallbackStyles };
