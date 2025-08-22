// Import Icons/Images from here:

import csIcon from "../assets/computer-science-icon.svg";
import pfp from "../assets/pfp.jpg";

// External Imports here:

import ReactCountryFlag from "react-country-flag";

// Import Styles module here:

import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className={styles.headerSection}>
        <section className={styles.mainProfile}>
          <img src={pfp} className={styles.profilePic} />
          <h1>Gavin Raymond</h1>
          <p>
            <img
              src={csIcon}
              alt=""
              style={{
                width: "1.5em",
                height: "1.5em",
                verticalAlign: "middle",
              }}
            />{" "}
            Computer Science Student | <br />
            Software & Hardware Developer
          </p>
          <p>
            <ReactCountryFlag
              countryCode="US"
              svg
              style={{
                width: "1.2em",
                height: "1.2em",
                verticalAlign: "text-bottom",
              }}
            />{" "}
            USA
          </p>
        </section>
        <section className={styles.navSection}>
          <nav>
            <ul className={styles.headUl}>
              <a
                href="mailto:gvnrxd@email.com"
                target="_blank"
                rel="noreferrer"
              >
                <li>Email</li>
              </a>
              <a
                href="https://www.linkedin.com/in/gavin-raymond-433070286/"
                target="_blank"
                rel="noreferrer"
              >
                <li>LinkedIn</li>
              </a>
              <a
                href="https://github.com/gvnrxd"
                target="_blank"
                rel="noreferrer"
              >
                <li>GitHub</li>
              </a>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
};

export default Header;
