import { ZOMATO_DETAIL } from '../Types';

const initial_state = {
  name: '',
  featured_image: '',
  user_rating: {
      aggregate_rating: ''
  },
  location: {
      address: ''
  },
  cuisines: '',
  timings: '',
  currency: '',
  average_cost_for_two: ''
}

export const detailReducer = (state = initial_state, action) => {
  switch (action.type) {
      case ZOMATO_DETAIL : 
        return action.payload;
      default: 
        return state
  };
};