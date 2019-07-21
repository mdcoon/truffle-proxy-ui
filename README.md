# Welcome to truffle-proxy-ui

Originally developed during **ConsenSys Grants Hackathon - New York - July 2019**

> See **truffle-proxy** [here](https://github.com/mdcoon/truffle-proxy)

> Extend Truffle CLI with [EIP-1820](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1820.md) proxy support. Proxy support provides a simple upgrade path for contracts to maintain storage, while making changes to the underlying contract implementation.

## Install

```sh
npm install --save-dev truffle-plugin-proxy
```

## Usage

```sh

// Generate proxy support for a Truffle project
truffle run create-proxy

// Run all existing tests
truffle run test-proxy

// Summarize proxy & contract deployment information
truffle run summarize-proxy

// Deploy a new underlying contract and update proxy to use new contract address
truffle run upgrade

```

## Images

![Versions](https://github.com/mdcoon/truffle-proxy-ui/blob/master/img/Versions.png "Versions")

![Versions](https://github.com/mdcoon/truffle-proxy-ui/blob/master/img/VersionsModal.png "Versions Modal")

See Versions of Proxies - and get an **explanation**

![Historical Data](https://github.com/mdcoon/truffle-proxy-ui/blob/master/img/HistoricalData.png "Historical Data")

Compare the output storage size of your proxy contracts - and check out **how that reference storage location stays the same**

![Interactions](https://github.com/mdcoon/truffle-proxy-ui/img/blob/master/Interactions.png "Interactions")

Interact with everyone's favorite - **Metamask**

## Authors

👤 **Harvinder Ghotra**

- Github: [@hghotra](https://github.com/hghotra)

👤 **Mitchell Opatowsky**

- Github: [@official-mitchell](https://github.com/official-mitchell)

👤 **Mike Coon**

- Github: [@mdcoon](https://github.com/mdcoon)

👤 **Mike Powers**

- Github: [@mjpowersjr](https://github.com/mjpowersjr)

👤 **Will Shahda**

- Github: [@opz](https://github.com/opz)

## Show your support

Give a ⭐️ if this project helped you!
