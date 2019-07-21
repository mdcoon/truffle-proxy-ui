import React from "react";
var randomColor = require("randomcolor"); // import the script

const hashcodeCache = {};

let pool = randomColor({
  luminosity: "light",
  // format: "rgba",
  count: 50,
  seed: 'Upgrade'
});


function hashcode(value) {
 let hash = hashcodeCache[value];

 if (! hash) {
   hash = pool.shift();
   hashcodeCache[value] = hash;
 }

return hash;
};

// see https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
class StorageSummary extends React.PureComponent {

  render() {
    const values = this.props.transaction.storage || [];

    const width = Math.floor(100 * (1 / values.length)) + "%";

    const blocks = values.map((value, i) => {

      const backgroundColor = hashcode(value);

      const style = {
        outline: 'solid 2px white',
        textAlign: 'center',
        height: '100%',
        float: 'left',
        width,
        backgroundColor
      };

      return <div key={i} className="block" style={style}>{value}</div>;
    });

    return <div className="storage-summary">{blocks}</div>;
  }
}

export default StorageSummary;
