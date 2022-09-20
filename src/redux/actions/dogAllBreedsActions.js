import { GET_DOGBREEDS_LIST, GET_DOGBREEDS_LIST_FAILURE, GET_DOGBREEDS_LIST_SUCCESS } from '../actions/constants';
import axios from 'axios';

const getDogBreeds = () => {
  return {
    type: GET_DOGBREEDS_LIST
  }
}

export const getDogBreedsSuccess = (data) => {
  return {
    type: GET_DOGBREEDS_LIST_SUCCESS,
    payload: data
  }
}

const getDogBreedsFailure = (error) => {
  return {
    type: GET_DOGBREEDS_LIST_FAILURE,
    payload: error
  }
}

export const getAllDogBreedsList = () => {
  return (dispatch) => {
    dispatch(getDogBreeds())
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => dispatch(getDogBreedsSuccess(res.data)))
      .catch(err => dispatch(getDogBreedsFailure(err)))
  }
}


