import "styles/global.css"
import { Merriweather_Sans } from "next/font/google"

const merriweather_sans = Merriweather_Sans({ subsets: ["latin"] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={merriweather_sans.className}>
      <Component {...pageProps} />
    </main>
  )
}
