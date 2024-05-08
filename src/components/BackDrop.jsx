import React from "react";
import BackDropCSS from "../styles/BackDrop.module.css";

export default function BackDrop(props) {
  const { 
    backdrop, 
    backdrop_is_true,
  } = BackDropCSS;

  return (
    <div
      onClick={props.toggleLogin}
      className={`${backdrop} ${
        props.isLoginExpanded && backdrop_is_true
      }`}
    ></div>
  );
}
