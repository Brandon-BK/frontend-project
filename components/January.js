import React from 'react'
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Paper } from '@mui/material';
import Jancard from './Jancard';

const January = () => {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', mt: 8,marginBottom:'150px',backgroundColor:'grey'}}>
      <Typography style={{zIndex:10}} variant="h3" fontWeight="700" color="black">January was a busy month<br /> </Typography>
      <Jancard />

    </Box>

  )
}

export default January

