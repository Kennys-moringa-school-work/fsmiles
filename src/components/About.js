import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function About() {
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden' >


      <MDBRow>
      <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="far fa-face-grin-beam" style={{ color: '#ff6219', marginBottom: '50px' }}/>
                <span className="h1 fw-bold mb-0">Smiles</span>
      </div>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center' style={{ fontFamily: 'Times New Roman' }}>
          {/* <p className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Share your smiles <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>with the world</span>
          </p> */}
          <div>
            <h1 style={{color : '#120d5b'}}>About Us</h1>
            <p style={{color: 'white', maxWidth: '350px'}}>With its intuitive user interface and customizable profiles, Smiles enables users to share their thoughts and experiences through posts, photos which ensure that users can stay up-to-date with the latest content and engage in private conversations with their connections</p>
          </div>


        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-4 bg-glass' >
            <img src='https://images.unsplash.com/flagged/photo-1575600220490-b7c773cb52b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80' style={{borderRadius: '10px'}}></img>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default About;