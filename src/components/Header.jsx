import React, { useContext } from 'react';
//Importando Theme Context
import ThemeContext from "../context/ThemeContext";

//Creando componente
const Header = () => {
    //Accediendo a los valores del useContext
    const { darkMode, setDarkMode } = useContext(ThemeContext);

    //Funcion que al dar click, ejecuta la función setDarkMode
    const handleClick = () => {
        //Cambiando el valor del estado darkMode
        setDarkMode(!darkMode);
    };

    return (
        <div className="Header">
            <h1 className={darkMode ? "text-light" : "text-dark"}>ReactHooks</h1>
            <button
                type="button"
                onClick={handleClick}
            >
                {darkMode ? 'LightMode' : 'DarkMode'}
            </button>
        </div>
    )
}

//Exportando componente
export default Header
