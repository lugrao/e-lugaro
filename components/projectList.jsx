import {
  Ably,
  Auth0,
  ChakraUI,
  Flask,
  MongoDB,
  Nextjs,
  TanStack,
  Vercel,
} from "components/icons/lib"

export const projectList = [
  {
    title: "Movie Ratings",
    url: "https://movie-ratings.vercel.app/",
    description:
      "Web application that allows you to search for movies and their ratings from IMDb, RottenTomatoes, Metacritic, Letterboxd, TMDb and FilmAffinity",
    additionalInfoList: (
      <ul>
        <li>
          Made with Flask <Flask />
        </li>
        <li>
          Deployed via <Vercel />
        </li>
        <li>
          Source code:{" "}
          <a href="https://github.com/lugrao/movie_ratings">
            github.com/lugrao/movie_ratings
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Chat App",
    url: "https://chat-app-lugrao.vercel.app/",
    description: "Chat application",
    additionalInfoList: (
      <ul>
        <li>
          Made with
          <ul>
            <li>
              Next.js <Nextjs />
            </li>
            <li>
              Ably <Ably />
            </li>
          </ul>
        </li>
        <li>
          Deployed via Vercel <Vercel />
        </li>
        <li>
          Source code:{" "}
          <a href="https://github.com/lugrao/chat-app">
            github.com/lugrao/chat-app
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "NASA Exoplanet Query",
    url: "https://nasa-exoplanet-query.vercel.app/",
    description: "Web application for querying NASA's Exoplanet Archive",
    additionalInfoList: (
      <ul>
        <li>
          Made with
          <ul>
            <li>
              Next.js <Nextjs />
            </li>
            <li>
              Chakra UI <ChakraUI />
            </li>
            <li>
              React Virtual <TanStack />
            </li>
          </ul>
        </li>
        <li>
          Deployed via Vercel <Vercel />
        </li>
        <li>
          Source code:{" "}
          <a href="https://github.com/lugrao/nasa-exoplanet-query">
            github.com/lugrao/nasa-exoplanet-query
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Yunga",
    url: "https://www.yunga.musica.ar/",
    description: "Landing page for Yunga, a really cool band from La Plata",
    additionalInfoList: (
      <ul>
        <li>
          Made with Next.js <Nextjs />
        </li>
        <li>
          Deployed via Vercel <Vercel />
        </li>
        <li>
          Source code:{" "}
          <a href="https://github.com/lugrao/yunga-web">
            github.com/lugrao/yunga-web
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Cadex",
    url: "https://cadex.vercel.app/",
    description: "Web application for writing along with other people",
    additionalInfoList: (
      <ul>
        <li>
          Made with
          <ul>
            <li>
              Next.js <Nextjs />
            </li>
            <li>
              Chakra UI <ChakraUI />
            </li>
            <li>
              Auth0 <Auth0 />
            </li>
            <li>
              MongoDB <MongoDB />
            </li>
          </ul>
        </li>
        <li>
          Deployed via Vercel <Vercel />
        </li>
        <li>
          Source code:{" "}
          <a href="https://github.com/lugrao/cadex">github.com/lugrao/cadex</a>
        </li>
      </ul>
    ),
  },
]
