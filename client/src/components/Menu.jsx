import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, Link } from "@mui/material";

const Menu = () => {
  return (
    <div>
        <Grid container xs={12} lg={4} md={4} >
        <Grid container xs={12} lg={4} md={4} sx={{height:"20vh",padding:"2vw"}} >
            <Grid item xs={3} lg={3} md={3} sx={{backgroundColor:"red"}}>
                    hello
            </Grid>
            <Grid item xs={9} lg={9} md={9} sx={{backgroundColor:"yellow"}}>
                    hi
            </Grid>
        </Grid>
        <Grid container xs={12} lg={4} md={4} sx={{height:"20vh"}}>
            <Grid item xs={3} lg={3} md={3} sx={{backgroundColor:"red"}}>
                    hello
            </Grid>
            <Grid item xs={9} lg={9} md={9} sx={{backgroundColor:"yellow"}}>
                    hi
            </Grid>
        </Grid>
        <Grid container xs={12} lg={4} md={4} sx={{height:"20vh"}}>
            <Grid item xs={3} lg={3} md={3} sx={{backgroundColor:"red"}}>
                    hello
            </Grid>
            <Grid item xs={9} lg={9} md={9} sx={{backgroundColor:"yellow"}}>
                    hi
            </Grid>
        </Grid>
        </Grid>
      

      {/* <Grid container sx={{ padding: "3em" }}>
        <Grid
          item
          xs={3}
          md={3}
          lg={3}
        //   sx={{ marginBottom: "2em" }}
          elevation={6}
        >
          <Card sx={{ width: 350, height: 350 }}> */}
            {/* <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://blog.sparkhire.com/wp-content/uploads/2015/08/The-Game-of-Hiring-and-How-it-Works.jpg"
            /> */}
            {/* <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                The Application Process
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "The Game of Hiring and How it Works"
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                target="_blank"
                href="https://blog.sparkhire.com/2015/08/08/the-game-of-hiring-and-how-it-works/"
              >
                <Button size="small">Learn More</Button>
              </Link>
            </CardActions>
          </Card>
        </Grid>
      </Grid> */}
      
    </div>
  );
};

export default Menu;
