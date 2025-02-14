"use client";

import styles from "./HomePage.module.css";
import { PersonalInfo } from "app/components/PersonalInfo";
import { Tools } from "app/components/Tools";
import { Projects } from "app/components/Projects";
import { ToggleTheme } from "app/components/ToggleTheme";
import { useWindowDimensions } from "utils/useWindowDimensions";

export default function HomePage() {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className={styles.page_container}>
        <ToggleTheme />
        <PersonalInfo />
        <div className={styles.tools_and_projects_container}>
          <Tools />
          <Projects />
        </div>
      </div>
    </>
  );
}
