import { GET_LIST, GET_LIST_FAILURE, GET_LIST_SUCCESS } from '../actions/constants';

const initialState = {
  isLoading: false,
  list: {},
  error: null,
}

export function breedsListReducer(state = initialState, action) {

  switch (action.type) {
    case GET_LIST: {
      return { ...state, isLoading: true }
    }
    case GET_LIST_SUCCESS: {
      return { ...state, list: action.payload, isLoading: false }
    }
    case GET_LIST_FAILURE: {
      return { ...state, error: action.payload, isLoading: false }
    }
    default: return state;
  }
}