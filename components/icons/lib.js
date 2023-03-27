import Image from "next/image"

import ably from "public/icons/Ably.webp"
import auth0 from "public/icons/Auth0.svg"
import chakraui from "public/icons/Chakra-UI.webp"
import checkmark from "public/icons/Checkmark.svg"
import css from "public/icons/CSS.svg"
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
import vercel from "public/icons/Vercel.png"

const Img = (props) => <Image width={15} height={15} {...props} />

const Ably = (props) => <Img {...props} src={ably} alt="Ably icon" />
const Auth0 = (props) => <Img {...props} src={auth0} alt="Auth0 icon" />
const ChakraUI = (props) => (
  <Img {...props} src={chakraui} alt="ChakraUI icon" />
)
const Checkmark = (props) => (
  <Img {...props} src={checkmark} alt="Checkmark icon" />
)
const CSS = (props) => <Img {...props} src={css} alt="CSS icon" />
const Email = (props) => <Img {...props} src={email} alt="Email icon" />
const External = (props) => (
  <Img {...props} src={external} alt="External Link icon" />
)
const Flask = (props) => <Img {...props} src={flask} alt="Flask icon" />
const GitHub = (props) => <Img {...props} src={github} alt="GitHub icon" />
const HTML = (props) => <Img {...props} src={html} alt="HTML icon" />
const JavaScript = (props) => (
  <Img {...props} src={javascript} alt="JavaScript icon" />
)
const LinkedIn = (props) => (
  <Img {...props} src={linkedin} alt="LinkedIn icon" />
)
const MongoDB = (props) => <Img {...props} src={mongodb} alt="MongoDB icon" />
const Nextjs = (props) => <Img {...props} src={nextjs} alt="Next.js icon" />
const Python = (props) => <Img {...props} src={python} alt="Python icon" />
const React = (props) => <Img {...props} src={react} alt="React icon" />
const SQL = (props) => (
  <Img {...props} width={12} height={15} src={sql} alt="SQL icon" />
)
const Vercel = (props) => <Img {...props} src={vercel} alt="Vercel icon" />

export {
  Ably,
  Auth0,
  ChakraUI,
  Checkmark,
  CSS,
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
  Vercel,
}
