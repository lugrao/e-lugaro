export const ExternalLink = ({ children, href, ...props }) => (
  <a
    href={href}
    target="_blank"
    {...props}
    css={{ textDecoration: "none" }}
    {...props}
  >
    {children}
  </a>
)
