import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const MyProfile = ({user}) => {
  return(
    <>
    <Link to="/edituser" class="far fa-pen-to-square fa-3x" style ={{marginLeft : '75%', marginTop : '50px'}}/>
    <div style={{display : "flex"}}>
     <div className="mr-3">
        <img
        style={{marginTop: '120px', marginLeft: '140px'}}
          className="rounded-circle"
          width="200"
          length="200"
          src={user.profile_pic}
          alt=""
           />
     </div>
     <div style={{marginTop: '130px', marginLeft: '140px', width : '300px'}}>
        <p className="h2 fw-bold mb-0">{`@ ${user.username}`}</p>
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
