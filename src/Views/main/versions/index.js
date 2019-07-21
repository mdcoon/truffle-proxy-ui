import {connect} from 'react-redux'
import V from './VersionsTable'

const s2p = state => {
    return {
        versions: state.versions.data
    }
}

const d2p = dispatch => {
    return {

    }
}

export default connect(s2p, d2p)(V)