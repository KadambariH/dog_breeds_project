import { GET_DOGBREED, GET_DOGBREED_FAILURE, GET_DOGBREED_SUCCESS } from '../actions/constants';
import axios from 'axios';

const getDogBreeds = () => {
  return {
    type: GET_DOGBREED
  }
}

export const getDogBreedsSuccess = (data) => {
  return {
    type: GET_DOGBREED_SUCCESS,
    payload: data
  }
}

const getDogBreedsFailure = (error) => {
  return {
    type: GET_DOGBREED_FAILURE,
    payload: error
  }
}

export const getAllDogBreeds = () => {
  return (dispatch) => {
    dispatch(getDogBreeds())
    axios.get('https://dog.ceo/api/breed/hound/images')
      .then(res => dispatch(getDogBreedsSuccess(res.data)))
      .catch(err => dispatch(getDogBreedsFailure(err)))
  }
}
