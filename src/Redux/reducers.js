import { combineReducers } from 'redux';
import {default as init} from './init/reducers'
import {reducer as toastrReducer} from 'react-redux-toastr'

/**
 * Collection of all dashboard state tree reducers
 */
export default combineReducers({
  toastr: toastrReducer,
  init
});
