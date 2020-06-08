import Axios from 'axios';
import { ZOMATO_START, ZOMATO_SUCCESS, ZOMATO_DETAIL, ZOMATO_FAILED } from '../Types';

export const FetchData = () => {
  return async dispatch => {
    dispatch({
      type: ZOMATO_START,
    });
    try {
      const res = await Axios.get('https://api.thecatapi.com/v1/images/search?api_key=634a4df1-603b-4ad0-938a-0a680e49aaf4&limit=10');
      // console.log(res.data);
      dispatch({
        type: ZOMATO_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err.message);
      dispatch({
        type: ZOMATO_FAILED,
        payload: err,
      });
    }
  };
};

export const GetDetail = cat => {
    console.log(cat);
    return {
      type: ZOMATO_DETAIL,
      payload: cat,
    };
};
