import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import Coffee from '../assets/coffee.jpg'
import Veg from '../assets/veg.png'
import { Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';

const Menu = () => {
  return (
    <div>
      <Grid container sx={{margin:"3vw",display:"inline-flex"}} >
          <Grid item xs={12} lg={4} sx={{backgroundColor:"#FFFFFF",height:"30vh",maxWidth:"30vw",borderRadius:"25px",marginRight:"2vw",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            }}}>
             <Grid container>
              <Grid item xs={5} lg={4} sx={{backgroundColor:"#F2EAE2",height:"30vh",borderRadius:"25px",textAlign:"center"}}>
                <img src={Coffee} style={{height:"110px",width:"6vw",borderRadius:"50%",marginTop:"3vh"}} alt="blank"/>
              </Grid>
              <Grid item xs={7} lg={8}>
                <Grid container>

                      <Grid item xs={12}>
                      <div>
                        <img src={Veg} style={{width:"20px", height:"20px",float:'left',marginLeft:"1vw",marginTop:"2.5vh"}} alt="icon here"></img>
                      </div>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"20px",fontWeight:"bold",color:"#563300",float:'left',marginLeft:"1vw"}}>Kaapicino</Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"15px",color:"#d4af37",float:'left',marginLeft:"1vw",marginTop:"1vh"}}><StarIcon sx={{height:"2vh"}}/> Bestseller</Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"15px",float:'left',marginLeft:"1vw",marginTop:"1vh"}}>
                        "Looks Cute" Coffee With A Biased Milk To Milk Foam Ratio...
                      </Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"18px",float:'left',marginLeft:"1vw",marginTop:"3.5vh"}}>
                        Rs 375.45
                      </Typography>
                      </Grid>
                </Grid>
              </Grid>
           </Grid>
          </Grid>
          {/* <Grid item xs={4} lg={4}>


          </Grid> */}
          <Grid item xs={12} lg={4} sx={{backgroundColor:"#FFFFFF",height:"30vh",maxWidth:"30vw",borderRadius:"25px",marginRight:"2vw",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            }}}>
             <Grid container>
              <Grid item xs={5} lg={4} sx={{backgroundColor:"#F2EAE2",height:"30vh",borderRadius:"25px",textAlign:"center"}}>
                <img src={Coffee} style={{height:"110px",width:"6vw",borderRadius:"50%",marginTop:"3vh"}} alt="blank"/>
              </Grid>
              <Grid item xs={7} lg={8}>
                <Grid container>

                      <Grid item xs={12}>
                      <div>
                        <img src={Veg} style={{width:"20px", height:"20px",float:'left',marginLeft:"1vw",marginTop:"2.5vh"}} alt="icon here"></img>
                      </div>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"20px",fontWeight:"bold",color:"#563300",float:'left',marginLeft:"1vw"}}>Kaapicino</Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"15px",color:"#d4af37",float:'left',marginLeft:"1vw",marginTop:"1vh"}}><StarIcon sx={{height:"2vh"}}/> Bestseller</Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"15px",float:'left',marginLeft:"1vw",marginTop:"1vh"}}>
                        "Looks Cute" Coffee With A Biased Milk To Milk Foam Ratio...
                      </Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"18px",float:'left',marginLeft:"1vw",marginTop:"3.5vh"}}>
                        Rs 375.45
                      </Typography>
                      </Grid>
                </Grid>
              </Grid>
           </Grid>
          </Grid>

          <Grid item xs={12} lg={4} sx={{backgroundColor:"#FFFFFF",height:"30vh",maxWidth:"30vw",borderRadius:"25px",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            }}}>
             <Grid container>
              <Grid item xs={5} lg={4} sx={{backgroundColor:"#F2EAE2",height:"30vh",borderRadius:"25px",textAlign:"center"}}>
                <img src={Coffee} style={{height:"110px",width:"6vw",borderRadius:"50%",marginTop:"3vh"}} alt="blank"/>
              </Grid>
              <Grid item xs={7} lg={8}>
                <Grid container>

                      <Grid item xs={12}>
                      <div>
                        <img src={Veg} style={{width:"20px", height:"20px",float:'left',marginLeft:"1vw",marginTop:"2.5vh"}} alt="icon here"></img>
                      </div>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"20px",fontWeight:"bold",color:"#563300",float:'left',marginLeft:"1vw"}}>Kaapicino</Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"15px",color:"#d4af37",float:'left',marginLeft:"1vw",marginTop:"1vh"}}><StarIcon sx={{height:"2vh"}}/> Bestseller</Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"15px",float:'left',marginLeft:"1vw",marginTop:"1vh"}}>
                        "Looks Cute" Coffee With A Biased Milk To Milk Foam Ratio...
                      </Typography>
                      </Grid>
                      <Grid item xs={12}>
                      <Typography sx={{fontSize:"18px",float:'left',marginLeft:"1vw",marginTop:"3.5vh"}}>
                        Rs 375.45
                      </Typography>
                      </Grid>
                </Grid>
              </Grid>
           </Grid>
          </Grid>
      </Grid>
      
      
      

    </div>
  )
}

export default Menu