//Importando componente
import React from 'react'

//Creando componente Search
const Search = ({ search, searchInput, handleSearch }) => {
    return (
        <div className="Search mt-3">
            <input className="w-50" type="text" value={search} ref={searchInput} onChange={handleSearch} />
        </div>
    );
}

//Exportando componente Search
export default Search;