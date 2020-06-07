import Axios from 'axios';
import { ZOMATO_START, ZOMATO_SUCCESS, ZOMATO_DETAIL, ZOMATO_FAILED } from '../Types';

export const FetchData = () => {
  return async dispatch => {
    dispatch({
      type: ZOMATO_START,
    });
    try {
      const res = await Axios.get('https://developers.zomato.com/api/v2.1/search?start=1&count=10&sort=rating', {
        headers: {
          "user-key": "74b25737566cc5cfe2644bcdf3265f8e"
        }
      })
      console.log(res.data.restaurants[0]);
      dispatch({
        type: ZOMATO_SUCCESS,
        payload: res.data.restaurants,
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: ZOMATO_FAILED,
        payload: err,
      });
    }
  };
};

export const GetDetail = restaurant => {
    return {
      type: ZOMATO_DETAIL,
      payload: restaurant,
    };
};