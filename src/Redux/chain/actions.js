import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    initStart: null,
    initSuccess: ['props'],
    chainChanged: ['props'],
    addEvents: ['events'],
    failure: ['error']
}, {prefix: "chain."});
export {
    Types, Creators
}