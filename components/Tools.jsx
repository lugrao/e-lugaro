import { List } from "components/List"
import { tools } from "data/tools"

export function Tools() {
  return (
    <div>
      <h2>Tools</h2>
      <List items={tools} />
    </div>
  )
}
