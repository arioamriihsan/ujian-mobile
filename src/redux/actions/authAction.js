import AsyncStorage from '@react-native-community/async-storage';
import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAILED,
  AUTH_LOG_OUT,
  AUTH_DP_SUCCESS
} from '../Types';

export const LoginAction = username => {
  // console.log(username);
  return async dispatch => {
    dispatch({
      type: AUTH_START,
    });
    try {
      dispatch({
        type: AUTH_SUCCESS,
        payload: username,
      });
      await AsyncStorage.setItem("username", username);
    } catch(err) {
      console.log('masuk error');
      dispatch({
        type: AUTH_FAILED,
        payload: err,
      });
    }
  };
};

export const KeepLogin = () => {
  return async dispatch => {
    try {
      const storage = await AsyncStorage.getItem("username");
      if (storage) {
        console.log('Storage ada isinya');
        dispatch({
          type: AUTH_SUCCESS,
          payload: storage,
        });
      }
    } catch(err) {
      console.log('masuk error keeplogin');
      dispatch({
        type: AUTH_FAILED,
        payload: err,
      });
    }
  };
};

export const LogoutAction = () => {
  return async dispatch => {
    await AsyncStorage.removeItem("username");
    dispatch({
      type: AUTH_LOG_OUT,
    });
  };
};

// export const ChangeDPAction = (id, dp) => {
//   return async dispatch => {
//     dispatch({
//       type: AUTH_START,
//     });
//     try {
//       dispatch({
//         type: AUTH_DP_SUCCESS,
//         payload: 
//       })
//     } catch(err) {

//     }
//   };
// };