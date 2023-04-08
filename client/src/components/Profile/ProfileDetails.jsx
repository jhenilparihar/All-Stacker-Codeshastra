import React, { Component } from "react";
import "./profile.css";
import { getProfile } from "../../context/Context";

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
    };
  }

  componentDidMount = async () => {
    const profile = await getProfile();
    this.setState({ profile: profile });
  };

  render() {
    console.log(this.state.profile);
    return (
      <div className="profile-details" style={{ marginTop: "10vh" }}>
        {this.state.profile ? (
          <div className="inner-profile">
            <div className="upper-profile">
              <div className="u1">
                <div className="prof-img">
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
            </div>
            <div className="middle-profile">
              <div className="middle-div">
                <h1>You don't have any supporters yet</h1>
                <h2>Share your page with your audience to get started.</h2>
              </div>
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
