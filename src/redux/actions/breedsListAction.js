import { GET_LIST, GET_LIST_FAILURE, GET_LIST_SUCCESS } from '../actions/constants';
import axios from 'axios';

const getList = () => {
  return {
    type: GET_LIST
  }
}

export const getListSuccess = (data) => {
  return {
    type: GET_LIST_SUCCESS,
    payload: data
  }
}

const getListFailure = (error) => {
  return {
    type: GET_LIST_FAILURE,
    payload: error
  }
}

export const getListDetails = (breedName) => {
  return (dispatch) => {
    dispatch(getList())
    axios.get(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then(res => dispatch(getListSuccess(res.data)))
      .catch(err => dispatch(getListFailure(err)))
  }
}

