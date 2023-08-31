/** @jsxImportSource @emotion/react */
import { projectList } from "components/projectList";
import { ExternalLink } from "components/ExternalLink";
import Image from "next/image";

export function Projects(props) {
  return (
    <div {...props}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div key={index} css={{ padding: "2px 4px 3px", marginBottom: 80 }}>
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
          {project.imageSrc && (
            <div>
              <a href={project.url} target="_blank">
                <Image
                  src={project.imageSrc}
                  alt={`${project.title} screen`}
                  height={344}
                  width={610}
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                    border: "1px solid #b8b8b8",
                    borderRadius: "5px",
                    width: "100%",
                    height: "auto",
                  }}
                />
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
