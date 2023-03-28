import React from "react";

import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput
  }
  from 'mdb-react-ui-kit';
  import 'mdb-react-ui-kit/dist/css/mdb.min.css';
  import "@fortawesome/fontawesome-free/css/all.min.css";
import Topbar from "./topbar/Topbar";
import { Sidebar } from "semantic-ui-react";

function Home(){
    return(
        <>
        <Topbar/>
        <Sidebar/>
        </>
    )
}

export default Home