import axios from 'axios';
import { useState } from 'react';
import rick from '../images/rick.png';
import morty from '../images/morty.png' 

const SearchBox = ({ setLocation, setCurrentPage, setCurrentList }) => {
    const [ search, setSearch ] = useState("");

    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${search}/`)
            .then(res => {
                setLocation(res.data);
                setCurrentPage(1);
                setCurrentList(0);
            })
    }

    return (
        <div className='search-box'>
            <img src={morty} alt="Morty image" />
            <div className='center'>
                <input 
                    type="text" 
                    onChange={e => setSearch(e.target.value)} 
                    value={search}
                    placeholder='Ingresa el ID de la ubicación que deseas buscar'
                />
                <button className='button' onClick={searchLocation}>Search</button>
            </div>
            <img className='rick' src={rick} alt='Rick image'/>
        </div>
    );
};

export default SearchBox;