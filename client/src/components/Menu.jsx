import React from 'react'
import Grid from '@mui/system/Unstable_Grid/Grid'
import Coffee from '../assets/coffee.jpg'
import Veg from '../assets/veg.png'
import { Typography ,Button} from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import {motion} from 'framer-motion';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Menu = () => {
  return (
    <div>
      <Typography sx={{fontSize:"45px",color:"#563300",fontWeight:'bold',paddingTop:"4vh",fontFamily: 'Sacramento'}}>Order Now!</Typography>
      <Grid container sx={{margin:"1vw",display:"inline-flex"}} >
          <Grid component={motion.div} 
               whileHover={{
                 scale: 1.05,
                 transition: { duration: 0.3 }
               }}
               whileTap={{ scale: 0.9 }} item xs={12} lg={4} sx={{backgroundColor:"#FFFFFF",height:"35vh",maxWidth:"30vw",borderRadius:"25px",marginRight:"2vw",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            }}}>
             <Grid container>
              <Grid item xs={5} lg={4} sx={{backgroundColor:"#F2EAE2",height:"35vh",borderRadius:"25px",textAlign:"center"}}>
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
                      <Grid item xs={6}>
                      <Typography sx={{fontSize:"18px",float:'left',marginLeft:"1vw",marginTop:"8.5vh"}}>
                        Rs 375.45
                      </Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Button variant="contained" sx={{marginTop:"8.5vh",backgroundColor:"#563300", '&:hover': {
                        backgroundColor:"#AB877D",
                        }}}><ShoppingCartOutlinedIcon sx={{height:"2.3vh",float:"left"}}/>Buy</Button>
                      </Grid>
                </Grid>
              </Grid>
           </Grid>
          </Grid>
          <Grid component={motion.div} 
               whileHover={{
                 scale: 1.05,
                 transition: { duration: 0.3 }
               }}
               whileTap={{ scale: 0.9 }} item xs={12} lg={4} sx={{backgroundColor:"#FFFFFF",height:"35vh",maxWidth:"30vw",borderRadius:"25px",marginRight:"2vw",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            }}}>
             <Grid container>
              <Grid item xs={5} lg={4} sx={{backgroundColor:"#F2EAE2",height:"35vh",borderRadius:"25px",textAlign:"center"}}>
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
                      <Grid item xs={6}>
                      <Typography sx={{fontSize:"18px",float:'left',marginLeft:"1vw",marginTop:"8.5vh"}}>
                        Rs 375.45
                      </Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Button variant="contained" sx={{marginTop:"8.5vh",backgroundColor:"#563300", '&:hover': {
                        backgroundColor:"#AB877D",
                        }}}><ShoppingCartOutlinedIcon sx={{height:"2.3vh",float:"left"}}/>Buy</Button>
                      </Grid>
                </Grid>
              </Grid>
           </Grid>
          </Grid>
          <Grid component={motion.div} 
               whileHover={{
                 scale: 1.05,
                 transition: { duration: 0.3 }
               }}
               whileTap={{ scale: 0.9 }} item xs={12} lg={4} sx={{backgroundColor:"#FFFFFF",height:"35vh",maxWidth:"30vw",borderRadius:"25px",marginRight:"2vw",boxShadow: "-5px -5px 9px rgba(255,255,255,0.45), 5px 5px 9px rgba(94,104,121,0.3)",
            '&:hover': {
              transform: "translateY(-1px)",
            }}}>
             <Grid container>
              <Grid item xs={5} lg={4} sx={{backgroundColor:"#F2EAE2",height:"35vh",borderRadius:"25px",textAlign:"center"}}>
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
                      <Grid item xs={6}>
                      <Typography sx={{fontSize:"18px",float:'left',marginLeft:"1vw",marginTop:"8.5vh"}}>
                        Rs 375.45
                      </Typography>
                      </Grid>
                      <Grid item xs={6}>
                      <Button variant="contained" sx={{marginTop:"8.5vh",backgroundColor:"#563300", '&:hover': {
                        backgroundColor:"#AB877D",
                        }}}><ShoppingCartOutlinedIcon sx={{height:"2.3vh",float:"left"}}/>Buy</Button>
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