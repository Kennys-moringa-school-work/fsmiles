import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
import { Link } from 'react-router-dom';

function LoginForm() {
  
  const navigate = useNavigate();

  return (
    <MDBContainer className="my-5" style={{ maxHeight: '500px' }}>

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://images.unsplash.com/photo-1595152772835-219674b2a8a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21pbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="far fa-face-grin-beam" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Smiles</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your account</h5>
              <form>
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='email' size="lg"/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>
              </form>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={() => navigate('/home')}>
                Login
              </MDBBtn>
              
              <p className="mb-5 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? 
                <Link to ='/signup' style={{color: '#393f81'}}>Register here/</Link>
              </p>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}

export default LoginForm;
