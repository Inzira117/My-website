import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

function App() {
  return (
    <Router>
      <div className="page">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
