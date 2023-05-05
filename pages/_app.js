import "styles/global.css"
import { Merriweather_Sans } from "next/font/google"
import { ThemeProvider } from "utils/ThemeProvider"

const merriweather_sans = Merriweather_Sans({ subsets: ["latin"] })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={merriweather_sans.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
