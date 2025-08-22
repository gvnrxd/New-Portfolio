import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={styles["projectCard"]}
        >
          Project 1
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={styles["projectCard"]}
        >
          Project 2
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={styles["projectCard"]}
        >
          Project 3
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer"
          className={styles["projectCard"]}
        >
          Project 4
        </a>
        {/* <a className={styles["projectCard"]}>Project 4</a>
        <a className={styles["projectCard"]}>Project 5</a>
        <a className={styles["projectCard"]}>Project 6</a>
        */}
      </div>
    </section>
  );
};

export default Projects;
