import React, { useMemo } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

interface Props {
  darkTheme: boolean;
}

const TestComponent: React.FC<Props> = ({ darkTheme }) => {
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
};

export default TestComponent;
