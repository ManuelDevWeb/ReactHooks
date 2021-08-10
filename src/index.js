import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
//Importando bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Importando Theme Context
import ThemeContext from "./context/ThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeContext.Provider value={"btn btn-success"}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
