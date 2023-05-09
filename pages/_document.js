import { Html, Head, Main, NextScript } from "next/document"
import { ThemeScriptTag } from "utils/ThemeScriptTag"

export default function Document() {
  return (
    <Html>
      <Head />
      <ThemeScriptTag />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
