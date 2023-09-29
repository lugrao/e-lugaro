import styles from "./Projects.module.css";
import { projectList } from "components/projectList";
import { ExternalLink } from "components/ExternalLink";
import Image from "next/image";

export function Projects(props) {
  return (
    <div className={styles.projects_container} {...props}>
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <div className={styles.project_box} key={index}>
          {project.imageSrc && (
            <a href={project.url} target="_blank">
              <Image
                className={styles.project_image}
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
          <div className={styles.project_info}>
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
