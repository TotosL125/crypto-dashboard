// library imports
import React, { FC, Fragment, ReactNode } from "react";
import { createPortal } from "react-dom";

const Backdrop: FC<{ onClick: () => void }> = (props) => {
  return <div onClick={props.onClick} />;
};

const Overlay: FC<{ content: ReactNode }> = (props) => {
  return <div>{props.content}</div>;
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
