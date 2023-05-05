/** @jsxImportSource @emotion/react */

import Image from "next/image"

import { base64Icon } from "public/icons/base64icon"
import ably from "public/icons/Ably.webp"
import auth0 from "public/icons/Auth0.svg"
import chakraui from "public/icons/Chakra-UI.webp"
import checkmark from "public/icons/Checkmark.svg"
import css from "public/icons/CSS.svg"
import django from "public/icons/Django.png"
import email from "public/icons/Email.svg"
import external from "public/icons/External.svg"
import flask from "public/icons/Flask.svg"
import github from "public/icons/GitHub.svg"
import html from "public/icons/HTML.svg"
import javascript from "public/icons/JavaScript.svg"
import linkedin from "public/icons/LinkedIn.svg"
import mongodb from "public/icons/MongoDB.svg"
import nextjs from "public/icons/Next.js.svg"
import python from "public/icons/Python.svg"
import react from "public/icons/React.svg"
import sql from "public/icons/SQL.png"
import tanstack from "public/icons/TanStack.png"
import vercel from "public/icons/Vercel.png"

const imageProps = {
  blurDataURL: base64Icon,
  width: 15,
  height: 15,
}

const Ably = (props) => (
  <Image {...imageProps} src={ably} alt="Ably icon" {...props} />
)
const Auth0 = (props) => (
  <Image {...imageProps} src={auth0} alt="Auth0 icon" {...props} />
)
const ChakraUI = (props) => (
  <Image
    {...imageProps}
    src={chakraui}
    alt="ChakraUI icon"
    css={{ borderRadius: "50%" }}
    {...props}
  />
)
const Checkmark = (props) => (
  <Image {...imageProps} src={checkmark} alt="Checkmark icon" {...props} />
)
const CSS = (props) => (
  <Image {...imageProps} src={css} alt="CSS icon" {...props} />
)
const Django = (props) => (
  <Image {...imageProps} src={django} alt="Django icon" {...props} />
)
const Email = (props) => (
  <Image
    {...imageProps}
    src={email}
    alt="Email icon"
    {...props}
  />
)
const External = (props) => (
  <Image {...imageProps} src={external} alt="External Link icon" {...props} />
)
const Flask = (props) => (
  <Image
    {...imageProps}
    src={flask}
    alt="Flask icon"
    css={{ backgroundColor: "white", borderRadius: "30%" }}
    {...props}
  />
)
const GitHub = (props) => (
  <Image
    {...imageProps}
    src={github}
    alt="GitHub icon"
    {...props}
  />
)
const HTML = (props) => (
  <Image {...imageProps} src={html} alt="HTML icon" {...props} />
)
const JavaScript = (props) => (
  <Image {...imageProps} src={javascript} alt="JavaScript icon" {...props} />
)
const LinkedIn = (props) => (
  <Image
    {...imageProps}
    src={linkedin}
    alt="LinkedIn icon"
    {...props}
  />
)
const MongoDB = (props) => (
  <Image {...imageProps} src={mongodb} alt="MongoDB icon" {...props} />
)
const Nextjs = (props) => (
  <Image
    {...imageProps}
    src={nextjs}
    alt="Next.js icon"
    css={{ backgroundColor: "white", borderRadius: "50%" }}
    {...props}
  />
)
const Python = (props) => (
  <Image {...imageProps} src={python} alt="Python icon" {...props} />
)
const React = (props) => (
  <Image {...imageProps} src={react} alt="React icon" {...props} />
)
const SQL = (props) => (
  <Image
    {...imageProps}
    width={12}
    height={15}
    src={sql}
    alt="SQL icon"
    {...props}
  />
)
const TanStack = (props) => (
  <Image {...imageProps} src={tanstack} alt="TanStack icon" {...props} />
)
const Vercel = (props) => (
  <Image
    {...imageProps}
    src={vercel}
    alt="Vercel icon"
    css={{ borderRadius: "50%" }}
    {...props}
  />
)

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
  GitHub,
  HTML,
  JavaScript,
  LinkedIn,
  MongoDB,
  Nextjs,
  Python,
  React,
  SQL,
  TanStack,
  Vercel,
}
