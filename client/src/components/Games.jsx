import { Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import "../styles/games.css";
import { useState } from "react";
export default function Games() {
  const [token,setToken]=useState(0);
  const gamble=(e)=>{
      setToken(e.value)
      console.log(e.value)
  }
  return (
    <>
      <Grid container>
        <Grid item md={12}></Grid>
        <br></br>
        <Grid item md={4}></Grid>
        <Grid item md={6}>
          <div class="book">
            <p>
              <div class="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter how much you want to gamble"
                  name="text"
                  class="input"
                  onChange={gamble}
                  value={token}
                />
              </div>
              <br></br>
              <div style={{margin:"50px"}}>
              <button>
                {/* <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="css-i6dzq1"
                > */}
                  {/* <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon> */}
                {/* </svg>{" "} */}
                Luck
              </button>
              </div>
              <div>
                <Typography variant="h4"></Typography>
              </div>
            </p>
            <div class="cover">
              <p>
                <Typography variant="h3">Try your Luck</Typography>
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
      <br></br>
      <hr></hr>
    </>
  );
}
