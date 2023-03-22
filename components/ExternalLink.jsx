/** @jsxImportSource @emotion/react */
import { External } from "components/icons/lib"

export const ExternalLink = ({
  children,
  href,
  withIcon = false,
  iconProps,
  ...props
}) => (
  <a
    href={href}
    target="_blank"
    {...props}
    css={{ textDecoration: "none" }}
    {...props}
  >
    {children} {withIcon && <External {...iconProps} />}
  </a>
)
