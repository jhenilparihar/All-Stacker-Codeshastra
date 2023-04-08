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
import Offer from "./components/Common/Offer";
import ProfileDetails from "./components/Profile/ProfileDetails";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      metamaskConnected: false,
      accountAddress: null,
      profileSet: true,
    };
  }
  componentWillMount = async () => {
    await loadWeb3();
    await this.loadBlockchainData();
  };

  loadBlockchainData = async () => {
    if (await isMetamaskConnected()) {
      this.setState({ metamaskConnected: true, loading: true });
      const account = await getAccountAddress();
      this.setState({ accountAddress: account });
      const contract = await getContract();
      const isProfileSet = await contract.methods.isProfileSet(account).call();
      console.log(isProfileSet);
      if (!isProfileSet) {
        this.setState({ profileSet: false });
      }
    } else {
      this.setState({ metamaskConnected: false });
    }
    this.setState({ loading: false });
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
        // ) : !this.state.profileSet ? (
        //   <ProfileForm setLoading={()=>{this.setState({loading: true})}} />
        ) : (
          <>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navbar />}>
                  <Route index element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/add-products" element={<ProductForm />} />
                  <Route path="/leader" element={<Leaderboard />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route
                    path="/offer-form"
                    element={
                      <Offer />
                    }
                  />
                   <Route
                    path="/ProfileDetails"
                    element={
                      <ProfileDetails />
                    }
                  />
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
