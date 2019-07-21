import _ from 'lodash';


/**
 * Parses ABI from transactions and makes them available for
 * processing flows
 */
export default class ABIParser {
  constructor(props) {
    this.abi = props.abi;

    [
      'init',
      'process'
    ].forEach(fn=>this[fn]=this[fn].bind(this));
  }

  init() {
    return async (dispatch,getState) => {
     
      this.eventSigs = {};
      this.fnSigs = {};
      //for all ABIs installed
      this.abi.forEach(a=>{

        //look for event and fn definitions so we can use to decode
        if(a.type === 'event') {
          if(!a.signature) {
            throw new Error("Missing siganture on ABI");
          }
          this.eventSigs[a.signature] = a;
        } else if(a.type === 'function') {
          if(!a.signature) {
            throw new Error("Missing siganture on ABI");
          }
          console.log("Adding FN sig", a.signature, "as function", a.name);
          this.fnSigs[a.signature] = a;
        }
      });
    }
  }

  //main proc called during processing of new blocks
  process(t) {
    
      //if there is input data for the transaction
      if(t.input && t.input.length > 2) {

        //get the fn signature (4-bytes plus 0x)
        let sig = t.input.substring(0, 10);

        //lookup the fn definition by this sig
        let def = this.fnSigs[sig];
        if(def) {
          //if we found a matching fn, tag the transaction with the
          //fn's name. This will be used downstream as a context for
          //all attached log events
          t.fn = def.name;
        } else {
          console.log("No def with sig", sig);
        }
      
    }
    
  }

  
}
