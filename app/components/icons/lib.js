import Image from "next/image";

import { base64Icon } from "public/icons/base64icon";
import ably from "public/icons/Ably.webp";
import auth0 from "public/icons/Auth0.svg";
import chakraui from "public/icons/Chakra-UI.webp";
import checkmark from "public/icons/Checkmark.svg";
import css from "public/icons/CSS.svg";
import django from "public/icons/Django.svg";
import email from "public/icons/Email.svg";
import external from "public/icons/External.svg";
import flask from "public/icons/Flask.svg";
import git from "public/icons/Git.svg";
import github from "public/icons/GitHub.svg";
import html from "public/icons/HTML.svg";
import javascript from "public/icons/JavaScript.svg";
import linkedin from "public/icons/LinkedIn.svg";
import mongodb from "public/icons/MongoDB.svg";
import moon from "public/icons/Moon.svg";
import nextjs from "public/icons/Next.js.svg";
import python from "public/icons/Python.svg";
import react from "public/icons/React.svg";
import reacttestinglibrary from "public/icons/React Testing Library.svg";
import redux from "public/icons/Redux.svg";
import sql from "public/icons/SQL.svg";
import sun from "public/icons/Sun.svg";
import tailwindcss from "public/icons/Tailwind CSS.svg";
import typescript from "public/icons/TypeScript.svg";

import { useTheme } from "utils/useTheme";

const Icon = ({ src, alt, width = 15, height = 15, ...props }) => {
  const { colorMode } = useTheme();
  return (
    <Image
      blurDataURL={base64Icon}
      width={width}
      height={height}
      src={src}
      alt={alt}
      style={{ filter: colorMode === "dark" && "invert(100%)" }}
      {...props}
    />
  );
};

const Ably = (props) => <Icon src={ably} alt="Ably icon" {...props} />;
const Auth0 = (props) => <Icon src={auth0} alt="Auth0 icon" {...props} />;
const ChakraUI = (props) => (
  <Icon
    src={chakraui}
    alt="ChakraUI icon"
    style={{ borderRadius: "50%" }}
    {...props}
  />
);
const Checkmark = (props) => (
  <Icon src={checkmark} alt="Checkmark icon" {...props} />
);
const CSS = (props) => <Icon src={css} alt="CSS icon" {...props} />;
const Django = (props) => <Icon src={django} alt="Django icon" {...props} />;
const Email = (props) => <Icon src={email} alt="Email icon" {...props} />;
const External = (props) => (
  <Icon src={external} alt="External Link icon" {...props} />
);
const Flask = (props) => <Icon src={flask} alt="Flask icon" {...props} />;
const Git = (props) => <Icon src={git} alt="Git icon" {...props} />;
const GitHub = (props) => <Icon src={github} alt="GitHub icon" {...props} />;
const HTML = (props) => <Icon src={html} alt="HTML icon" {...props} />;
const JavaScript = (props) => (
  <Icon src={javascript} alt="JavaScript icon" {...props} />
);
const LinkedIn = (props) => (
  <Icon src={linkedin} alt="LinkedIn icon" {...props} />
);
const MongoDB = (props) => <Icon src={mongodb} alt="MongoDB icon" {...props} />;
const Moon = (props) => <Icon src={moon} alt="Moon icon" {...props} />;
const Nextjs = (props) => <Icon src={nextjs} alt="Next.js icon" {...props} />;
const Python = (props) => <Icon src={python} alt="Python icon" {...props} />;
const React = (props) => <Icon src={react} alt="React icon" {...props} />;
const ReactTestingLibrary = (props) => (
  <Icon src={reacttestinglibrary} alt="React Testing Library icon" {...props} />
);
const Redux = (props) => <Icon src={redux} alt="Redux icon" {...props} />;
const SQL = (props) => <Icon src={sql} alt="SQL icon" {...props} />;
const Sun = (props) => <Icon src={sun} alt="Sun icon" {...props} />;
const TailwindCSS = (props) => (
  <Icon src={sun} alt="Tailwind CSS icon" {...props} />
);
const TypeScript = (props) => (
  <Icon src={typescript} alt="TypeScript icon" {...props} />
);

export {
  Ably,
  Auth0,
  ChakraUI,
  Checkmark,
  CSS,
  Django,
  Email,
  External,
  Flask,
  Git,
  GitHub,
  HTML,
  JavaScript,
  LinkedIn,
  MongoDB,
  Moon,
  Nextjs,
  Python,
  React,
  ReactTestingLibrary,
  Redux,
  SQL,
  Sun,
  TailwindCSS,
  TypeScript,
};
