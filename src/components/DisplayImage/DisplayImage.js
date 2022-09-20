import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CircularProgress, Box, Container, Alert, Grid } from '@mui/material';
import { getRandomImage } from '../../redux/actions/displayImageActions';

function Spinner() {
    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    );
}

const DisplayImage = () => {

    const dispatch = useDispatch();
    const { isLoading, picture, error } = useSelector(state => state.dogImage);

    // useEffect(() => {
    //     dispatch(getRandomImage())
    // }, [])
console.log(picture);

    const handleClick = () => {
        return dispatch(getRandomImage());
    }
    return (
        <Container>
            {isLoading && <Spinner />}
            <button onClick={() => { handleClick() }}>Click </button>
            <Box sx={{ display: 'flex' }}>
                <img src={picture.message}  />
            </Box>

        </Container>

    )
}

export default DisplayImage
