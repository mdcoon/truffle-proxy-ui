import {Creators} from './actions'
import {Types as eventTypes} from 'Redux/logEvents/actions'
import {registerDeps} from 'Redux/DepMiddleware'

const init = () => async (dispatch) => {
    registerDeps([eventTypes.ADD_EVENTS], ()=>{
        console.log("Detected added events");
        dispatch(convertEvents(true))
    });

    dispatch(Creators.initStart())
        dispatch(convertEvents())
}

//this is entirely inefficient
const convertEvents = (isUpdate) => (dispatch, getState) => {
    console.log("Converting events to versions");
    let evts = getState().logEvents;

    let versions = [];
    //need block #, new address, txn hash 
    evts.data.forEach(e=>{
        let v = {
            blockNumber: e.blockNumber,
            address: e.returnValues.newAddress,
            txnHash: e.transactionHash,
            timestamp: e.timestamp
        }
        versions.push(v)
    })
    if(!isUpdate) {
        dispatch(Creators.initSuccess(versions))
    } else {
        dispatch(Creators.setData(versions))
    }
    
}

export default {
    init
}