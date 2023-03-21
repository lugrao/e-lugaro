import { projects } from "data/projects"

export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map((project) => (
        <div>
          <h3>{project.title}</h3>
          <ul>
            <li>
              Made with:
              <ul>
                {project.madeWith.map((tool) => (
                  <li>{tool}</li>
                ))}
              </ul>
            </li>
            <li>Source code: {project.sourceCodeUrl}</li>
          </ul>
        </div>
      ))}
    </div>
  )
}
