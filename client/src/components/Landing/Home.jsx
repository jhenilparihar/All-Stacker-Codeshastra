import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Typography } from "@mui/material";

const Home = () => {
  return (
    <div class="main1">
      <div class="head-container">
        <div class="fading-div">
          <div className="title-div">
            <h1>Awaken Your Senses with Ettarra</h1>
            <h2>A Journey to Rich and Bold Flavor</h2>
          </div>
          <div className="song-div">

            <iframe
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcgZcN2HVMoe?utm_source=generator&theme=0"
              width="120%"
              height="110%"
              frameBorder="0"
              allowfullscreen=""
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
          <div className="img-div"></div>
        </div>
      </div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
               <Typography sx={{float:'left',marginLeft:"3vw",marginTop:"5vh",fontFamily:'Sacramento',fontSize:"2rem",fontWeight:'bold'}}>Happy Customers!
               <Typography sx={{fontSize:"2rem",float:'left',marginTop:"7vh"}}>"</Typography>
               <Typography sx={{marginTop:"8vh"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores doloremque soluta vitae omnis in praesentium. Sit unde magnam rerum.</Typography>
               <Typography sx={{fontSize:"2rem",float:'right',marginRight:"2vw"}}>"</Typography>
               </Typography>
                
          </SwiperSlide>
          <SwiperSlide>
               <Typography sx={{float:'left',marginLeft:"3vw",marginTop:"5vh",fontFamily:'Sacramento',fontSize:"2rem",fontWeight:'bold'}}>Happy Customers!
               <Typography sx={{fontSize:"2rem",float:'left',marginTop:"7vh"}}>"</Typography>
               <Typography sx={{marginTop:"8vh"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores doloremque soluta vitae omnis in praesentium. Sit unde magnam rerum.</Typography>
               <Typography sx={{fontSize:"2rem",float:'right',marginRight:"2vw"}}>"</Typography>
               </Typography>
                
          </SwiperSlide>
          <SwiperSlide>
               <Typography sx={{float:'left',marginLeft:"3vw",marginTop:"5vh",fontFamily:'Sacramento',fontSize:"2rem",fontWeight:'bold'}}>Happy Customers!
               <Typography sx={{fontSize:"2rem",float:'left',marginTop:"7vh"}}>"</Typography>
               <Typography sx={{marginTop:"8vh"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores doloremque soluta vitae omnis in praesentium. Sit unde magnam rerum.</Typography>
               <Typography sx={{fontSize:"2rem",float:'right',marginRight:"2vw"}}>"</Typography>
               </Typography>
                
          </SwiperSlide>
          <SwiperSlide>
               <Typography sx={{float:'left',marginLeft:"3vw",marginTop:"5vh",fontFamily:'Sacramento',fontSize:"2rem",fontWeight:'bold'}}>Happy Customers!
               <Typography sx={{fontSize:"2rem",float:'left',marginTop:"7vh"}}>"</Typography>
               <Typography sx={{marginTop:"8vh"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores doloremque soluta vitae omnis in praesentium. Sit unde magnam rerum.</Typography>
               <Typography sx={{fontSize:"2rem",float:'right',marginRight:"2vw"}}>"</Typography>
               </Typography>
                
          </SwiperSlide>
        </Swiper>


    </div>
  );
};

export default Home;
