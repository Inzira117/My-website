import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Inzira A.</div>
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
        <a href="#contacts" className="header__nav-link">
          Contacts
        </a>
      </nav>
    </header>
  );
}
