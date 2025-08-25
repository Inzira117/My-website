import "./Header.css";
import Menu from "../../assets/menu.png";
import { useState } from "react";

export default function Header({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a href="/" className="header__logo">
        Inzira A.
      </a>
      <div className="header__hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={Menu} alt="menu" />
      </div>
      <nav className={`nav ${isOpen ? "open" : ""}`}>
        <a href="#about" className="header__nav-link">
          About
        </a>
        <a href="#skills" className="header__nav-link">
          Skills
        </a>
        <a href="#projects" className="header__nav-link">
          Projects
        </a>

        <button className="header__button" onClick={openModal}>
          Contact
        </button>
      </nav>
    </header>
  );
}
