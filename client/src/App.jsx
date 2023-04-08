import React, { Component } from "react";
import {
  loadWeb3,
  isMetamaskConnected,
  connectToMetamask,
  getContract,
} from "./context/Context";
import { getAccountAddress } from "./context/Context";
import "./App.css";
import Chat from "./components/Chat";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import ConnectToMetamask from "./components/ConnectToMetamask";
import Loading from "./components/Loading";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
          <>
          <BrowserRouter>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Navbar
                    />
                  }
                >
                  <Route index element={<h1>Home</h1>} />
                  <Route
                    path="marketplace"
                    element={
                      <h1>Explore</h1>
                    }
                  /></Route>
              </Routes>
            </BrowserRouter>
          </>
        )}
      </div>
    );
  }
}

export default App;
