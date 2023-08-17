import React from 'react';

import { Grid, Typography } from '@mui/material';

import PokemonCard from './PokemonCard';

function PokemonList({ pokemons, searchTerm }) {
  return (
    <Grid container spacing={2} sx={{ margin: '20px 0px 100px 0px', flex: '1' }}>

      {pokemons.length === 0 ? (
        <Typography
          sx={{ margin: '0 auto' }}
          variant="h3"
        >{`There are no results for "${searchTerm}".`}</Typography>
      ) : (
        pokemons.map((pokemon) => (
          <Grid key={pokemon.id} item xl={3} lg={4} md={5} sm={6} xs={11}>
            <PokemonCard
              name={pokemon.name}
              avatarUrl={pokemon.avatarUrl}
              types={pokemon.types}
              stats={pokemon.stats}
              height={pokemon.height}
              weight={pokemon.weight}
              species={pokemon.species}
            />
          </Grid>
        ))
      )}
    </Grid>
  );
}

export default PokemonList;
