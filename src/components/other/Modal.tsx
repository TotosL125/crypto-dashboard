// library imports
import React, { FC, Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";

// style imports
import styles from "./styles/Modal.module.css";

const Backdrop: FC<{ onClick: () => void }> = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

const Overlay: FC<{ content: ReactNode }> = (props) => {
  return <div className={styles.overlay}>{props.content}</div>;
};

const Modal: FC<{ content: ReactNode; onClick: () => void }> = (props) => {
  const backdropElement = document.getElementById(
    "backdrop-root"
  ) as HTMLElement;

  const overlayElement = document.getElementById("overlay-root") as HTMLElement;

  return (
    <Fragment>
      {createPortal(<Backdrop onClick={props.onClick} />, backdropElement)}
      {createPortal(<Overlay content={props.content} />, overlayElement)}
    </Fragment>
  );
};

export default Modal;
