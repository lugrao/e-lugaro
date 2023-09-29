import { Email, GitHub, LinkedIn } from "components/icons/lib";
import { ExternalLink } from "components/ExternalLink";

export const personalInfoList = [
  <address>
    <ExternalLink href="mailto:ezequiellugaro@gmail.com">
      <Email height={16} width={22} />
    </ExternalLink>
  </address>,
  <ExternalLink href="https://github.com/lugrao/">
    <GitHub height={20} width={20} />
  </ExternalLink>,
  <ExternalLink href="https://www.linkedin.com/in/elugaro/">
    <LinkedIn height={20} width={20} />
  </ExternalLink>,
];
