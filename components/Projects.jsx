/** @jsxImportSource @emotion/react */
import { projectList } from "components/projectList";
import { ExternalLink } from "components/ExternalLink";
import Image from "next/image";

export function Projects(props) {
  return (
    <div {...props}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div
          className="project-box"
          key={index}
          css={{
            marginBottom: 40,
            borderRadius: 10,
          }}
        >
          {project.imageSrc && (
            <a href={project.url} target="_blank">
              <Image
                className="project-image"
                src={project.imageSrc}
                alt={`${project.title} screen`}
                height={344}
                width={610}
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  borderRadius: "10px 10px 0 0",
                  width: "100%",
                  height: "auto",
                }}
              />
            </a>
          )}
          <div css={{ padding: "20px 30px 20px" }}>
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
        </div>
      ))}
    </div>
  );
}
