import React, { Component } from "react";
import './profile.css'
import { getProfile } from "../../context/Context";
import Grid from "@mui/system/Unstable_Grid/Grid";
import "./profile.css";
import { getProfile, getAllNFT } from "../../context/Context";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";


class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      profile: null,
      allNFTs: [],
      but:false,
    };
  }

  componentDidMount = async () => {
    const profile = await getProfile();
    this.setState({ profile: profile });
    const allNFTs = await getAllNFT();
    this.setState({ allNFTs: allNFTs });
  };
  hey=(c)=>{
    console.log((c));
    console.log((this.state.profile.pointsBalance));
    if(parseInt(this.state.profile.pointsBalance)<parseInt(c))
    {
      console.log(parseInt(this.state.profile.pointsBalance)<parseInt(c))
      alert("can't buy")
      //this.setState({but:true});
    }
    else{
      console.log("bought");
    }
  }

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
                <Grid container>
                  <Grid item md={2}>
                <h1>Tokens</h1>
                <h2>{this.state.profile.pointsBalance}</h2>
                </Grid>
                <Grid item md={2}>
                <h1>Tokens</h1>
                <h2>{this.state.profile.pointsBalance}</h2>
                </Grid>
                <Grid item md={2}>
                <h1>Tokens</h1>
                <h2>{this.state.profile.pointsBalance}</h2>
                </Grid>
                </Grid>
              </div>

            </div>
            <div className="middle-profile">
              <Grid container>

                {this.state.allNFTs?<>
                
                
                  <Grid item>
                  <Grid container >
                  {this.state.allNFTs.map((e,i)=>{
                       
                    return(
                      <Grid item sx={{margin:"0 5 vw", width:"133 px"}}>
                        <Typography variant="h4">Level:{this.state.allNFTs[i].level}</Typography>
                        <Typography variant="h5">{this.state.allNFTs[i].name}</Typography>
                        <Typography variant="body2">{this.state.allNFTs[i].description}</Typography>
                        <p>Required:{this.state.allNFTs[i].tokenRequired}</p>
                        <Button disabled={(parseInt(this.state.profile.pointsBalance)<parseInt(this.state.allNFTs[i].tokenRequired))} onClick={()=>{this.hey(this.state.allNFTs[i].tokenRequired)}}>Buy</Button>
                      </Grid>

                    );
                    

                  })}
                  </Grid>


                </Grid>
                
                </>:<><div>NULL</div></>}

               
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
