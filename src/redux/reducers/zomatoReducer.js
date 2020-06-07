import {
  ZOMATO_START,
  ZOMATO_SUCCESS,
  ZOMATO_DETAIL,
  ZOMATO_FAILED,
} from '../Types';

const INITIAL_STATE = {
  restaurants: [],
  error: '',
  loading: false,
};

export const fetchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ZOMATO_START :
      return {
        ...state,
        loading: true,
      };
    case ZOMATO_SUCCESS :
      return {
        ...state,
        restaurants: action.payload,
        loading: false,
      };
    case ZOMATO_FAILED :
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default : 
      return state;
  };
};