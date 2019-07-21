import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    initStart: null,
    initSuccess: ['props'],
    chainChanged: ['props'],
    addTxns: ['txns'],
    failure: ['error']
}, {prefix: "chain."});
export {
    Types, Creators
}