import { List } from "components/List"
import { tools } from "data/tools"

export function Tools(props) {
  return (
    <div {...props}>
      <h2>Tools</h2>
      <List items={tools} />
    </div>
  )
}
