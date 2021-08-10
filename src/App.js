import React, { useState } from "react";
//Importando componente Header
import Header from "./components/Header";
//Importando componente Characters
import Characters from "./components/Characters";

function App() {
  //useState para manejar estado del componente
  const [darkMode, setDarkMode] = useState(false);

  //Almacena el valor de la clase bg
  let bg = darkMode ? "bg-dark text-light" : "bg-light text-dark";

  //Almacenando el valor de la clase bgCard
  let bgCard = darkMode ? "bg-dark text-light" : "bg-light text-dark";

  //Funcion que al dar click, ejecuta la función setDarkMode
  const handleClick = () => {
    //Cambiando el valor del estado darkMode
    setDarkMode(!darkMode);
  };

  return (
    //Agregamos la clase bg
    <div className={"App " + bg}>
      <Header
        darkMode={darkMode}
        onClick={handleClick}
      />
      <Characters
        bgCard={bgCard}
      />
    </div>
  );
}

export default App;
