import React from 'react';

const SearchBox = ({ searchFieldChange }) => {
    return (
        <div>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search pokemon'
                onChange={searchFieldChange}
             />
        </div>
        
    )
}

export default SearchBox;