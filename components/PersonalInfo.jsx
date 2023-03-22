import Image from "next/image"
import profilePic from "public/e.webp"
import { List } from "components/List"
import { Email, GitHub, LinkedIn } from "components/icons/lib"
import { ExternalLink } from "components/ExternalLink"

const contact = [
  <ExternalLink href="mailto:ezequiellugaro@gmail.com">
    Email <Email />
  </ExternalLink>,
  <ExternalLink href="https://github.com/lugrao/">
    GitHub <GitHub />
  </ExternalLink>,
  <ExternalLink href="https://www.linkedin.com/in/elugaro/">
    LinkedIn <LinkedIn />
  </ExternalLink>,
]

export function PersonalInfo() {
  return (
    <>
      <Image
        src={profilePic}
        alt="Picture of Ezequiel"
        width={150}
        height={150}
        css={{ borderRadius: "50%" }}
      />
      <h1>Ezequiel Lúgaro</h1>
      <p>Web Developer</p>
      <List css={{ listStyle: "none" }} items={contact} />
    </>
  )
}
