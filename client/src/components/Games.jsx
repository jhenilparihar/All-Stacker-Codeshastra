import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import "../styles/games.css";
import { useState, useEffect } from "react";
import { updatePoints } from "../context/Context";
import Quiz from "./Quiz/Quiz";
import Spinner from "./Spinner/Spinner";

export default function Games({setLoading}) {
  let add = 0;
  const [a, setA] = useState(0);
  const [token, setToken] = useState(0);
  const [t, setT] = useState(false);
  const gamble = (e) => {
    if (e.target && e.target.value !== undefined) {
      console.log(e.target.value);
      setToken(e.target.value);
      console.log(e.target.value);
    }
  };
  useEffect(() => {
    let b = localStorage.getItem("try");
    let boolOutput = b == "true" ? true : false;
    setT(boolOutput);
    console.log(boolOutput);
  }, []);

  const printval = () => {
    add = 0;
    let x = Math.random();
    console.log(x);
    if (x > 0.3 && x < 0.5) {
      add = add + token / 5;
    } else if (x > 0.5 && x < 0.9) {
      add = add + token / 3;
    } else if (x > 0.9) {
      add = add + token / 2;
    } else if (x < 0.3) {
      add = add - token / 2;
    }
    add = Math.floor(add);
    console.log(add);
    setA(add);
  };
  const accept = async () => {
    setT(true);
    setLoading();
    localStorage.setItem("try", "true");
    await updatePoints(a);
  };
  const tryagain = () => {
    setT(false);
    localStorage.setItem("try", "false");
  };
  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <Grid container spacing={3} sx={{marginLeft:"5vw"}}>
        <br></br>
        <Grid item md={12}></Grid>
        <br></br>
        <Grid item md={1}>
         
        </Grid>
        <Grid item lg={5} >
          <div class="book">
            <p>
              <div class="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter how much you want to gamble"
                  name="text"
                  class="input"
                  style={{ width: "110%", marginRight: "20px" }}
                  onChange={gamble}
                />
              </div>
              <br></br>
              <div style={{ margin: "50px" }}>
                <Button disabled={t} onClick={printval}>
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
                </Button>
                <br></br>
                <hr></hr>
                <Typography variant="h5">You won {a} tokens</Typography>
                <br></br>
                <hr></hr>
                <Button onClick={tryagain}>Try again</Button>
                <Button onClick={accept}>Accept</Button>
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
        {/* <Grid item md={2}>
         
        </Grid> */}
        <Grid item lg={5}>
          <Spinner/>
        </Grid>
        {/* <Grid item md={2}>
         
        </Grid> */}
        <hr></hr>
        <Grid item lg={12}>
          <Quiz></Quiz>
        </Grid>
      </Grid>
      <br></br>
      <hr></hr>
    </>
  );
}
