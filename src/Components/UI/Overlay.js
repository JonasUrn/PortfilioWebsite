import { Fragment } from "react";

import ReactDOM from "react-dom";

import './Overlay.css';

const Overlay = (props) => {
  const closeDropdownHandler = () => {
    props.onCloseDropdown();
    console.log('closed');
  };
  const portalElement = document.getElementById("overlays");
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div className="overlay" onClick={closeDropdownHandler}></div>,
        portalElement
      )}
    </Fragment>
  );
};

export default Overlay;
