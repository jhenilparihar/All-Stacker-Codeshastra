import React, { Component } from "react";

class NftForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Token: "",
      TokenRequired: "",
      Description: "",
      level: "",
    };
  }

  render() {
    return (
      <div class="prof1">
        <div class="prof-inner">
          <div className="im1"></div>
          <div className="im2"></div>
          <div className="fields">
            
            <input
            class="common-in nft-in"
              type="text"
              placeholder="Name"
              value={this.state.Name}
              onChange={(e) => this.setState({ Name: e.target.value })}
            />
            <input
            class="common-in nft-in"
              type="text"
              value={this.state.Token}
              placeholder="Token"
              onChange={(e) => this.setState({ Token: e.target.value })}
            />
            <input
            class="common-in nft-in"
              type="text"
              value={this.state.TokenRequired}
              placeholder="Token Required"
              onChange={(e) => this.setState({ TokenRequired: e.target.value })}
            />

            <input
            class="common-in nft-in"
              type="text"
              value={this.state.level}
              placeholder="Level"
              onChange={(e) => this.setState({ level: e.target.value })}
            />

            <textarea
              id="des"
              name="des"
              rows="4"
              cols="60"
              class="tarea"
              placeholder="Description"
              onChange={(e) => this.setState({ Description: e.target.value })}
            ></textarea>
             <div className="bn-div">
            <button class="common-sb">Create</button>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default NftForm;
