import {Creators} from './actions'
import {default as Settings} from 'Constants/settings';

const ADDR = "0xaAdE6084F8148ef50c2b1961A2fC0558C697dCE0";

const init = () => async (dispatch, getState) => {
    dispatch(Creators.initStart())
    let addr = localStorage.getItem(Settings.PROXY_ADDRESS) || ADDR;
    dispatch(Creators.initSuccess({
        [Settings.PROXY_ADDRESS]: addr
    }));
}

const setProxyAddress = addr => async (dispatch, getState) => {
    localStorage.putItem(Settings.PROXY_ADDRESS, addr);
    dispatch(Creators.update(Settings.PROXY_ADDRESS, addr))
}

export default {
    init,
    setProxyAddress
}