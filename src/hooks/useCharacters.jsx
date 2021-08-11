//Importando react
import { useState, useEffect } from 'react';

//Creando hook useCharacter
const useCharacters = url => {
    //useState para manejar estado del componente
    const [characters, setCharacters] = useState([]);

    //useEffect permite manejar efectos
    useEffect(() => {
        //Llamado a la API
        fetch(url)
            //Promesa (exitosa) de la operación asíncrona
            //Transformando respuesta en JSON
            .then(response => response.json())
            //Enviando los resultados de la data al state setCharacters
            .then(data => setCharacters(data.results))
        //En este caso solo hace render cuando cambie url, es decir cuando llegue una url.
    }, [url])

    //Retornamos el estado con los datos del llamado a la API
    return characters;
}

//Exportando hook personalizado
export default useCharacters;

