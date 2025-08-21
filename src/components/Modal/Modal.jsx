import "./Modal.css";
import Close from "../../assets/close.svg";

export default function Modal({ closeActiveModal }) {
  return (
    <div className="modal">
      <div className="modal__info">
        <button className="modal__close" onClick={closeActiveModal}>
          <img src={Close} alt="close" />
        </button>
        <h2 className="modal__title">Contact me</h2>
        <p className="modal__content">email: inzira1995@gmail.com</p>
        <p className="modal__content">phone: +1(323) 536 69018</p>
      </div>
    </div>
  );
}
