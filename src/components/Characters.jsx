import React, { useState, useReducer, useMemo, useRef, useCallback } from 'react';
//Importando componente Search
import Search from "./Search";
//Importando custom hook
import useCharacters from "../hooks/useCharacters";
//Importando estilos
import "./styles/Characters.css";

//Initial state para useReducer
const initialState = {
    favorites: []
}

//Url de la API
const API = 'https://rickandmortyapi.com/api/character/';

//Reducer para almacenar el state de favoritos
const favoriteReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_FAVORITE':
            return {
                ...state,
                //Añadimos los personajes que ya estan, y los que queremos agregar
                favorites: [...state.favorites, action.payload]
            };
        default:
            return state;
    }
}

//Creando componente
const Characters = ({ darkMode }) => {
    //useReducer para trabajar con mas características del estado
    const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
    //useState para el manejar estado del componente
    const [search, setSearch] = useState('');
    //useRef para manejar mucho mejor la referencia a inputs o formularios
    const searchInput = useRef(null);

    //El prop darkMode viene desde el App.js
    const bgCard = darkMode ? "bg-dark text-light" : "bg-light text-dark";

    //Llamando nuestro hook personalizado useCharacter, en el cual se hace el llamado a la API
    const characters = useCharacters(API);

    //Se ejecuta al dar click en el boton add to favorite, nos trae el personaje para actualizar el reducer
    const handleClick = (favorite) => {
        //Dispatch permite actualizar el reducer
        dispatch({
            //Caso a ejecutar
            type: 'ADD_TO_FAVORITE',
            //Información que enviamos al reducer
            payload: favorite,
        })
    }

    //Sirve para evitar cálculos innecesarios en funciones.
    //Se ejecuta al escribir algo en nuestro input search
    const handleSearch = useCallback(() => {
        //Ya no llamamos evento, llamamos el ref
        //Cambiando el valor del estado search
        setSearch(searchInput.current.value)
        //Referencia al elemento que va a escuchar
    }, [])

    //Filtrador de busqueda (Retorna ciertos elementos de characters que contiene TODOS!)
    //useMemo para memorizar calculos
    const filteredUsers = useMemo(() =>
        characters.filter((user) => {
            //Retorna los que incluyan search en el nombre
            return user.name.toLowerCase().includes(search.toLowerCase());
        }),
        //Parametros sobre los que escucha, characters y search 
        [characters, search]
    )

    return (
        <div className="Characters container">

            <Search
                search={search}
                searchInput={searchInput}
                handleSearch={handleSearch}
            />

            <div className="row mt-3">
                {
                    //Validamos que si hayan favoritos para mostrar titulo
                    (favorites.favorites.length === 0) ? null : <h1 className={darkMode ? "text-light" : "text-dark"}>Your Favorites</h1>
                }
                {
                    //Mostrando lista de favoritos console.log(favorites)
                    favorites.favorites.map((favorite) => (
                        <div className="col-md-1 mx-2" key={favorite.id}>
                            <img className="imgFavorite" src={favorite.image} alt="Imagen" />
                        </div>
                    ))}
            </div>

            <div className="row">
                {
                    //Mapeando nuestros personales (Cambiamos characters, por filteredUsers que también contiene todos)
                    filteredUsers.map((character) => (
                        <div className="col-md-3" key={character.id}>
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
                                <button type="button" onClick={() => handleClick(character)}>Add to Favorites</button>
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