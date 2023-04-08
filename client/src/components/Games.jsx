import { Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import "../styles/games.css";
import { useState } from "react";
export default function Games() {
 
  let add=0;
  const [a,setA]=useState(0)
  const [token,setToken]=useState(0);
  const gamble=(e)=>{
    if (e.target && e.target.value !== undefined) {
      console.log(e.target.value);
      setToken(e.target.value);
      console.log(e.target.value);
    }
    
  }
  const printval=()=>{
    add=0
    let x=Math.random()
    console.log((x));
    if(x>0.3 && x<0.5)
    {
      add=add+(token/5)
    }
    else if(x>0.5 && x<0.9)
    {
      add=add+(token/3)
    }
    else if(x>0.9)
    {
      add=add+(token/2)
    }
    else if(x<0.3)
    {
      add=add-(token/2)
    }
    add=Math.floor(add);
    console.log(add);
    setA(add);
    
  }
  return (
    <>
    <br></br>
    <br></br><br></br>
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
                  style={{width:"110%",marginRight:"20px"}}
                  onChange={gamble}
                />
              </div>
              <br></br>
              <div style={{margin:"50px"}}>
              <button
              onClick={printval}
              >
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
              <br></br>
              <hr></hr>
              <Typography variant="h5">You won {a} tokens</Typography>
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
