import "./ProjectCard.css";
import React from "react";
import Git from "../../assets/Git.png";

export default function ProjectCard({ image, title, description, github }) {
  return (
    <li className="card">
      <img className="card__img" src={image} alt={title} />
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
      <div className="card__git">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <img src={Git} alt="GitHub" />
        </a>
      </div>
    </li>
  );
}
