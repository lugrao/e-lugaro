import styles from "./index.module.css";
import Head from "next/head";
import { PersonalInfo } from "components/PersonalInfo";
import { Tools } from "components/Tools";
import { Projects } from "components/Projects";
import { ToggleTheme } from "components/ToggleTheme";
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
      <div className={styles.page_container}>
        {width < 992 && <ToggleTheme />}
        <PersonalInfo />
        <div className={styles.tools_and_projects_container}>
          {width > 991 && <ToggleTheme />}
          <Tools />
          <Projects />
        </div>
      </div>
    </>
  );
}
