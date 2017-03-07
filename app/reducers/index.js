import { combineReducers } from 'redux';
import * as loginCompleteReducer from "./authentication";

export default combineReducers(Object.assign(
  loginCompleteReducer
));
