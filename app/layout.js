import "styles/global.css";
import { Merriweather_Sans } from "next/font/google";
import { ThemeProvider } from "utils/ThemeProvider";
import { ThemeScriptTag } from "utils/ThemeScriptTag";
import { FallbackStyles } from "utils/FallbackStyles";

const merriweather_sans = Merriweather_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={merriweather_sans.className}>
      <body>
        <FallbackStyles />
        <ThemeScriptTag />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Ezequiel Lúgaro's personal site",
  description: "Ezequiel Lúgaro's personal site.",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "Django",
    "Flask",
    "Python",
    "Web Development",
    "Front End Developer",
    "Full Stack Developer",
    "Web Developer",
  ],
};
