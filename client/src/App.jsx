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
import Leaderboard from "./components/Leaderboard";
import Dashboard from "./components/Dashboard/Dashboard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Landing/Home";
import ProfileForm from "./components/Profile/ProfileForm";
import ProductForm from "./components/Product/ProductForm";

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
        {this.state.loading ? (
          <Loading />
        ) : !this.state.metamaskConnected ? (
          <ConnectToMetamask connectToMetamask={connectToMetamask} />
        ) : this.state.loading ? (
          <Loading />
        ) : (
          <>
            <BrowserRouter>
              <Routes>
                 
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />                  
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route
                    path="/create-profile"
                    element={
                      <ProfileForm />
                    }
                  />
                  <Route
                    path="/add-products"
                    element={
                      <ProductForm />
                    }
                  />
                </Route>
                   <Route
                  path="leader"
                  element={
                    <Leaderboard
                    />
                  }
                ></Route>
                </Route>
              </Routes>
            </BrowserRouter>
          </>
        )}
      </div>
    );
  }
}

export default App;
