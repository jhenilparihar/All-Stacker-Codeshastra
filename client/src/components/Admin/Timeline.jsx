import React from "react";
import { Timeline, Events, TextEvent} from "@merc/react-timeline";
import  { useState } from "react";
import { Card, Grid, Typography, Divider } from "@mui/material";
import { themes, createTheme } from "@merc/react-timeline";

import { makeStyles } from "@mui/styles";
const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  card2: {
    padding: "3%",
    height: "75vh",
    boxShadow: "1px 1px 6px rgba(0, 0, 0, 0.25)!important",
    borderRadius: "10px!important",
  },
}));

const customTheme = createTheme(themes.default, {
  card: {
    
  },
  date: {

    backgroundColor: "#6D756E",
    // borderRadius:"50%",

  },
  marker: {
    // borderColor: "white",
  },
  timelineTrack: {
    backgroundColor: "#AB877D",
  },
});

const TimeLine = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];
  const description = [
    "The event of 1 Jan 2021 : Happy New Year",
    "The event of 15 Jan 2021 : Festival",
   
  ];
  return (
    <Card className={classes.card2} sx={{ height:"78vh"}}>
      <Grid container sx={{ marginTop:"2vh" }}>
        <Grid item className={classes.header} sx={{ marginTop:"3vh" }}>
          <Typography gutterBottom variant="h3" component="div" mt={1} mb={1} >
            Sponsarship Events 
          </Typography>
        </Grid>
        <Divider className={classes.divider} />
        <Grid xs={12} md={12} sx={{ minHeight: "40vh" }}>
          <Timeline theme={customTheme}>
            <Events>
              <TextEvent date="08 April" text="Codeshatra" />
              <TextEvent date="18 May" text="Hack Prep" />
              <TextEvent date="28 May" text="Hacknichee" />
              <TextEvent date="05 June" text="College Fest" />
              <TextEvent date="14 June" text="LOC Event" />
              <TextEvent date="28 May" text="Hacknichee" />
            </Events>
          </Timeline>
        </Grid> 
       </Grid>
    </Card>
  );
};
export default TimeLine;
