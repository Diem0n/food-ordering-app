import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
const container = document.getElementById('overlays');
const ModalContent = (props) => {
  return (
    <div className={classes.backdrop}>
      <div className={classes.modal}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
    
  return (
    <>
    {createPortal(<ModalContent>{props.children}</ModalContent> , container)}
    </>
  );
};

export default Modal;
