/* eslint-disable import/order */
import React, { useState, useEffect } from 'react';

import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';

import Header from './components/Header';
import Pagination from './components/Pagination';
import PokemonList from './components/PokemonList';

import './App.css';
import TypeFilter from './components/TypeFilter';

const pokemonTypes = ['grass', 'fire', 'water', 'electric', 'normal', 'fighting', 'flying'];

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${
            (currentPage - 1) * itemsPerPage
          }`
        );
        const data = response.data.results;
        const fetchedPokemons = await Promise.all(
          data.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url);
            return {
              id: pokemonResponse.data.id,
              name: pokemonResponse.data.name,
              avatarUrl: pokemonResponse.data.sprites.front_default,
              types: pokemonResponse.data.types.map((type) => type.type.name),
              stats: pokemonResponse.data.stats,
              height: pokemonResponse.data.height,
              weight: pokemonResponse.data.weight,
            };
          })
        );
        setPokemons(fetchedPokemons);
        setTotalPages(Math.ceil(response.data.count / itemsPerPage));
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [currentPage]);
  const handleTypeSelect = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const filteredPokemons = pokemons.filter((pokemon) => {
    return (
      (selectedTypes.length === 0 || selectedTypes.some((type) => pokemon.types.includes(type))) &&
      (searchTerm === '' || pokemon.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box
      component="div"
      sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', position: 'relative' }}
    >
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isLoading ? (
        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <TypeFilter
            types={pokemonTypes}
            selectedTypes={selectedTypes}
            onTypeSelect={handleTypeSelect}
          />
          <PokemonList pokemons={filteredPokemons} searchTerm={searchTerm} />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </Box>
  );
}

export default App;
