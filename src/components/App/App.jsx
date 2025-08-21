import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Modal from "../Modal/Modal";
import { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="page">
        <Header onContactClick={() => setIsModalOpen(true)} />
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
