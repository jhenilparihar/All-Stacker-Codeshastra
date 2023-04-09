import React, { Component } from "react";
import "./Common.css";
import axios from "axios";
import { Buffer } from "buffer";

// const ProfileForm = () => {

//   return (

//   )
// }

// export default ProfileForm

class Offer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EventName: "",
      Description: "",
      StartDate: "",
      EndDate: "",
    };
  }

  render() {
    return (
      <div class="prof1">
        <div class="prof-inner">
          <div className="im1"></div>
          <div className="im2"></div>
          <div className="fields">
            <h2>Add New Events</h2>
            <br />
            <span>Event name</span>
            <input
              type="text"
              placeholder="Event Name"
              value={this.state.EventName}
              onChange={(e) => this.setState({ EventName: e.target.value })}
            />
            <span>Start Date</span>
            <input
              type="date"
              min="2005-01-01"
              max="2023-01-01"
              onChange={(e) => this.setState({ StartDate: e.target.value })}
            ></input>
            <span>End Date Date</span>
            <input
              type="date"
              min="2005-01-01"
              max="2023-01-01"
              onChange={(e) => this.setState({ EndDate: e.target.value })}
            ></input>
            <textarea
              id="des"
              name="des"
              rows="4"
              cols="60"
              placeholder="Description"
              onChange={(e) => this.setState({ Description: e.target.value })}
            ></textarea>

            <div className="bn-div">
              <button className="common-sb" onClick={this.onsubmit}>
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Offer;
