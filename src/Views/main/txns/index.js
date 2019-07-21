import {connect} from 'react-redux'
import V from './Historical'

const s2p = state => {
    return {
        txns: state.chain.txns
    }
}

const d2p = dispatch => {
    return {

    }
}

export default connect(s2p, d2p)(V)