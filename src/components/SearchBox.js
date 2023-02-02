import React from 'react';
import '../containers/App.css'

const SearchBox = ({ searchFieldChange }) => {
    return (
        <div className='searchContainer'>
            <input 
                className='searchInput'
                type='search' 
                placeholder='search pokemon'
                onChange={searchFieldChange}
             />
        </div>
        
    )
}

export default SearchBox;