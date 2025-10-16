import { motion } from "framer-motion";
import "./Skills.css";
import ReactImg from "../../assets/react.svg";
import HtmlImg from "../../assets/html.png";
import CssImg from "../../assets/css.png";
import JsImg from "../../assets/js.png";

export default function Skills() {
  const images = [
    { src: HtmlImg, alt: "HTML" },
    { src: CssImg, alt: "CSS" },
    { src: JsImg, alt: "JavaScript" },
    { src: ReactImg, alt: "React" },
  ];

  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
      <div className="skills__images">
        {images.map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt={img.alt}
            className="skills__image"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        ))}
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
