import {
  Ably,
  Flask,
  Vercel,
  Nextjs,
  ChakraUI,
  Auth0,
  MongoDB,
} from "components/icons/lib"

export const projects = [
  {
    title: "Movie Ratings",
    url: "https://movie-ratings.vercel.app/",
    description:
      "Web application that allows you to search for movies and their ratings from IMDb, RottenTomatoes, Metacritic, Letterboxd, TMDb and FilmAffinity",
    additionalInfoList: [
      <>
        Made with Flask <Flask />{" "}
      </>,
      <>
        Deployed via Vercel <Vercel />
      </>,
      <>
        Source code:{" "}
        <a href="https://github.com/lugrao/movie_ratings">
          github.com/lugrao/movie_ratings
        </a>
      </>,
    ],
  },
  {
    title: "Chat App",
    url: "https://chat-app-lugrao.vercel.app/",
    description: "Chat application",
    additionalInfoList: [
      "Made with",
      [
        <>
          Next.js <Nextjs />
        </>,
        <>
          Ably <Ably />
        </>,
      ],
      <>
        Deployed via Vercel <Vercel />
      </>,
      <>
        Source code:{" "}
        <a href="https://github.com/lugrao/chat-app">
          github.com/lugrao/chat-app
        </a>
      </>,
    ],
  },
  {
    title: "NASA Exoplanet Query",
    url: "https://nasa-exoplanet-query.vercel.app/",
    description: "Web application for querying NASA's Exoplanet Archive",
    additionalInfoList: [
      "Made with",
      [
        <>
          Next.js <Nextjs />
        </>,
        <>
          Chakra UI <ChakraUI />
        </>,
        "React Virtual",
      ],
      <>
        Deployed via Vercel <Vercel />
      </>,
      <>
        Source code:{" "}
        <a href="https://github.com/lugrao/nasa-exoplanet-query">
          github.com/lugrao/nasa-exoplanet-query
        </a>
      </>,
    ],
  },
  {
    title: "Yunga",
    url: "https://www.yunga.musica.ar/",
    description: "Landing page for Yunga, a really cool band from La Plata",
    additionalInfoList: [
      <>
        Made with Next.js <Nextjs />
      </>,
      <>
        Deployed via Vercel <Vercel />
      </>,
      <>
        Source code:{" "}
        <a href="https://github.com/lugrao/yunga-web">
          github.com/lugrao/yunga-web
        </a>
      </>,
    ],
  },
  {
    title: "Cadex",
    url: "https://cadex.vercel.app/",
    description: "Web application for writing along with other people",
    additionalInfoList: [
      "Made with",
      [
        <>
          Next.js <Nextjs />
        </>,
        <>
          Chakra UI <ChakraUI />
        </>,
        <>
          Auth0 <Auth0 />
        </>,
        <>
          MongoDB <MongoDB />
        </>,
      ],
      <>
        Deployed via Vercel <Vercel />
      </>,
      <>
        Source code:{" "}
        <a href="https://github.com/lugrao/cadex">github.com/lugrao/cadex</a>
      </>,
    ],
  },
]
