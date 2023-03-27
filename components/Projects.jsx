import { projectList } from "components/projectList"

export function Projects(props) {
  return (
    <div {...props}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          {project.additionalInfoList}
        </div>
      ))}
    </div>
  )
}
