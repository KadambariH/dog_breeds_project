import { GET_DOGBREED, GET_DOGBREED_FAILURE, GET_DOGBREED_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  dogBreeds: {},
  error: null,
}

export function ByBreedReducer(state = initialState, action) {

  switch (action.type) {
    case GET_DOGBREED: {
      return { ...state, isLoading: true }
    }
    case GET_DOGBREED_SUCCESS: {
      return { ...state, dogBreeds: action.payload, isLoading: false }
    }
    case GET_DOGBREED_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }
    default: return state;
  }
}


