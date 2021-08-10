import React, { useContext } from 'react';
//Importando Theme Context
import ThemeContext from "../context/ThemeContext";

//Creando componente
const Header = ({ darkMode, onClick }) => {
    const classButton = useContext(ThemeContext);

    return (
        <div className="Header">
            <h1>ReactHooks</h1>
            <button
                type="button"
                onClick={onClick}
                className={classButton}
            >
                {darkMode ? 'LightMode' : 'DarkMode'}
            </button>
        </div>
    )
}

//Exportando componente
export default Header
