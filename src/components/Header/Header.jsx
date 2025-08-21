import "./Header.css";

export default function Header({ onContactClick }) {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        Inzira A.
      </a>
      <nav className="header__nav">
        <a href="#about" className="header__nav-link">
          About
        </a>
        <a href="#skills" className="header__nav-link">
          Skills
        </a>
        <a href="#projects" className="header__nav-link">
          Projects
        </a>

        <button className="header__button" onClick={onContactClick}>
          Contact
        </button>
      </nav>
    </header>
  );
}
