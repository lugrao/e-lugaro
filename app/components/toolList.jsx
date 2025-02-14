import styles from "./toolList.module.css";
import {
  CSS,
  Django,
  Flask,
  Git,
  HTML,
  JavaScript,
  MongoDB,
  Nextjs,
  Python,
  React,
  ReactTestingLibrary,
  Redux,
  SQL,
  TailwindCSS,
  TypeScript,
} from "app/components/icons/lib";

export const toolList = (
  <ul className={styles.tool_list}>
    <li>
      <JavaScript /> JavaScript / <TypeScript /> TypeScript
      <ul className={styles.tool_list}>
        <li>
          <React /> React
        </li>
        <li>
          <ReactTestingLibrary /> React Testing Library
        </li>
        <li>
          <Nextjs /> Next.js
        </li>
        <li>
          <Redux /> Redux
        </li>
      </ul>
    </li>
    <li>
      <Python /> Python
      <ul className={styles.tool_list}>
        <li>
          <Flask /> Flask
        </li>
        <li>
          <Django /> Django
        </li>
      </ul>
    </li>
    <li>
      <HTML /> HTML
    </li>
    <li>
      <CSS /> CSS
      <ul className={styles.tool_list}>
        <li>
          <TailwindCSS /> Tailwind CSS
        </li>
      </ul>
    </li>
    <li>
      <MongoDB /> MongoDB
    </li>
    <li>
      <SQL /> SQL
    </li>
    <li>
      <Git /> Git
    </li>
  </ul>
);
