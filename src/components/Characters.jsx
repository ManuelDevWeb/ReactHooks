import React, { useState, useEffect } from 'react';
//Importando estilos
import "./styles/Characters.css";

//Creando componente
const Characters = ({ bgCard }) => {
    //useState para manejar estado del componente
    const [characters, setCharacters] = useState([]);

    //useEffect permite manejar efectos
    //En este caso solo hace render una vez porque no depende de ninguna variable []
    useEffect(() => {
        //Llamado a la API
        fetch('https://rickandmortyapi.com/api/character/')
            //Promesa (exitosa) de la operación asíncrona
            //Transformando respuesta en JSON
            .then(response => response.json())
            //Enviando los resultados de la data al state setCharacters
            .then(data => setCharacters(data.results));
        //Promesa (fracaso) de la operación asíncrona
    }, []);

    return (
        <div className="Characters container">
            <div className="row">
                {
                    //Mapeando nuestros personales
                    characters.map((character) => (
                        <div className="col-md-3">
                            <div className="card mt-3">
                                <img className="card-img-top" src={character.image} alt="Imagen" />
                                <div className="card-meta bg-primary p-2 text-center fw-bold text-uppercase">
                                    <p className="m-0">{character.name}</p>
                                </div>
                                <div className={"card-body " + bgCard}>
                                    {
                                        (character.status === "Alive")
                                            ? <p><span className="fw-bold">Status: </span>{character.status} 💚</p>
                                            : <p><span className="fw-bold">Status: </span>{character.status} ⚰</p>
                                    }
                                    <p><span className="fw-bold">Specie: </span>{character.species}</p>
                                    <p><span className="fw-bold">Genre: </span>{character.gender}</p>
                                    <p><span className="fw-bold">Origin: </span>{character.origin.name}</p>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

//Exportando componente
export default Characters;