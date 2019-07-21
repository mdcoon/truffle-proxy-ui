import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    initStart: null,
    initSuccess: ['data'],
    setData: ['data'],
    failure: ['error']
}, {prefix: "versions."})
export {
    Types,
    Creators
}