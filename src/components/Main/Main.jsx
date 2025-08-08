import "./Main.css";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Avatar from "../../assets/Avatar.png";

export default function Main() {
  return (
    <section className="main">
      <div className="main__content">
        <div className="main__text">
          <hi className="main__title">Hello, I'm Inzira Abdurafikova</hi>
          <h2 className="main__position">Software engineer</h2>
        </div>
        <img src={Avatar} alt="Avatar" className="main__image" />
      </div>
      <About />
      <Skills />
    </section>
  );
}
