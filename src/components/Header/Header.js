import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{ height: '50px', backgroundColor: 'cyan', display: 'flex', justifyContent: 'space-between' }}>
      <Link to={'/'}><Button variant="contained">Dashboard</Button></Link >
      <Link to={'/list'}><Button variant="contained">List</Button> </Link>
      <Link to={'/dogbreeds'}><Button variant="contained">DogsByBreeds</Button> </Link>
      <Link to={'/listAllBreeds'}><Button variant="contained">List All Breeds</Button> </Link>


    </div>
  )
}

export default Header