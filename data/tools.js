import {
  JavaScript,
  React,
  Nextjs,
  Python,
  Flask,
  HTML,
  CSS,
  MongoDB,
  SQL,
} from "components/icons/lib"

export const tools2 = [
  {
    listItem: (
      <>
        JavaScript <JavaScript />
      </>
    ),
    children: [
      {
        listItem: (
          <>
            React <React />
          </>
        ),
        children: [
          {
            listItem: (
              <>
                Next.js <Nextjs />
              </>
            ),
          },
        ],
      },
    ],
  },
  {
    listItem: (
      <>
        Python <Python />
      </>
    ),
    children: [
      {
        listItem: (
          <>
            Flask <Flask />
          </>
        ),
      },
      { listItem: "Django" },
    ],
  },
  {
    listItem: (
      <>
        HTML <HTML />
      </>
    ),
  },
  {
    listItem: (
      <>
        CSS <CSS />
      </>
    ),
  },
  {
    listItem: (
      <>
        MongoDB <MongoDB />
      </>
    ),
  },
  {
    listItem: (
      <>
        SQL <SQL />
      </>
    ),
  },
]
