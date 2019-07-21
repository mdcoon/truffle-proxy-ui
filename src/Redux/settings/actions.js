import {createActions} from 'reduxsauce'

const {Types, Creators} = createActions({
    initStart: null,
    initSuccess: ['settings'],
    update: ['key', 'value'],
    failure:['error']
}, {prefix: "settings."});
export {
    Types,
    Creators
}