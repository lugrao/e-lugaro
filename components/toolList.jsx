/** @jsxImportSource @emotion/react */
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
  SQL,
} from "components/icons/lib";

export const toolList = (
  <ul css={{ listStyle: "none" }}>
    <li>
      <JavaScript /> JavaScript
      <ul css={{ listStyle: "none" }}>
        <li>
          <React /> React
        </li>
        <li>
          <ReactTestingLibrary /> React Testing Library
        </li>
        <li>
          <Nextjs /> Next.js
        </li>
      </ul>
    </li>
    <li>
      <Python /> Python
      <ul css={{ listStyle: "none" }}>
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
