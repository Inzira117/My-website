import "./About.css";
import Avatar from "../../assets/Avatar.png";

export default function About() {
  return (
    <section className="about">
      <div className="about__content">
        My journey into software development started with a love for creating
        things and a curiosity for how technology works.After years in sales, I
        decided to follow my passion for problem-solving and began learning web
        development. Now, as a full stack developer, I combine technical skills
        with creativity to craft user-focused digital experiences. Every project
        is a new opportunity to learn, adapt, and grow.
      </div>
      <img src={Avatar} alt="Avatar" className="about__image" />
    </section>
  );
}
