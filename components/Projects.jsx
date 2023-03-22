import { projects } from "data/projects"
import { List } from "components/List"

export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p css={{ overflowWrap: "break-word" }}>{project.description}</p>
          <List items={project.additionalInfoList} />
        </div>
      ))}
    </div>
  )
}
