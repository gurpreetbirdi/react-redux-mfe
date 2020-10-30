import React from "react";
import { render } from "react-dom";

import { AppCounter } from "./components/appCounter";

const mountCounter = (elementId) => {
  const renderElemement = document.getElementById(elementId);
  render(<AppCounter />, renderElemement);
};

window["mountCounter"] = mountCounter;

if (!window["micro-front-end-context"]) {
  mountCounter("app");
}
