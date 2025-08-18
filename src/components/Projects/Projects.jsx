import "./Projects.css";
import News from "../../assets/News.png";
import Wtwr from "../../assets/Wtwr.png";
import Spots from "../../assets/Spots.png";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="projects__title">Projects</h2>
      <ul className="projects__cards">
        <li className="card">
          <img className="card__img" src={News} alt="news" />
          <h3 className="card__title">News Explorer</h3>
          <p className="card__description">
            NewsExplorer App — React, CSS, Third-Party News API Built a
            responsive news search application that lets users find articles by
            keyword, authenticate via login/registration, and save favorites.
            Implemented dynamic routing, conditional rendering, and
            mobile-optimized layouts for seamless user experience.
          </p>
        </li>
        <li className="card">
          <img className="card__img" src={Wtwr} alt="wtwr" />
          <h3 className="card__title">What to wear weather app</h3>
          <p className="card__description">
            What-to-Wear Weather App — React, Node.js, Express, MongoDB,
            OpenWeather API Developed a full-stack weather app that uses
            geolocation and OpenWeather API for real-time forecasts. Built
            RESTful APIs with Express, integrated MongoDB for storing user
            clothing items, and implemented authentication for personalized
            collections.
          </p>
        </li>
        <li className="card">
          <img className="card__img" src={Spots} alt="spots" />
          <h3 className="card__title">Spots</h3>
          <p className="card__description">
            Spots Social Media App — HTML, CSS, JavaScript Created a responsive
            social media web app where users can create accounts, upload, and
            manage images. Implemented dynamic DOM manipulation and form
            handling with vanilla JavaScript, ensuring smooth interaction across
            all devices.
          </p>
        </li>
      </ul>
    </section>
  );
}
