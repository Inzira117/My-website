import "./Modal.css";
import Close from "../../assets/close.svg";
import { useEffect } from "react";

export default function Modal({ onClose }) {
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <div className="modal">
      <button className="modal__close" onClick={onClose}>
        <img src={Close} alt="close" />
      </button>
      <h2 className="modal__title">Contact me</h2>
      <p className="modal__content">email: inzira1995@gmail.com</p>
      <p className="modal__content">phone: +1(323) 536 69018</p>
    </div>
  );
}
