import React from 'react';
import './Card.css'

const Card = ({ name, types, height, weight, id }) => {
    return (
        <div className='card'>
            <img className='cardImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="pokemon" />
            <div className='cardText'>
                <h2>{name.toUpperCase()}</h2>
                <p>{`Height: ${height}`}</p>
                <p>{`Weight: ${weight}`}</p>
                <p>{types[0].type.name}</p>
                {types.length > 1 &&
                    <p>{types[1].type.name}</p>
                    }
                <p>{'Pokédex # '}{id}</p>
            </div>
        </div>
    );
}

export default Card;