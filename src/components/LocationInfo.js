import React from 'react';

const LocationInfo = ({ name, type, dimension, population }) => {
    return (
        <div className='location-container'>
            <h2 className='location-title'>{ name }</h2>
            <ul className='location-info'>
                <li><strong>Type: </strong>{ type }</li>
                <li><strong>Dimension: </strong> { dimension }</li>
                <li><strong>Population: </strong>{ population }</li>
            </ul>
        </div>
    );
};

export default LocationInfo;