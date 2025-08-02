import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">Inzira A.</div>
      <nav className="header__nav">
        <ul>
          <li className="header__about">About</li>
          <li className="header__projects">Skills</li>
          <li className="header__skills">Projects</li>
          <li className="header__contact">Contact</li>
        </ul>
      </nav>
    </header>
  );
}
