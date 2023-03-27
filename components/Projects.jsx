import { projectList } from "components/projectList"
import { ExternalLink } from "components/ExternalLink"

export function Projects(props) {
  return (
    <div {...props}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index}>
          <h3>
            <ExternalLink
              href={project.url}
              withIcon={true}
              iconProps={{ css: { height: 10, width: 10 } }}
            >
              {project.title}
            </ExternalLink>
          </h3>
          <p>{project.description}</p>
          {project.additionalInfoList}
        </div>
      ))}
    </div>
  )
}
