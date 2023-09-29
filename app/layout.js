import "styles/global.css";
import { COLORS } from "styles/colors";
import { Merriweather_Sans } from "next/font/google";
import { ThemeProvider } from "utils/ThemeProvider";
// import { Html, Head, Main, NextScript } from "next/document"
import { ThemeScriptTag } from "utils/ThemeScriptTag";

const merriweather_sans = Merriweather_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en" className={merriweather_sans.className}>
        <ThemeScriptTag />
        <body>{children}</body>
      </html>
    </ThemeProvider>
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
