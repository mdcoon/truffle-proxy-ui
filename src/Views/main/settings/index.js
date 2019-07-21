import {connect} from 'react-redux'
import V from './Settings'
import {default as Settings} from 'Constants/settings';
import {default as setOps} from 'Redux/settings/operations';

const s2p = state => {
    return {
        proxyAddress: state.settings.params[Settings.PROXY_ADDRESS]
    }
}

const d2p = dispatch => {
    return {
        updateAddress: addr => dispatch(setOps.setProxyAddress(addr))
    }
}

export default connect(s2p, d2p)(V)