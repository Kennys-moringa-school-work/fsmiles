import React, { useState } from "react";
import Navbar from "./Navbar";

const MyProfile = () => {
  return(
    <>
    <div style={{display : "flex"}}>
     <div className="mr-3">
        <img
        style={{marginTop: '60px', marginLeft: '140px'}}
          className="rounded-circle"
          width="200"
          length="200"
          src="https://images.unsplash.com/photo-1679678691007-ae67bc760699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
           />
     </div>
     <div style={{marginTop: '130px', marginLeft: '140px', width : '300px'}}>
        <p className="h2 fw-bold mb-0">@Username</p>
        <p style={{marginLeft : '450px'}}>Followers
        <p>
            100
            </p></p>
        <div style={{marginTop : '20px'}}>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste
            voluptates.
            </p> 
            <p>Followers</p>  
        </div>    
     </div>
    </div>
    </>
  )
  
};

export default MyProfile;
