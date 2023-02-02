import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList/CardList';
import SearchBox from '../components/SearchBox';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';



function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10')
    .then(response => response.json())
    .then(data => {
      const foundPokemon = data.results;
      foundPokemon.forEach((mon, i) => {
        let foundMon = mon.name
        fetch(`https://pokeapi.co/api/v2/pokemon/${foundMon}`)
        .then(response => response.json())
        .then(users => {
          setPokemon(oldData => {
            return [...oldData, users];
          })
        })
      })
    })
    return () => setPokemon([])
    }, [])

  const onSearchFieldChange = (event) => {
    setSearchField(event.target.value)
  }

  const filteredPokemon = pokemon.filter((mon) => {
    return mon.name.toLowerCase().includes(searchField.toLowerCase())
  }).sort((item1, item2) => item1.id - item2.id)

  return !pokemon.length ?
    <h1>Loading</h1> :
    (
      <div className="container">
        <h1 className="mainTitle">Pokémon DB</h1>
        <SearchBox searchFieldChange={onSearchFieldChange} />
        <ErrorBoundry>
          <CardList pokemon={filteredPokemon} />
        </ErrorBoundry>
      </div>
    );
  }

export default App;
