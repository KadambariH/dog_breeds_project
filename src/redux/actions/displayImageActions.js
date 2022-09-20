import { GET_IMAGE, GET_IMAGE_FAILURE, GET_IMAGE_SUCCESS } from '../actions/constants';
import axios from 'axios';

const getImage = () => {
  return {
    type: GET_IMAGE
  }
}

export const getImageSuccess = (data) => {
  return {
    type: GET_IMAGE_SUCCESS,
    payload: data
  }
}

const getImageFailure = (error) => {
  return {
    type: GET_IMAGE_FAILURE,
    payload: error
  }
}

export const getRandomImage = () => {
  return (dispatch) => {
    dispatch(getImage())
    axios.get('https://dog.ceo/api/breeds/image/random')
      .then(res => dispatch(getImageSuccess(res.data)))
      .catch(err => dispatch(getImageFailure(err)))
  }
}