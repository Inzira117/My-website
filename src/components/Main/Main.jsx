import "./Main.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Avatar from "../../assets/Avatar.png";

export default function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <div className="main__text">
          <h1 className="main__title">
            Hello, <br />
            I'm Inzira Abdurafikova
          </h1>
          <h2 className="main__position">Software engineer</h2>
        </div>
        <img src={Avatar} alt="Avatar" className="main__image" />
      </div>
      <About />
      <Skills />
      <Projects />
    </section>
  );
}
