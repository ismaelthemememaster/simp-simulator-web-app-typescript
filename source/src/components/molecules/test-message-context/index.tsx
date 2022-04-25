import React, { ReactElement, useContext } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ThemeContext } from '../../../App';

const TestComponent = (): ReactElement => {
  const cosa = useContext(ThemeContext);
  return (
    <Grid>
      <Typography component='span'>
        "La guerrilla esta en mi mente"
        <Box
          component='p'
          fontWeight='fontWeightBold'
          display='inline'
          color={cosa ? '#FFF' : '#000'}
        >
          "la guerrilla es real"
        </Box>
        "me tienen secuestrado en la fantasia"
      </Typography>
    </Grid>
  );
};

export default TestComponent;
