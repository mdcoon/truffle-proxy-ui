import {connect} from 'react-redux'
import Interactions from './Interactions'
import {default as ops} from 'Redux/chain/operations';

const s2p = state => {
    return {

    }
}

const d2p = dispatch => {
    return {
      contractVisit: () => dispatch(ops.contractVisit()),
      contractIncrement: () => dispatch(ops.contractIncrement())
    }
}

export default connect(s2p, d2p)(Interactions)
