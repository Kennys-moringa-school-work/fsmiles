import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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

function SignupForm({setShowNotification, showNotification}) {
  const[username,setUsername]= useState('')
  const[password,setPassword]= useState('')
  const[profilePic,setProfilepic] = useState('')
  const[login,setLogin] = useState('')
  const[errors, setErrors] = useState([])
  // const[notsignedup,setNotSignedup] = useState(false)
  const user = {
    username: username,
    password: password
  }
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // setIsLoading(true);
    const user = {
      username: username,
      profile_pic: profilePic,
      password: password,
    }
    try {
      const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (response.ok) {
        const user = await response.json();
        setShowNotification(false)
        navigate("/");
      } else {
        const err = await response.json();
        setErrors(err);
        setShowNotification(true)
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>


      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'black'}}>
            Share your smiles <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>with the world</span>
          </h1>


        </MDBCol>

        <MDBCol md='6' className='position-relative'>

          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
                <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="far fa-face-grin-beam" style={{ color: '#ff6219', marginBottom: '50px' }}/>
                <span className="h1 fw-bold mb-0">Smiles</span>
              </div>

              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Username' id='form1' name ='username'type='text'onChange={(e) => setUsername(e.target.value)}/>
                  <MDBInput wrapperClass='mb-4' label='Profile Picture (optional)' id='form1' type='text'onChange={(e) => setProfilepic(e.target.value)}/>
                </MDBCol>
              </MDBRow>
              <form onSubmit={handleSubmit}>
              <MDBInput wrapperClass='mb-4' label='Password' id='form3' name= 'password' type='password'onChange={(e) => setPassword(e.target.value)}/>
              {/* <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form4' type='password'/> */}
              {/* <MDBInput wrapperClass='mb-4' label='Profile Picture (Optional)' id='form3'  type='text'onChange={(e) => setProfilepic(e.target.value)}/> */}

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>
              </form>
              {showNotification && (
                <div className="alert alert-danger" role="alert">
                  User already exists
                </div>
              )}
            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default SignupForm;