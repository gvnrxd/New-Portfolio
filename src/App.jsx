import { useState } from "react";

// Component Imports Here:
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className={"App"}>
        <div className={"header-content"}>
          <Header />
        </div>
        <div className={"body-content"}>
          <section className={"body-card"}>
            <AboutMe />
          </section>
          <section className={"body-project-card"}>
            <Projects />
          </section>
          <section className={"body-card"}>
            <Skills />
          </section>
          <section className={"body-footer-card"}>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
