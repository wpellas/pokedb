import React from 'react';
import Card from '../Card/Card';
import './CardList.css'

const CardList = ({ pokemon }) => {
  let count = 0;
  return (
        <div className='cardList'>
          {
          pokemon.map((user, i) => {
            return (
              <Card 
                key={count++} 
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