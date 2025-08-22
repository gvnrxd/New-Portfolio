import styles from "./Skills.module.css";

// Import icons here:

import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { SiJest } from "react-icons/si";
import { SiMocha } from "react-icons/si";
import { FaLinux } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNpm } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <h2>Skills / Tools</h2>
      <section>
        <ul className={styles.skillsSection}>
          <li>
            <FaHtml5 style={{ color: "#f06529" }} />
            HTML
          </li>
          <li>
            <FaCss3 style={{ color: "#264de4" }} />
            CSS
          </li>
          <li>
            <IoLogoJavascript style={{ color: "#f7df1e" }} />
            Javascript
          </li>
          <li>
            <FaReact style={{ color: "#61dafb" }} />
            React
          </li>
          <li className="skill">
            <span className="skill-item">
              <SiJest style={{ color: "#C21325" }} /> Jest
            </span>
            <span>/</span>
            <span className="skill-item">
              <SiMocha style={{ color: "#8D6748" }} /> Mocha
            </span>
          </li>

          <li>
            <FaLinux style={{ color: "black" }} />
            Linux / Command Line
          </li>
          <li>
            <FaGithub style={{ color: "black" }} />
            Git / Github
          </li>
          <li>
            <FaNpm style={{ color: "#cb3837" }} />
            NPM / Package management
          </li>
        </ul>
      </section>
    </>
  );
};

export default Skills;
