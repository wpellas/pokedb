import React from 'react';
import './Card.css'

const Card = ({ name, types, height, weight, id }) => {
    return (
        <div className='card'>
                <p className='cardName'>{name.toUpperCase()}</p>
            <div className="cardImgContainer">
                <img className='cardImg' src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`} alt="pokemon" />
            </div>
            <div className='cardText'>
                <div className="typeData">
                    <img className='cardType' src={`https://www.serebii.net/pokedex-bw/type/${types[0].type.name}.gif`} alt="pokemon type" />
                    {types.length > 1 &&
                        <img className='cardType' src={`https://www.serebii.net/pokedex-bw/type/${types[1].type.name}.gif`} alt="pokemon type" />
                    }   
                </div>
                <div className='bodyData'>
                    <p>{`Height: ${height * 10} cm`}</p>
                    <p>{`Weight: ${weight / 10} kg`}</p>  
                </div>
                <p className='cardDex'>{'#'}{id}</p>
            </div>
        </div>
    );
}

export default Card;