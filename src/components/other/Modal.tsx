// library imports
import React, { FC, Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";

// style imports
import styles from "./styles/Modal.module.css";

// component function for backdrop
const Backdrop: FC<{ onClick: () => void }> = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick} />;
};

// component function for modal overlay
const Overlay: FC<{ content: ReactNode }> = (props) => {
  return <div className={styles.overlay}>{props.content}</div>;
};

// component function
const Modal: FC<{ content: ReactNode; onClick: () => void }> = (props) => {
  // get element where backdrop must be displayed
  const backdropElement = document.getElementById(
    "backdrop-root"
  ) as HTMLElement;

  // get element where overlay must be displayed
  const overlayElement = document.getElementById("overlay-root") as HTMLElement;

  // display elements at specified locations using portals
  return (
    <Fragment>
      {createPortal(<Backdrop onClick={props.onClick} />, backdropElement)}
      {createPortal(<Overlay content={props.content} />, overlayElement)}
    </Fragment>
  );
};

export default Modal;
