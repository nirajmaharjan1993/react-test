import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const [, , light] = ["boots", "tent", "headlamp"];
console.log(light);
const rootElement = document.getElementById("root");
ReactDOM.render(<App authorised={false} />, rootElement);
