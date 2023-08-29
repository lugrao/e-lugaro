/** @jsxImportSource @emotion/react */
import { projectList } from "components/projectList";
import { ExternalLink } from "components/ExternalLink";

export function Projects(props) {
  return (
    <div {...props}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} css={{ padding: "2px 4px 3px" }}>
          <h3>
            {project.url ? (
              <ExternalLink href={project.url} withIcon={true}>
                {project.title}
              </ExternalLink>
            ) : (
              <>{project.title}</>
            )}
          </h3>
          <p>{project.description}</p>
          {project.additionalInfoList}
        </div>
      ))}
    </div>
  );
}
