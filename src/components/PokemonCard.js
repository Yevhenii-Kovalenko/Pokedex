import React, { useState } from 'react';

import { Card, CardContent, Typography, Chip, Box, Button, Modal, Fade } from '@mui/material';

function PokemonCard({ name, avatarUrl, types, stats, height, weight }) {
  const [open, setOpen] = useState(false);

  const upperCaseName = name.charAt(0).toUpperCase() + name.slice(1);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardStyles = {
    backgroundColor: '#4fc3f7',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    },
    maxWidth: '300',
    margin: '20px 40px 10px 30px',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '10px',
  };
  const cardContentStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    gap: '10px',
  };
  const modalContainerStyles = {
    backgroundColor: 'gray',
    border: 'none',
    margin: '10px',
    borderRadius: '10px',
    height: '90%',
    maxHeight: '90vh',
    width: '80vw',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };
  return (
    <Card sx={cardStyles}>
      <CardContent sx={cardContentStyles}>
        <img src={avatarUrl} alt={name} />
        <Typography variant="h6">{upperCaseName}</Typography>
        <Box sx={{ display: 'flex', gap: '5px' }}>
          {types.map((type, index) => (
            <Chip key={index} label={type} color="warning" />
          ))}
        </Box>
        <Button variant="outlined" onClick={handleOpen}>
          Show more
        </Button>
      </CardContent>
      <Modal
        closeAfterTransition
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        open={open}
        onClose={handleClose}
      >
        <Fade in={open}>
          <Box component="div" sx={modalContainerStyles}>
            <Typography variant="h2">{upperCaseName}</Typography>
            <img style={{ height: 150, width: 150 }} src={avatarUrl} alt={name} />
            <Box component="div" sx={{ mb: '40px' }}>
              <Typography variant="h5">Type: {types.join(', ')}</Typography>
              <Typography variant="h5">Height: {height} m</Typography>
              <Typography variant="h5">Weight: {weight} kg</Typography>
              {stats.map((stat, index) => (
                <Typography key={index} variant="h5">
                  {stat.stat.name}: {stat.base_stat}
                </Typography>
              ))}
            </Box>
            <Button onClick={handleClose} color="primary" variant="contained">
              Close
            </Button>
          </Box>
        </Fade>
      </Modal>
    </Card>
  );
}

export default PokemonCard;
