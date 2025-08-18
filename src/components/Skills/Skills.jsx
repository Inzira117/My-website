import "./Skills.css";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="skills__title">Skills</h2>
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
