import React, { useMemo } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';

interface Props {
  darkTheme: boolean;
}

function TestComponent({ darkTheme }: Props) {
  function getText(): string {
    if (darkTheme) {
      return 'tema oscuro';
    } else {
      return 'tema claro';
    }
  }

  return useMemo(
    () => (
      <Grid>
        <Typography component='span'>
          {getText()}
          <Box
            component='p'
            fontWeight='fontWeightBold'
            display='inline'
            color={darkTheme ? '#FFF' : '#000'}
          >
            la guerrilla es real
          </Box>
          , me tienen secuestrado en la fantasia
        </Typography>
      </Grid>
    ),
    [darkTheme]
  );
}

export default TestComponent;
