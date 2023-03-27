/** @jsxImportSource @emotion/react */
import { Email, GitHub, LinkedIn } from "components/icons/lib"
import { ExternalLink } from "components/ExternalLink"

export const personalInfoList = [
  <address css={{ fontStyle: "normal" }}>
    <ExternalLink href="mailto:ezequiellugaro@gmail.com">
      Email <Email css={{ height: 13, width: 18 }} />
    </ExternalLink>
  </address>,
  <ExternalLink href="https://github.com/lugrao/">
    GitHub <GitHub />
  </ExternalLink>,
  <ExternalLink href="https://www.linkedin.com/in/elugaro/">
    LinkedIn <LinkedIn />
  </ExternalLink>,
]
