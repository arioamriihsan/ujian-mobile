import { combineReducers } from 'redux';
import { AuthReducer } from './authReducer';
import { fetchReducer } from './zomatoReducer';
import { detailReducer } from './detailReducer';

export default combineReducers({
  auth: AuthReducer,
  data: fetchReducer,
  detail: detailReducer,
});