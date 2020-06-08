import { ZOMATO_DETAIL } from '../Types';

const initial_state = {
  url: '',
}

export const detailReducer = (state = initial_state, action) => {
  switch (action.type) {
      case ZOMATO_DETAIL : 
        return action.payload;
      default: 
        return state
  };
};