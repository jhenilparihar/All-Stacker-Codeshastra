import Navbar from './Navbar'
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import im from '../images/image.jpg'

export default function Leaderboard() {
  return (
    <>
    <Grid container spacing={0}>
    <Grid item md={4}>
    <Grid container sx={{backgroundColor:"#FFFFFF", height:"30vh",width:"20vw",borderRadius:"25px",marginLeft:"5vw",marginTop:"5vh",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            
            }}}>
          <Grid item md={12} sx={{borderRadius:"10px"}}>
            <img src={im} alt="hii" style={{height:"81px",width:"87px",borderRadius:"43px",marginTop:"3vh",marginLeft:"61px"}}/>
          </Grid>
          <Grid item md={12}>
          <Typography variant='h7'>Profile</Typography>
          </Grid>
      </Grid>
      </Grid>
      <Grid item md={4}>
      <Grid container sx={{backgroundColor:"#FFFFFF", height:"30vh",width:"20vw",borderRadius:"25px",marginLeft:"5vw",marginTop:"5vh",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            
            }}}>
          <Grid item md={12} sx={{borderRadius:"10px"}} alignContent="center">
            <img src={im} alt="hii" style={{height:"81px",width:"87px",borderRadius:"43px",marginTop:"3vh",marginLeft:"61px"}}/>
          </Grid>
          <Grid item md={12}>
            <Typography variant='h7'>Profile</Typography>
          </Grid>
      </Grid>
      </Grid>
      <Grid item md={4}>
      <Grid container  sx={{backgroundColor:"#FFFFFF", height:"30vh",width:"20vw",borderRadius:"25px",marginLeft:"5vw",marginTop:"5vh",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            
            }}}>
          <Grid item md={12} sx={{borderRadius:"10px"}}>
            <img src={im} alt="hii" style={{height:"81px",width:"87px",borderRadius:"43px",marginTop:"3vh",marginLeft:"61px"}}/>
          </Grid>
          <Grid item md={12}>
          <Typography variant='h7'>Profile</Typography>
          </Grid>
      </Grid>
      </Grid>
      </Grid>
    </>
  )
}
