import "./Projects.css";

export default function Projects() {
  return (
    <div className="projects">
      <ul className="projects__cards">
        <h2 className="projects__title">Projects</h2>
        <li className="card">
          <img src="" alt="" />
          <h3 className="card__title">Project 1</h3>
          <p className="card__description">Description</p>
        </li>
        <li className="card">
          <img src="" alt="" />
          <h3 className="card__title">Project 2</h3>
          <p className="card__description">Description</p>
        </li>
        <li className="card">
          <img src="" alt="" />
          <h3 className="card__title">Project 3</h3>
          <p className="card__description">Description</p>
        </li>
      </ul>
    </div>
  );
}
