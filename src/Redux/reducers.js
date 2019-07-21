import { combineReducers } from 'redux';
import {default as init} from './init/reducers'
import {reducer as toastrReducer} from 'react-redux-toastr'
import {default as settings} from './settings/reducers'
import {default as chain} from './chain/reducers'
import {default as versions} from './versions/reducers'

/**
 * Collection of all dashboard state tree reducers
 */
export default combineReducers({
  toastr: toastrReducer,
  init,
  settings,
  chain,
  versions
});
