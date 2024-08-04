import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Navigation = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6' component='div'>
          Scroll to hide App bar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
