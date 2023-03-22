/** @jsxImportSource @emotion/react */
import Image from "next/image"
import profilePic from "public/e.webp"
import { List } from "components/List"
import { Email, GitHub, LinkedIn } from "components/icons/lib"
import { ExternalLink } from "components/ExternalLink"

const contact = [
  <ExternalLink href="mailto:ezequiellugaro@gmail.com">
    Email <Email css={{ height: 13, width: 18 }} />
  </ExternalLink>,
  <ExternalLink href="https://github.com/lugrao/">
    GitHub <GitHub />
  </ExternalLink>,
  <ExternalLink href="https://www.linkedin.com/in/elugaro/">
    LinkedIn <LinkedIn />
  </ExternalLink>,
]

export function PersonalInfo(props) {
  return (
    <div css={{ textAlign: "center", alignSelf: "center" }} {...props}>
      <Image
        src={profilePic}
        alt="Picture of Ezequiel"
        width={150}
        height={150}
        css={{ borderRadius: "50%" }}
      />
      <h1>Ezequiel Lúgaro</h1>
      <p css={{ fontWeight: "bold", fontSize: 20 }}>Web Developer</p>
      <List css={{ listStyle: "none" }} items={contact} />
    </div>
  )
}
