import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    initStart: null,
    initSuccess: ['data'],
    failure: ['error'],
    addEvents: ['data']
}, {prefix: "events."})
export {
    Types,
    Creators
}