import axios from 'axios';
import React, { useEffect, useState } from 'react';

const ResidentInfo = ({residentUrl}) => {
    const [ residentData, setResidentData ] = useState({});
    const [ circleColor, setCircleColor ] = useState('');

    useEffect(() => {
        axios.get(residentUrl)
            .then(res => {
                setResidentData(res.data)
                    if(res.data.status.toLowerCase() === 'alive') {
                        setCircleColor("#7CFC00")
                    } else if (res.data.status.toLowerCase() === 'dead') {
                        setCircleColor("#FF0000")
                    } else {
                        setCircleColor("#A9A9A9")
                    }
            })
    }, [ residentUrl ]);

    const styles = {
        background: circleColor
    }

    return (
        <div className="column">
            <div className='card'>
                <img src={ residentData.image }/>
                <ul className='resident-info'>
                    <li className='card-name'>{ residentData.name }</li>
                    <li className='status-container'><div className="status" style={styles}></div>{ residentData.status } - { residentData.species }</li>
                    <li><strong>Origin: </strong>{ residentData.origin?.name }</li>
                    <li><strong>Episode appearances: </strong>{ residentData.episode?.length }</li>
                </ul>
            </div>
        </div>
    );
};

export default ResidentInfo;