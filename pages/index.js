/** @jsxImportSource @emotion/react */
import Head from "next/head";
import { PersonalInfo } from "components/PersonalInfo";
import { Tools } from "components/Tools";
import { Projects } from "components/Projects";
import { ToggleTheme } from "components/ToggleTheme";
import { mq } from "styles/media-queries";
import { FallbackStyles } from "utils/FallbackStyles";
import { useWindowDimensions } from "utils/useWindowDimensions";

export default function Home() {
  const { width } = useWindowDimensions();
  return (
    <>
      <Head>
        <meta name="description" content="Ezequiel Lúgaro's personal site." />
        <title>Ezequiel Lúgaro's personal site</title>
        <link rel="shortcut icon" href="icons/Laptop.svg" />
        <FallbackStyles />
      </Head>
      <div css={{ display: "flex", [mq.small]: { flexDirection: "column" } }}>
        {width < 992 && <ToggleTheme css={{marginTop: 10, marginRight: 10}} />}
        <PersonalInfo
          css={{ width: "50%", [mq.small]: { padding: "80px 0 30px" } }}
        />
        <div
          css={{
            height: "100vh",
            width: "50%",
            overflow: "scroll",
            boxSizing: "border-box",
            padding: "10px 10px 40px",
            overflow: "auto",
            [mq.small]: { height: "100%", width: "100%" },
          }}
        >
          {width > 991 && <ToggleTheme />}
          <Tools css={{paddingTop: 30,}} />
          <Projects css={{ paddingTop: "40px" }} />
        </div>
      </div>
    </>
  );
}
