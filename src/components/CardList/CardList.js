import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

const CardList = ({ pokemon }) => {
  return !pokemon.length ?
  <h1>No Pokémon with that name was found, did you perhaps spell the name incorrectly?</h1> :
    (
      <div className='cardList'>
        {
        pokemon.map((user, i) => {
          return (
            <Card 
              key={user.id} 
              id={user.id} 
              name={user.name} 
              height={user.height}
              weight={user.weight}
              types={user.types}
              />
          );
        })
        }
      </div>
    )
}

export default CardList;