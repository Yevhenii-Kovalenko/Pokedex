import React from 'react';

import { TextField } from '@mui/material';

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <TextField
      label="Search by name"
      value={searchTerm}
      color='secondary'
      onChange={(e) => setSearchTerm(e.target.value)}
      InputLabelProps={{
        style: { color: '#fff' },
      }}
    />
  );
}

export default SearchBar;
