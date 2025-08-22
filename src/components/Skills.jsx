import styles from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <h2>Skills / Tools</h2>
      <section>
        <ul className={styles.skillsSection}>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Jest / Mocha</li>
          <li>Linux / Command Line</li>
          <li>Git / Github</li>
          <li>NPM / Package management</li>
        </ul>
      </section>
    </>
  );
};

export default Skills;
