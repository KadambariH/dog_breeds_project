import { GET_IMAGE, GET_IMAGE_FAILURE, GET_IMAGE_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  picture: {},
  error: null,
}

export function displayImageReducer(state = initialState, action) {

  switch (action.type) {
    case GET_IMAGE: {
      return { ...state, isLoading: true }
    }
    case GET_IMAGE_SUCCESS: {
      return { ...state, picture: action.payload, isLoading: false }
    }
    case GET_IMAGE_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }
    default: return state;
  }
}