import {Types} from './actions'
import {createReducer} from 'reduxsauce'

const INIT = {
    loading: false,
    error: null,
    params: {}
}

const start = (state=INIT) => {
    return {
        ...state,
        loading: true,
        error: null
    }
}

const done = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        params: {
            ...action.settings
        }
    }
}

const update = (state=INIT, action) => {
    return {
        ...state,
        params: {
            ...state.params,
            [action.key]: action.value
        }
    }
}

const fail = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.INIT_SUCCESS]: done,
    [Types.UPDATE]: update,
    [Types.FAILURE]: fail
}

export default createReducer(INIT, HANDLERS);