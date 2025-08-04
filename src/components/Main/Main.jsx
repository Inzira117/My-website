import "./Main.css";
import About from "../About/About";
import Skills from "../Skills/Skills";

export default function Main() {
  return (
    <div className="main">
      <hi className="main__title">Hello, I'm Inzira Abdurafikova</hi>
      <h2 className="main__position">Software engineer</h2>
      <About />
      <Skills />
    </div>
  );
}
