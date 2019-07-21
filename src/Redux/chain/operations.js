
import {Types as settingTypes} from 'Redux/settings/actions'
import {registerDeps} from 'Redux/DepMiddleware'
import {Creators} from './actions'
import {default as Settings} from 'Constants/settings'
import Web3 from 'web3';
import abi from './abi'

const init = () => async (dispatch, getState) => { 
    dispatch(Creators.initStart())
    registerDeps([settingTypes.UPDATE], ()=>{
        dispatch(resetContract)
    })
    await dispatch(loadWeb3())
}

const loadWeb3 = () => async (dispatch) => {
    //set up web3
    let ethProvider = window.ethereum;
    if(!ethProvider && window.web3){
      ethProvider =  window.web.currentProvider;
    }
    if(ethProvider) {

        let acts = await ethProvider.enable();
        if(!acts) {
          dispatch(Creators.failure(new Error("User denied access")));
          return;
        }

        //If the user changes account in metamask
        ethProvider.on('accountsChanged', async (accounts) => {
            dispatch(initChain(ethProvider, Creators.chainChanged));
        });

        await dispatch(initChain(ethProvider, Creators.initSuccess))
        await dispatch(initTransactions())
    } else {
        dispatch(Creators.failure(new Error("Missing ethProvider in environment")))
    }
}

const initChain = (ethProvider, dFn) => async (dispatch, getState) => {
    let addr = getState().settings.params[Settings.PROXY_ADDRESS];
    let con = null;
    let web3 = new Web3(ethProvider);
    let accounts = await web3.eth.getAccounts();
    if(addr) {
        con = new web3.eth.Contract(abi, addr, {address: addr})
        con.caller = accounts[0]
    }
    
    let network = await web3.eth.net.getNetworkType();
    //re-establish the chain with new account
    dispatch(dFn({
        web3,
        account: accounts[0],
        contract: con,
        network
    }));
}
   

const initTransactions = () => async (dispatch, getState) => {
    let ch = getState().chain;
    let web3 = ch.web3;
    if(web3) {
        let start = await web3.eth.getBlockNumber();
        let end = start;
        if(start.toString) {
            start = (start.toString() - 0);
        }
        start -= 10;
        if(start < 0) {
            start = 0;
        }
        let allTxns = [];
        for(let i=start;i<=end;++i) {
            let b = await web3.eth.getBlock(i, true);
            for(let j=0;j<b.transactions.length;++j) {
                let t = b.transactions[j];
                
                let r = await web3.eth.getTransactionReceipt(t.hash);

                allTxns.push({
                    ...t,
                    receipt: r,
                    timestamp: b.timestamp
                })
            }
        }
        dispatch(Creators.addTxns(allTxns))
    }
}

//resetContract called when user changes settings
const resetContract = () => async (dispatch, getState) => {
    let addr = getState().settings.params[Settings.PROXY_ADDRESS];
    let con = getState().chain.contract;
    let web3 = getState().chain.web3;
    let account = getState().chain.account;

    if(addr) {
        if(!con) {
            con = new web3.eth.Contract(abi, addr, {address: addr});
            con.caller = account;

            dispatch(Creators.chainChanged({
                contract: con
            }));
        } else if(con.address !== addr) {
            con = new web3.eth.Contract(abi, addr, {address: addr});
            con.caller = account;
            dispatch(Creators.chainChanged({
                contract: con
            }));
        }
    } else {
        dispatch(Creators.chainChanged({
            contract: null
        }))
    }
}

const startSubscriptions = () => async (dispatch,getState) => {
    let chain = getState().chain;
    if(chain.subscription) {
        return;
    }

    let web3 = chain.web3;
    
    if(web3) {
        //clear out any previous subscriptions. This doesn't actually clear MetaMask
      //so not sure if it's really useful.
      await web3.eth.clearSubscriptions();

      //now subscribe to chain for all new blocks and push on demand
      let sub = web3.eth.subscribe('newBlockHeaders');
      let subCallback = async (block) => {
        
        if(block) {
            console.log("incoming block", block.number);
          await dispatch(pullTxns(block))
        }
      };

      sub.on("data", subCallback);
      dispatch(Creators.chainChanged({
          subscription: sub
      }))
    }
}


const pullTxns = block => async (dispatch, getState) => {
    let chain = getState().chain;
    let web3 = chain.web3;
    let txns = block.transactions;
    let allTxns = [];
    if(web3) {
        for(let i=0;i<txns.length;++i) {
            let t = txns[i];
            let r = await web3.eth.getTransactionReceipt(t.hash);
            allTxns.push({
                ...t,
                timestamp: block.timestamp,
                receipt: r
            })
        }
        dispatch(Creators.addTxns(allTxns))
    }
}

const pullEvents = block => async (dispatch, getState) => {
    let chain = getState().chain;
    let web3 = chain.web3;
    let con = chain.contract;
    
    if(web3 && con) {

        let config = {
            //terribly inefficient to keep getting from zero but fine for demo
            fromBlock: 0 // block?block.number:0
        };
    
        try {
        let evtName = "allEvents";
        let start = Date.now();
        let events = await con.getPastEvents(evtName, config);
        
        if(events && events.length > 0) {
            for(let i=0;i<events.length;++i) {
                let evt = events[i];
                let b = await web3.eth.getBlock(evt.blockNumber);
                evt.timestamp = b.timestamp;
            }
            dispatch(Creators.addEvents(events));
        }
        } catch (e) {
            console.log("Failed to pull events", e);
        }
    }
}

export default {
    init,
    startSubscriptions
}