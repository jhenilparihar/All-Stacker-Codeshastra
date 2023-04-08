import React,{ Component } from 'react'
import "./profile.css";

class ProfileDetails extends Component {
    constructor(props) {
      super(props);
      this.state = {
        Name: "",
        Email: "",
        fileUrl: "",
        imageIsUpload: false,
      };
    }

    render() {
        return (
            <div className="profile-details" style={{marginTop:"10vh"}}>
                <div className="inner-profile">
                    <div className="upper-profile" >
                        <div className="u1">
                            <div className="prof-img">
                                
                            </div>
                            <h1>Hi, Harsh Ghosalkar</h1>
                            <div className="share-prof">Share</div>
                        </div>
                        <hr class="hr" />
                        <div className="u2">
                            <h1>Earnings</h1>
                            <h2>0$</h2>
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
            </div>
        );
      }
    }
    
    export default ProfileDetails;