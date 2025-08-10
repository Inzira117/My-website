import "./About.css";
import Girl from "../../assets/Girl.png";

export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">About me</h2>
      <h2 className="about__question">Why hire me for your next project?</h2>
      <div className="about__content">
        <img src={Girl} alt="Girl" className="about__img" />
        <p className="about__text">
          My journey into software development started with a love for creating
          things and a curiosity for how technology works. After years in sales,
          I decided to follow my passion for problem-solving and began learning
          web development. Now, as a full stack developer, I combine technical
          skills with creativity to craft user-focused digital experiences.
          Every project is a new opportunity to learn, adapt, and grow.
          <br></br>I care about the details, the deadlines, and the people I
          work with. I listen closely, communicate clearly, and build solutions
          that not only work — they feel right for your audience. From idea to
          implementation, I’m here to make your vision a reality.
        </p>
      </div>
    </section>
  );
}
