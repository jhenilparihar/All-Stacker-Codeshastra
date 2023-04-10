import { Typography, Grid } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
// import * as mdb from 'mdb-ui-kit';

const Events = () => {
  return (
    <div style={{ marginTop:"100px", height: "100vh" }}>
      <Typography
        sx={{
          fontSize: "45px",
          color: "#563300",
          fontWeight: "bold",
          paddingTop: "4vh",
          fontFamily: "Sacramento",
        }}
      >
        Our Events.
      </Typography>
      <Grid container sx={{ marginRight: "2vw" }}>
        <Grid
          item
          component={motion.div}
          whileHover={{
            scale: 1,
            transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 0.9 }}
          xs={12}
          lg={12}
          sx={{
            margin: "2rem",
            backgroundColor: "#e8d8d8",
            boxShadow: "20px 20px 60px #bebebe  -20px -20px 60px #ffffff",
            padding: "1rem",
            borderRadius: "25px",
            boxShadow:
              "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
              margin: "15px 320px"
          }}
        >
          <Grid container>
            <Grid xs={12} lg={12} sx={{ margin: "1rem", float: "left" }}>
              <Typography
                variant="h4"
                sx={{ color: "#563300", fontFamily: "Sacramento" }}
              >
                Codeshastra
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            {/* <Grid xs={6} lg={6} sx={{ color: "gray" }}>
              <Typography>April 8-9, 2023<br></br></Typography>
            </Grid> */}
            <Grid xs={6} lg={6} sx={{ color: "gray", textAlign: "center" }}>
              <Typography>
                At: SVKM's Dwarkadas J. Sanghvi College of Engineering
              </Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={12} lg={12}>
              <Typography>
                CodeShastra 9.0, the longest-running 24-hour hackathon in all of
                Mumbai!* 🎉 Registrations have begun since 10 March on Devfolio!
                We have Limited Seats. Early registration is advised
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <br />
            <div style={{maxWidth:"900px", margin:"0 auto"}} className="more-div">
              <div className="m1">
                <div className="in">
                  <h1>Get a free coffee</h1>
                  <h2>use your current NFT to get an free coffee at purcase of 200Rs.</h2>
                </div>
              </div>
              <div className="m1">
                <div className="in">
                  <h1>Get free entry at Kshitij</h1>
                  <h2>Show the NFT at entry and get free pass at Mumbai biggest.</h2>
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
      </Grid>
    </div>
  );
};

export default Events;
