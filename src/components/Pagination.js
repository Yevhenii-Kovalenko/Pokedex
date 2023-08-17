import React from 'react';

import { Box, Pagination as MuiPagination } from '@mui/material';

const paginationStyles = {
  position: 'absolute',
  bottom: '10px',
  left: '10px',
  width: '100%',
  height: '50px',
};

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <Box component="div" sx={{ textAlign: 'center' }}>
      <MuiPagination
        color="primary"
        count={totalPages}
        size="large"
        page={currentPage}
        onChange={onPageChange}
        sx={paginationStyles}
      />
    </Box>
  );
}

export default Pagination;
