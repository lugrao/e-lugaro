import Image from "next/image"

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
import vercel from "public/icons/Vercel.png"

const Img = ({ src }) => <Image width={15} height={15} src={src} />

const Auth0 = () => <Img src={auth0} />
const ChakraUI = () => <Img src={chakraui} />
const Checkmark = () => <Img src={checkmark} />
const CSS = () => <Img src={css} />
const Email = () => <Img src={email} />
const Flask = () => <Img src={flask} />
const GitHub = () => <Img src={github} />
const HTML = () => <Img src={html} />
const JavaScript = () => <Img src={javascript} />
const LinkedIn = () => <Img src={linkedin} />
const MongoDB = () => <Img src={mongodb} />
const Nextjs = () => <Img src={nextjs} />
const Python = () => <Img src={python} />
const React = () => <Img src={react} />
const Vercel = () => <Img src={vercel} />

export {
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
  Vercel,
}
