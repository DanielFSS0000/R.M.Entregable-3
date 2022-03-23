import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ResidentList from './components/ResidentList';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo';

function App() {
    const [ location, setLocation ] = useState({});
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ currentList, setCurrentList ] = useState(0);

    useEffect(() => {
        const random = Math.floor(Math.random() * 126) + 1;

        axios.get(`https://rickandmortyapi.com/api/location/${random}/`)
            .then(res => {
                setLocation(res.data)
                setCurrentPage(1);
                setCurrentList(0);
            })
    }, []);

    return (
        <div className="App">
            <h1>Rick and Morty Pedia</h1>
            <SearchBox 
                setLocation={setLocation}
                setCurrentPage={setCurrentPage}
                setCurrentList={setCurrentList}
            />
            <LocationInfo 
                name={location.name}
                type={location.type}
                dimension={location.dimension}
                population={location.residents?.length}
            />    
            <ResidentList 
                residents={location.residents}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                currentList={currentList}
                setCurrentList={setCurrentList}
            />
        </div>
    );
}

export default App;
