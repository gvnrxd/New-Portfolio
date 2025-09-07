import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <h2>Projects</h2>
      <div className={styles.projects}>
        <a
          href="https://gvnrxd.github.io/What-my-Grade/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles["projectCard"]}
        >
          What-my Grade
        </a>
        <a
          href="https://gvnrxd.github.io/food-mock/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles["projectCard"]}
        >
          Food Service Mockup
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles["projectCard"]}
        >
          Coming Soon..
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles["projectCard"]}
        >
          Coming Soon..
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles["projectCard"]}
        >
          Coming Soon..
        </a>
        <a
          href=""
          target="_blank"
          rel="noreferrer noopener"
          className={styles["projectCard"]}
        >
          Coming Soon..
        </a>
      </div>
    </section>
  );
};

export default Projects;
