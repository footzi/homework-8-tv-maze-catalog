import { searchRequest, searchSuccess, searchFailure } from './actions';

const initialState = {
  shows: [],
  isLoading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case searchRequest.toString():
      return {
        ...state,
        shows: [],
        isLoading: true
      };
    case searchSuccess.toString():
      return {
        ...state,
        shows: action.payload,
        isLoading: false
      };
    case searchFailure.toString():
      return {
        ...state,
        shows: [],
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
};
