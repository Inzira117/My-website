import "./Skills.css";
import ReactImg from "../../assets/react.svg";
import HtmlImg from "../../assets/html.png";
import CssImg from "../../assets/css.png";
import JsImg from "../../assets/js.png";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__images">
        <img src={ReactImg} alt="React" className="skills__image" />
        <img src={HtmlImg} alt="HTML" className="skills__image" />
        <img src={CssImg} alt="CSS" className="skills__image" />
        <img src={JsImg} alt="JavaScript" className="skills__image" />
      </div>
      <ul className="skills__content">
        <li>
          Frontend: HTML, CSS, JavaScript, TypeScript, React, Tailwind, Figma,
          Vite
        </li>
        <li>Backend: Node.js, Express, MongoDB, PostgreSQL, Mongoose</li>
        <li> Tools: Git/GitHub, Postman, REST APIs, Jest</li>
        <li>Other: Agile methodologies, Data Structures & Algorithms, OOP</li>
      </ul>
    </section>
  );
}
