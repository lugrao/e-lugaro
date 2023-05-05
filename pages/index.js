/** @jsxImportSource @emotion/react */
import Head from "next/head"
import { PersonalInfo } from "components/PersonalInfo"
import { Tools } from "components/Tools"
import { Projects } from "components/Projects"
import { ToggleTheme } from "components/ToggleTheme"
import { mq } from "styles/media-queries"

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Ezequiel Lúgaro's personal site." />
        <title>Ezequiel Lúgaro's personal site</title>
        <link rel="shortcut icon" href="icons/Laptop.svg" />
      </Head>
      <ToggleTheme />
      <div css={{ display: "flex", [mq.small]: { flexDirection: "column" } }}>
        <PersonalInfo
          css={{ width: "50%", [mq.small]: { padding: "80px 0 30px" } }}
        />
        <div
          css={{
            height: "100vh",
            width: "50%",
            overflow: "scroll",
            boxSizing: "border-box",
            padding: "40px 10px",
            [mq.small]: { height: "100%", width: "100%" },
          }}
        >
          <Tools />
          <Projects css={{ paddingTop: "40px" }} />
        </div>
      </div>
    </>
  )
}
