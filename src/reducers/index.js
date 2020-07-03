import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import poll from './poll';

export default combineReducers({
  alert,
  auth,
  poll,
});
