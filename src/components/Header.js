import React from 'react';

import { AppBar, Grid, Toolbar, Typography } from '@mui/material';

import SearchBar from './SearchBar';

const headerStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '100px',
  backgroundColor: 'primary',
};

function Header({ onSearch, searchTerm, setSearchTerm }) {
  return (
    <Grid container>
      <AppBar position="static" sx={{ flex: '1' }}>
        <Toolbar sx={headerStyles}>
          <Grid item xl={3} lg={4} md={5} sm={6}>
            <Typography variant="h5" sx={{ textShadow: '5px 6px 3px rgba(0, 0, 0, 0.5)' }}>
              Pokedex
            </Typography>
          </Grid>
          <Grid item xl={3} lg={4} md={5} sm={6}>
            <SearchBar onSearch={onSearch} searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </Grid>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}

export default Header;
