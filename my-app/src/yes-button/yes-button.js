import React from "react";
import "./yes-button.css";

const YesButton = ({ onClick }) => (
  <button id="adventure" className="yes-button" onClick={onClick}>
    Accept the adventure!
  </button>
);

export default YesButton;
