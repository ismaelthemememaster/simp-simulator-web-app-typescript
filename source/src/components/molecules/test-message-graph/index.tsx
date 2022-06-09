import React, { ReactElement, useContext } from 'react';
import { Box, Grid, Typography } from '@material-ui/core';
import { ThemeContext } from '../../../App';
import * as d3 from 'd3';

import './styles.css';

const TestComponent = (): ReactElement => {
  const cosa = useContext(ThemeContext);
  const DatosQuemados = [
    { id: 'w1', waifu: 'megumin', value: 8 },
    { id: 'w2', waifu: 'aqua', value: 4 },
    { id: 'w3', waifu: 'darkness', value: 10 },
    { id: 'w4', waifu: 'yunyun', value: 100 },
  ];
  d3.select('#divperron')
    .selectAll('p')
    .data(DatosQuemados)
    .enter()
    .append('p')
    .text((data) => data.waifu);
  d3.select('#divgraficocss').classed(true);
  d3.select('#divgrafico')
    .style('border', '1px solid blue')
    .style('width', '250px')
    .style('height', '200px');

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
      <div id='divperron'> </div>
      <div id='divgrafico'> </div>
      <div id='divgraficocss'> </div>
    </Grid>
  );
};

export default TestComponent;
