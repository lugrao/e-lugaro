import { toolList } from "components/toolList"

export function Tools(props) {
  return (
    <div {...props}>
      <h2>Tools</h2>
      {toolList}
    </div>
  )
}
