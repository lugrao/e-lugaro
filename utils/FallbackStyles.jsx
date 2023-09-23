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
        }
        
        a {
            --color-links: ${COLORS.links.light};
        }

        .project-box {
            box-shadow: 0px 0px 5px 1px ${COLORS.shadows.light},
              0px 0px 5px 1px ${COLORS.shadows.light};
        }

        .project-image {
            border-bottom: 1px solid ${COLORS.shadows.light};
        }
      `}
    </style>
  );
};

export { FallbackStyles };
