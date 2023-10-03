import styles from "./Tools.module.css";
import { toolList } from "app/components/toolList";

export function Tools(props) {
  return (
    <div className={styles.tools_container} {...props}>
      <h2>Tools</h2>
      {toolList}
    </div>
  );
}
