import { ReactNode } from "react";
import styles from "./Modal.module.css";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

interface Props {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
}

function Modal({ children, open, onClose }: Props) {
  const el = document.getElementById("portal");
  if (!open || !el) return null;
  return ReactDOM.createPortal(
    <div className={`${styles.modal}`}>
      <AiOutlineClose
        onClick={onClose}
        style={{ color: "white", fontSize: "1.5rem", margin: "2rem 0 0 2rem" }}
      />
      {children}
    </div>,
    el
  );
}

export default Modal;
