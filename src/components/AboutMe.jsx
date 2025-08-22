// Import CSS styles here:

import styles from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <>
      <div className={styles.aboutMeContainer}>
        <h2>About Me</h2>
        <p>
          I’m a Computer Science student at PBSC with a strong passion for
          computers and problem-solving. I enjoy turning ideas into functional
          code and projects, with experience in HTML, CSS, JavaScript, React,
          and testing frameworks. Currently pursuing a full-stack development
          course, my long-term goal is to contribute to impactful software while
          expanding my skills in cybersecurity and hardware development.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
