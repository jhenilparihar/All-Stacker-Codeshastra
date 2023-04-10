import React, { Component } from "react";
import "./profile.css";
import Grid from "@mui/system/Unstable_Grid/Grid";

import { getProfile, getAllNFT, buyNFT, getProduct } from "../../context/Context";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: null,
      allNFTs: [],
      but: false,
      count: 0,
    };
  }

  componentDidMount = async () => {
    const profile = await getProfile();
    const product = await getProduct();
    let total = 0;
    // console.log(product)
    product.map((item, index)=>{
      total += parseInt(item.count);
      console.log(total, item.count)
    })

    this.setState({count: total})

    this.setState({ profile: profile });
    const allNFTs = await getAllNFT();
    this.setState({ allNFTs: allNFTs });
  };
  hey = (c) => {
    console.log(c.nftId);
    console.log(this.state.profile.pointsBalance);
    if (
      parseInt(this.state.profile.pointsBalance) < parseInt(c.pointsBalance)
    ) {
      console.log(
        parseInt(this.state.profile.pointsBalance) < parseInt(c.pointsBalance)
      );
      alert("can't buy");
      //this.setState({ but:true});
    } else {
      console.log("bought");
      this.props.setLoading();
      buyNFT(c.nftId);
    }
  };

  render() {
    return (
      <div className="profile-details" style={{ marginTop: "12vh" }}>
        {this.state.profile ? (
          <div className="inner-profile">
            <div className="upper-profile">
              <div className="u1">
                <div className="prof-img profile_image">
                  <img src={this.state.profile.profileImage} alt="" />
                </div>
                <h1>Hi, {this.state.profile.name}</h1>

                <Link to="/plan">
                  <div className="share-prof">Buy Plan</div>
                </Link>
              </div>
              <hr class="hr" />
              <div className="u2">
                <Grid container>
                  <Grid item md={4}>
                    <h1>Tokens</h1>
                    <h2>{this.state.profile.pointsBalance}</h2>
                  </Grid>
                  <Grid item md={4}>
                    <h1>Cups</h1>
                    <h2>&nbsp;{this.state.profile.cups}</h2>
                    
                  </Grid>
                  <Grid item md={4}>
                    <h1>No. of purchases</h1>
                    <h2>&nbsp;{localStorage.getItem("np")}</h2>
                  </Grid>
                </Grid>
              </div>
            </div>
            <div className="middle-profile">
              <Grid container>
                {this.state.allNFTs ? (
                  <>
                    <Grid item>
                      <Grid container>
                        {this.state.allNFTs.map((e, i) => {
                          return (
                            <Grid className="ajzeeb" item={4}>
                              <Typography variant="h4">
                                Level:{this.state.allNFTs[i].level}
                              </Typography>
                              <Typography variant="h5">
                                {this.state.allNFTs[i].name}
                              </Typography>
                              <Typography variant="body2">
                                {this.state.allNFTs[i].description}
                              </Typography>
                              <p>
                                Required:{this.state.allNFTs[i].tokenRequired}
                              </p>
                              {/* {e.} */}
                              <Button
                                disabled={
                                  parseInt(this.state.profile.pointsBalance) <
                                  parseInt(this.state.allNFTs[i].tokenRequired)
                                }
                                onClick={() => {
                                  this.hey(this.state.allNFTs[i]);
                                }}
                              >
                                Buy
                              </Button>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </Grid>
                  </>
                ) : (
                  <>
                    <div>NULL</div>
                  </>
                )}
              </Grid>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default ProfileDetails;
