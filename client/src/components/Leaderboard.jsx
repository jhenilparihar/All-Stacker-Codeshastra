import Navbar from "./Navbar";
import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import im from "../images/image.jpg";
import Chip from "@mui/material/Chip";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

export default function Leaderboard() {
  let a = 10;
  return (
    <>
      <Grid container spacing={0}>
        <Grid item md={4}>
          <Grid
            container
            sx={{
              backgroundColor: "#FFFFFF",
              height: "40vh",
              width: "20vw",
              borderRadius: "25px",
              marginLeft: "5vw",
              marginTop: "5vh",
              boxShadow:
                "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
          >
            <Grid
              item
              md={12}
              sx={{ borderRadius: "10px", height: "8px" }}
              alignContent="center"
            >
              <img
                src={im}
                alt="hii"
                style={{
                  height: "96px",
                  width: "99px",
                  borderRadius: "48px",
                  marginTop: "3vh",
                  marginLeft: "7px",
                }}
              />
            </Grid>
            <Grid item md={12}>
              <Typography variant="h7">Profile</Typography>
              <br></br>
              No. of Points:<Chip label={a}></Chip>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid
            container
            sx={{
              backgroundColor: "#FFFFFF",
              height: "40vh",
              width: "20vw",
              borderRadius: "25px",
              marginLeft: "5vw",
              marginTop: "5vh",
              boxShadow:
                "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
          >
            <Grid
              item
              md={12}
              sx={{ borderRadius: "10px", height: "8px" }}
              alignContent="center"
            >
              <img
                src={im}
                alt="hii"
                style={{
                  height: "96px",
                  width: "99px",
                  borderRadius: "48px",
                  marginTop: "3vh",
                  marginLeft: "7px",
                }}
              />
            </Grid>
            <Grid item md={12}>
              <Typography variant="h7">Profile</Typography>
              <br></br>
              No. of Points:<Chip label={a}></Chip>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Grid
            container
            sx={{
              backgroundColor: "#FFFFFF",
              height: "40vh",
              width: "20vw",
              borderRadius: "25px",
              marginLeft: "5vw",
              marginTop: "5vh",
              boxShadow:
                "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
              "&:hover": {
                transform: "translateY(-1px)",
              },
            }}
          >
            <Grid
              item
              md={12}
              sx={{ borderRadius: "10px", height: "8px" }}
              alignContent="center"
            >
              <img
                src={im}
                alt="hii"
                style={{
                  height: "96px",
                  width: "99px",
                  borderRadius: "48px",
                  marginTop: "3vh",
                  marginLeft: "7px",
                }}
              />
            </Grid>
            <Grid item md={12}>
              <Typography variant="h7">Profile</Typography>
              <br></br>
              No. of Points:<Chip label={a}></Chip>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <br></br>
      <hr></hr>
      <br></br>
      <Grid container>
        <Grid item md={4}></Grid>
        <Grid item md={8}>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            
            <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt="Cindy Baker" src={im} />
              </ListItemAvatar>
              <ListItemText
                primary="Profile Name"
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline-block" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      No. of Points:<Chip label={a}></Chip>
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </List>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
    </>
  );
}
