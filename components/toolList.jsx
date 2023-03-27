import {
  CSS,
  Django,
  Flask,
  HTML,
  JavaScript,
  MongoDB,
  Nextjs,
  Python,
  React,
  SQL,
} from "components/icons/lib"

export const toolList = (
  <ul>
    <li>
      JavaScript <JavaScript />
      <ul>
        <li>
          React <React />
          <ul>
            <li>
              Next.js <Nextjs />
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      Python <Python />
      <ul>
        <li>
          Flask <Flask />
        </li>
        <li>
          Django <Django />
        </li>
      </ul>
    </li>
    <li>
      HTML <HTML />
    </li>
    <li>
      CSS <CSS />
    </li>
    <li>
      MongoDB <MongoDB />
    </li>
    <li>
      SQL <SQL />
    </li>
  </ul>
)
