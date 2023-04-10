import React, { Component } from "react";
import "./profile.css";
import axios from "axios";
import { Buffer } from "buffer";
import { addProfile } from "../../context/Context";
import { deduceCups, addCups } from "../../context/Context";

class Plans extends Component {
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
      <div class="prof1">
        <div class="prof-inner">
          <div className="im1"></div>
          <div className="im2"></div>
          <div className="plans">
            <div className="plan1 plan">
              <h1>Premium</h1>
              <p>
                Cat snacks paw at your fat belly for throwup on your pillow or
                ignore the squirrels, you'll never catch them anyway. Buy 30
                cups for 10$
              </p>
              <div
                className="sel"
                onClick={() => {
                  this.props.setLoading()
                  addCups(3);
                }}
              >
                Select Plan
              </div>
            </div>
            <div className="plan2 plan">
              <h1>Unlimited</h1>
              <p>
                Cat snacks paw at your fat belly for throwup on your pillow or
                ignore the squirrels, you'll never catch them anyway. Buy 60
                cups for 20$
              </p>
              <div className="sel">Select Plan</div>
            </div>
            {/* <div className="plan3 plan"></div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Plans;
