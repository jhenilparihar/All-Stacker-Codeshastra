import {
  Card,
  Divider,
  Grid,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import emailjs from "emailjs-com";

const useStyles = makeStyles((theme) => ({
  flexItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  card1: {
    padding: "6%",
    marginTop: "3px",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
  [theme.breakpoints.up("md")]: {
    card1: {
      height: "28vh",
      width: "27vw",
    },
  },
  divider: {
    width: "100%",
  },
  header: {
    alignItems: "left",
    display: "flex",
    justifyContent: "flex-start",
  },
  text: {
    fontSize: "14px!important",
  },
}));

const Mint = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const sendEmail = async (name, email, hash, department) => {
    console.log(department);

    emailjs
      .send("service_ysr730a", "template_v0a1xxc", {
        to_name: name,
        message: department,
        reply_to: email,
      }, "e9JuUEfd3BAc8hdQi")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          window.location.reload();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <Card className={classes.card1}>
      <Grid container item className={classes.flexItem} rowSpacing="20">
        <Grid item>
          <Typography sx={{ textAlign: "left", ml: 0, fontSize: "1.3em" }}>
            Push Notifications
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.divider} />
        </Grid>
        <TextField
          placeholder="Type here.."
          onChange={(e) => setText(e.target.value)}
        ></TextField>
        <Grid item xs={12}>
          <Typography className={classes.text}>
            <Button
              sx={{
                borderRadius: "6px",
                border: " solid 3px white",
                boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                backgroundColor: "#AB877D",
                color: "white",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#E2C2AA",
                },
                width: "110px",
                justifyContent: "center",
              }}
              onClick={() =>
                sendEmail(
                  "Jhenil",
                  "jhenilparihar121@gmail.com",
                  "http://localhost:3000/certificate/",
                   text 
                )
              }
            >
              Push
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Mint;