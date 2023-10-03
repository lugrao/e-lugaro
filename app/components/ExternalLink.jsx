import styles from "./ExternalLink.module.css";
import { External } from "app/components/icons/lib";

export const ExternalLink = ({
  children,
  href,
  withIcon = false,
  iconProps,
  ...props
}) => (
  <a className={styles.link} href={href} target="_blank" {...props}>
    {children} {withIcon && <External {...iconProps} />}
  </a>
);
