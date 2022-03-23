import React, { useState } from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentList = ({ residents, currentPage, setCurrentPage, currentList, setCurrentList }) => {

    const numberOfPages = Math.ceil(residents?.length / 6);

    const nextPage = () => {
        if( currentPage <= numberOfPages )
            setCurrentList(currentList + 6);
            setCurrentPage( currentPage + 1);
    }

    const previousPage = () => {
        if( currentList > 1 ) 
            setCurrentList( currentList - 6);
            setCurrentPage( currentPage - 1);
    }

    const residentsPageResults = () => {
        return residents?.slice(currentList, currentList + 6);
    }
    
    return (
        <>
            <div className='button-container'>
                {   
                    currentPage > 1 && 
                    <button className='page-button' onClick={previousPage}>Previous</button> 
                }
                { 
                    currentPage < numberOfPages && 
                    <button className='page-button' onClick={nextPage}>Next</button> 
                }             
            </div>
            { residents?.length === 0 && <h3 className='showing-page'>La ubicación mostrada no tine habitantes</h3> }
            { residents?.length > 0 && <h3 className='showing-page'>{`Mostrando página ${currentPage} de ${numberOfPages}`}</h3> } 
            <div className='resident-list'>
                {
                    residentsPageResults()?.map(resident => (
                        <ResidentInfo key={resident} residentUrl={resident}/>
                    ))
                }
            </div>
        </>    
    );
};

export default ResidentList;