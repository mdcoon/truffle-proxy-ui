This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
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

![Interactions](https://github.com/mdcoon/truffle-proxy-ui/blob/master/img/Interactions.png "Interactions")

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
