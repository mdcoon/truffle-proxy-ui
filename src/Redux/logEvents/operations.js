import {Creators} from './actions'
import {Types as chainTypes} from 'Redux/chain/actions'
import {registerDeps} from 'Redux/DepMiddleware'

const init = () => async (dispatch) => {
    registerDeps([chainTypes.ADD_TXNS], ()=>{
        console.log("Detected added txns");
        dispatch(convertEvents())
    });

    dispatch(Creators.initStart())
    await dispatch(convertEvents())
    dispatch(Creators.initSuccess())
}

//this is entirely inefficient
const convertEvents = () => async (dispatch, getState) => {
    console.log("Converting events to versions");
    let ch = getState().chain;
    let web3 = ch.web3;
    //need block #, new address, txn hash 
    for(let i=0;i<ch.txns.length;++i) {
        let t = ch.txns[i];
        await dispatch(pullEvents(t));
    }    
}

const pullEvents = txn => async (dispatch, getState) => {
    
    if(!txn || !txn.receipt || !txn.receipt.logs || txn.receipt.logs.length === 0) {
        return;
    }

    let ch = getState().chain;
    let web3 = ch.web3;
    let con = ch.contract;
    if(web3 && con) {
        let config = {
            //terribly inefficient to keep getting from zero but fine for demo
            fromBlock: txn.blockNumber,
            toBlock: txn.blockNumber
        };
    
        let evtName = "allEvents";
        let events = await con.getPastEvents(evtName, config);
        
        if(events && events.length > 0) {
            for(let i=0;i<events.length;++i) {
                let evt = events[i];
                evt.timestamp = txn.timestamp;
            }
            dispatch(Creators.addEvents(events));
        }
    }
}

export default {
    init
}