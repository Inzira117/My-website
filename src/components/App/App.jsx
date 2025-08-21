import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";

function App() {
  const [activeModal, setActiveModal] = useState(false);

  const openModal = () => setActiveModal(true);
  const closeActiveModal = () => setActiveModal(false);

  useEffect(() => {
    if (!activeModal) return;

    const handleEscClose = (e) => {
      if (e.key === "Escape") closeActiveModal();
    };

    const handleOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleEscClose);
    document.addEventListener("mousedown", handleOverlay);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
      document.removeEventListener("mousedown", handleOverlay);
    };
  }, [activeModal]);

  return (
    <Router>
      <div className="page">
        <Header openModal={openModal} />
        {activeModal && <Modal closeActiveModal={closeActiveModal} />}
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
