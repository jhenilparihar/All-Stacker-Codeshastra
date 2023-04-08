import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

const Home = () => {
  return (
    <div class="main1">
      <div class="head-container">
        <div class="fading-div">
          <div className="title-div">
            <h1>Awaken Your Senses with Ettarra</h1>
            <h2>A Journey to Rich and Bold Flavor</h2>
          </div>
          <div className="song-div">
            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcgZcN2HVMoe?utm_source=generator&theme=0"
              width="120%"
              height="110%"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="img-div"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
