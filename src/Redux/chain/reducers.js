import {Types} from './actions'
import {createReducer} from 'reduxsauce'
import { bindActionCreators } from 'redux';

const INIT = {
    loading: false,
    error: null,
    web3: null,
    account: null,
    contract: null,
    network: 0,
    subscriptions: null,
    txns: [],
    abiParser: null
}

const start = (state=INIT) => {
    return {
        ...state, 
        loading: true, 
        error: null
    }
}

const done = (state=INIT, action) => {
    console.log("Action", action);
    return {
        ...state,
        loading: false, 
        web3: action.props.web3,
        contract: action.props.contract,
        account: action.props.account,
        network: action.props.network,
        abiParser: action.props.abiParser
    }
}

const changed = (state=INIT, action) => {
    let account = action.props.account || state.account;
    let web3 = action.props.web3 || state.web3;
    let contract = action.props.contract || state.contract;
    let network = action.props.network || state.network;
    let subscription = action.props.subscription || state.subscription;

    return {
        ...state,
        account,
        web3,
        contract,
        network,
        subscription
    }
}

const fail = (state=INIT, action) => {
    return {
        ...state, 
        loading: false,
        error: action.error
    }
}

const addTxns = (state=INIT, action) => {
    let txns = [
        ...state.txns,
        ...action.txns
    ]
    txns.sort((a,b)=>{
        let c = b.blockNumber - a.blockNumber;
        if(c !== 0) {
            return c;
        }
        return b.transactionIndex - a.transactionIndex
    })
    return {
        ...state,
        txns: txns
    }
}

const HANDLERS = {
    [Types.INIT_START]: start,
    [Types.INIT_SUCCESS]: done, 
    [Types.FAILURE]: fail,
    [Types.CHAIN_CHANGED]: changed,
    [Types.ADD_TXNS]: addTxns
}

export default createReducer(INIT, HANDLERS);