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
        data: action.data
    }
}

const fail = (state=INIT, action) => {
    return {
        ...state,
        loading: false,
        error: action.error
    }
}

const setData = (state=INIT, action) => {
    return {
        ...state,
        data: action.data
    }
}

const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.INIT_SUCCESS]: done,
    [Types.SET_DATA]: setData,
    [Types.FAILURE]: fail
}

export default createReducer(INIT, HANDLERS)