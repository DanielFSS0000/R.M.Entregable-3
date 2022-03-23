import axios from 'axios';
import { useEffect, useState } from 'react';
import rick from '../images/rick.png';
import morty from '../images/morty.png' 

const SearchBox = ({ setLocation, setCurrentPage, setCurrentList }) => {
    const [ search, setSearch ] = useState("");
    const [locations, setLocations] = useState([]);

    const searchLocation = () => {
        axios.get(`https://rickandmortyapi.com/api/location/${search}/`)
            .then(res => {
                setLocation(res.data);
                setCurrentPage(1);
                setCurrentList(0);
            })
    }
    useEffect(() => {
        if(search){
            axios
            .get(`https://rickandmortyapi.com/api/location?name=${search}`)
            .then(res => setLocations(res.data.results))
            .catch(error => console.log(error))
        }else{
            setLocations([]);
        }
    }, [search])

    
    return (
        <div className='search-box'>
            <img src={morty} alt="Morty image" />
            <div className='center'>
                <input 
                    type="text" 
                    onChange={e => setSearch(e.target.value)} 
                    value={search}
                    placeholder='Ingrese la #ID de la ubicación para buscar'
                />
                <button className='button' onClick={searchLocation}>Search</button>
                <ul>
                    {locations?.map(location => <li>{location.name}</li>)}
                </ul>
            </div>
            <img className='rick' src={rick} alt='Rick image'/>
        </div>
    );
};

export default SearchBox;