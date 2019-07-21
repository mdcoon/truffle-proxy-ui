import {Creators} from './actions';
import {default as chainOps} from 'Redux/chain/operations';
import {default as settingOps} from 'Redux/settings/operations';
import {default as versionOps} from 'Redux/versions/operations'

import {registerDeps} from 'Redux/DepMiddleware';

const initChain = props => {
  return props.dispatch(chainOps.init())
    .then(()=>props);
}

const initSettings = props => {
  return props.dispatch(settingOps.init())
      .then(()=>props)
}

const initVersions = props => {
  return props.dispatch(versionOps.init())
  .then(()=>props)
}

const startSubscriptions = props => {
  return props.dispatch(chainOps.startSubscriptions())
        .then(()=>props);
}

const start = () => (dispatch,getState) => {
  let state = getState();
  if(state.init.initComplete) {
    return;
  }
 
  return dispatch(_doStart());
}

const _doStart = () => (dispatch,getState) => {
  dispatch(Creators.initStart());
  let props = {
    dispatch,
    getState
  }
  return initSettings(props)
        .then(initChain)
        .then(initVersions)
        .then(startSubscriptions)
        .then(()=>{
          dispatch(Creators.initSuccess());
        })
        .catch(e=>{
          dispatch(Creators.failure(e));
        });
}

export default {
  start
}
