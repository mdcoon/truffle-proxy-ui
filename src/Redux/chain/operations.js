
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
          await dispatch(pullEvents(block))
        }
      };

      sub.on("data", subCallback);
      dispatch(Creators.chainChanged({
          subscription: sub
      }))

      dispatch(pullEvents());
    }
}

const pullEvents = block => async (dispatch, getState) => {
    let chain = getState().chain;
    let web3 = chain.web3;
    let con = chain.contract;
    
    if(web3 && con) {

        let config = {
            fromBlock: 0 // block?block.number:0
        };
    
        try {
        let evtName = "allEvents";
        let start = Date.now();
        console.log("Getting all events from block", config.fromBlock);
        let events = await con.getPastEvents(evtName, config);
        if(block) {
            console.log("Full block", await web3.eth.getBlock(block.number, true))
        }
        console.log("Events", events);
        if(events && events.length > 0) {
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