import React from 'react';
import { Typography,Container  } from '@mui/material';
import DisplayImage from '../DisplayImage/DisplayImage';

const Dashboard = () => {
  return (
    <Container>
      <Typography variant='h6'>Dogs Image</Typography>
      <DisplayImage />
    </Container>
  )
}

export default Dashboard