import { Email, GitHub, LinkedIn } from "app/components/icons/lib";
import { ExternalLink } from "app/components/ExternalLink";

export const personalInfoList = [
  <address>
    <ExternalLink href="mailto:ezequiellugaro@gmail.com">
      <Email height={27} width={27} />
    </ExternalLink>
  </address>,
  <ExternalLink href="https://github.com/lugrao/">
    <GitHub height={20} width={20} />
  </ExternalLink>,
  <ExternalLink href="https://www.linkedin.com/in/elugaro/">
    <LinkedIn height={20} width={20} />
  </ExternalLink>,
];
