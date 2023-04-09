import React, { Component } from "react";
import Grid from "@mui/system/Unstable_Grid/Grid";
import "./profile.css";
import { getProfile, getAllNFT } from "../../context/Context";

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      allNFTs: [],
    };
  }

  componentDidMount = async () => {
    const profile = await getProfile();
    this.setState({ profile: profile });
    const allNFTs = await getAllNFT();
    this.setState({ allNFTs: allNFTs });
  };

  render() {
    console.log(this.state.allNFTs);
    return (
      <div className="profile-details" style={{ marginTop: "10vh" }}>
        {this.state.profile ? (
          <div className="inner-profile">
            <div className="upper-profile">
              <div className="u1">
                <div className="prof-img profile_image">
                  <img src={this.state.profile.profileImage} alt="" />
                </div>
                <h1>Hi, {this.state.profile.name}</h1>
                <div className="share-prof">Share</div>
              </div>
              <hr class="hr" />
              <div className="u2">
                <h1>Tokens</h1>
                <h2>{this.state.profile.pointsBalance}</h2>
              </div>
              <div className="score">
                <div className="m-token"></div>
                <div className="m-token"></div>
                <div className="m-token"></div>
              </div>
            </div>
            {/* <div className="middle-profile">
              <div className="middle-div">
                <h1>You don't have any supporters yet</h1>
                <h2>Share your page with your audience to get started.</h2>
              </div>
            </div> */}
            <div className="middle-profile">
              <Grid container>
                <Grid item md={4}>
                  <div className="mg">
                    <div class="medal--gold"></div>
                    <h3 class="req">Min. req 10$</h3>
                    <div className="redeem"> Redeem</div>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className="ms">
                    <div class="medal--silver"></div>
                    <h3 class="req">Min. req 10$</h3>
                    <div className="redeem"> Redeem</div>
                  </div>
                </Grid>
                <Grid item md={4}>
                  <div className="mb">
                    <div class="medal--bronze"></div>
                    <h3 class="req">Min. req 10$</h3>
                    <div className="redeem"> Redeem</div>
                  </div>
                </Grid>
              </Grid>
            </div>
            <h1 class="more">More ways to Earn</h1>
            <div className="more-div">
              <div className="m1">
                <div className="in">
                  <h1>Enable membership</h1>
                  <h2>Monthly Membership for your biggest plans.</h2>
                </div>
              </div>
              <div className="m1">
                <div className="in">
                  <h1>Enable membership</h1>
                  <h2>Monthly Membership for your biggest plans.</h2>
                </div>
              </div>
              <div className="m1">
                <div className="in">
                  <h1>Enable membership</h1>
                  <h2>Monthly Membership for your biggest plans.</h2>
                </div>
              </div>
              <div className="m1">
                <div className="in">
                  <h1>Enable membership</h1>
                  <h2>Monthly Membership for your biggest plans.</h2>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ProfileDetails;
