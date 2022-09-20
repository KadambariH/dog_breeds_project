import { GET_DOGBREEDS_LIST, GET_DOGBREEDS_LIST_FAILURE, GET_DOGBREEDS_LIST_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  dogsBreedsList: {},
  error: null,
}

export function allDogBreedsReducer(state = initialState, action) {

  switch (action.type) {
    case GET_DOGBREEDS_LIST: {
      return { ...state, isLoading: true }
    }
    case GET_DOGBREEDS_LIST_SUCCESS: {
      return { ...state, dogsBreedsList: action.payload, isLoading: false }
    }
    case GET_DOGBREEDS_LIST_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }
    default: return state;
  }
}



