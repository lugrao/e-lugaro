/** @jsxImportSource @emotion/react */
import { Email, GitHub, LinkedIn } from "components/icons/lib";
import { ExternalLink } from "components/ExternalLink";

export const personalInfoList = [
  <address css={{ fontStyle: "normal" }}>
    <ExternalLink href="mailto:ezequiellugaro@gmail.com">
      <Email css={{ height: 16, width: 22 }} />
    </ExternalLink>
  </address>,
  <ExternalLink href="https://github.com/lugrao/">
    <GitHub css={{ height: 20, width: 20 }} />
  </ExternalLink>,
  <ExternalLink href="https://www.linkedin.com/in/elugaro/">
    <LinkedIn css={{ height: 20, width: 20 }} />
  </ExternalLink>,
];
