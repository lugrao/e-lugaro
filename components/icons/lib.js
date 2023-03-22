import Image from "next/image"

import ably from "public/icons/Ably.webp"
import auth0 from "public/icons/Auth0.svg"
import chakraui from "public/icons/Chakra-UI.webp"
import checkmark from "public/icons/Checkmark.svg"
import css from "public/icons/CSS.svg"
import email from "public/icons/Email.svg"
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

const Ably = (props) => <Img {...props} src={ably} />
const Auth0 = (props) => <Img {...props} src={auth0} />
const ChakraUI = (props) => <Img {...props} src={chakraui} />
const Checkmark = (props) => <Img {...props} src={checkmark} />
const CSS = (props) => <Img {...props} src={css} />
const Email = (props) => <Img {...props} src={email} />
const Flask = (props) => <Img {...props} src={flask} />
const GitHub = (props) => <Img {...props} src={github} />
const HTML = (props) => <Img {...props} src={html} />
const JavaScript = (props) => <Img {...props} src={javascript} />
const LinkedIn = (props) => <Img {...props} src={linkedin} />
const MongoDB = (props) => <Img {...props} src={mongodb} />
const Nextjs = (props) => <Img {...props} src={nextjs} />
const Python = (props) => <Img {...props} src={python} />
const React = (props) => <Img {...props} src={react} />
const SQL = (props) => <Img {...props} src={sql} />
const Vercel = (props) => <Img {...props} src={vercel} />

export {
  Ably,
  Auth0,
  ChakraUI,
  Checkmark,
  CSS,
  Email,
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
