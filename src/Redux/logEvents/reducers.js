import {createReducer} from 'reduxsauce'
import {Types} from './actions'

const INIT = {
    loading: false,
    error: null,
    data: []
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
        data: action.data || state.data
    }
}

const fail = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const addEvents = (state=INIT, action) => {
    let evts = [
        ...state.data,
        ...action.data
    ]
    return {
        ...state,
        data: evts
    }
}

const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.INIT_SUCCESS]: done,
    [Types.ADD_EVENTS]: addEvents,
    [Types.FAILURE]: fail
}

export default createReducer(INIT, HANDLERS)