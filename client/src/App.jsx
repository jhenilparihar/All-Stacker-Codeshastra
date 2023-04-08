import React, { Component } from "react";
import {
  loadWeb3,
  isMetamaskConnected,
  connectToMetamask,
  getContract,
} from "./context/Context";
import { getAccountAddress } from "./context/Context";
import "./App.css";

import ConnectToMetamask from "./components/ConnectToMetamask";
import Loading from "./components/Loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      metamaskConnected: false,
      accountAddress: null,
    };
  }
  componentWillMount = async () => {
    await loadWeb3();
    await this.loadBlockchainData();
  };

  loadBlockchainData = async () => {
    if (await isMetamaskConnected()) {
      this.setState({ metamaskConnected: true });
      this.setState({ loading: true });
      const account = await getAccountAddress();
      const contract = await getContract();
      const something = await contract.methods.balanceOf(account).call();
      console.log(something);
    } else {
      this.setState({ metamaskConnected: false });
    }
  };

  render() {
    return (
      <div className="App">
        {!this.state.metamaskConnected ? (
          <ConnectToMetamask connectToMetamask={connectToMetamask} />
        ) : this.state.loading ? (
          <Loading />
        ) : (
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        )}
      </div>
    );
  }
}

export default App;
