import "./Projects.css";
import Nasa from "../../assets/Nasa.png";
import Wtwr from "../../assets/Wtwr.png";
import Spots from "../../assets/Spots.png";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <ul className="projects__cards">
        <ProjectCard
          image={Nasa}
          title="Nasa"
          description="NASA Mars Rover Gallery — React, Node.js, Express, NASA API
Developed a full-stack application that displays Mars Rover photos from NASA’s public API. Built a backend with Express to fetch and serve data efficiently, implemented dynamic filtering by rover and date, and designed a responsive React frontend for seamless photo browsing and enhanced user experience."
          github="https://github.com/Inzira117/Nasa-project "
        />
        <ProjectCard
          image={Wtwr}
          title="What to wear weather app"
          description="What-to-Wear Weather App — React, Node.js, Express, MongoDB,
            OpenWeather API Developed a full-stack weather app that uses
            geolocation and OpenWeather API for real-time forecasts. Built
            RESTful APIs with Express, integrated MongoDB for storing user
            clothing items, and implemented authentication for personalized
            collections."
          github="https://github.com/Inzira117/se_project_react"
        />
        <ProjectCard
          image={Spots}
          title="Spots"
          description="Spots Social Media App — HTML, CSS, JavaScript Created a responsive
            social media web app where users can create accounts, upload, and
            manage images. Implemented dynamic DOM manipulation and form
            handling with vanilla JavaScript, ensuring smooth interaction across
            all devices."
          github="https://github.com/Inzira117/se_project_spots"
        />
      </ul>
    </section>
  );
}
