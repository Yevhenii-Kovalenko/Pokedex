import React from 'react';

import { Box, Chip } from '@mui/material';

function TypeFilter({ types, selectedTypes, onTypeSelect }) {
  return (
    <Box
      sx={{
        maxWidth: '100%',
        maxHeight: '100px',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '10px auto',
        gap: '5px',
      }}
    >
      {types.map((type) => (
        <Chip
          key={type}
          label={type}
          onClick={() => onTypeSelect(type)}
          color={selectedTypes.includes(type) ? 'warning' : 'secondary'}
          sx={{ ml: '5px' }}
        />
      ))}
    </Box>
  );
}

export default TypeFilter;
