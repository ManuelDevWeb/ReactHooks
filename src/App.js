import React, { useState } from "react";
//Importando componente Header
import Header from "./components/Header";
//Importando componente Characters
import Characters from "./components/Characters";
//Importando Theme Context
import ThemeContext from "./context/ThemeContext";

function App() {
  //useState para manejar estado del componente
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div className={darkMode ? "App bg-dark" : "App bg-light"}>
        <Header />
        <Characters darkMode={darkMode} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
