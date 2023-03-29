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
import Leftsidebar from './Leftsidebar';
import { FormField,  } from 'semantic-ui-react';
import { toast } from "react-toastify";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [currentUser,setCurrentUser]= useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [errors,setErrors] = useState([])
  

function handleLogin(e) {
  e.preventDefault();
  setIsLoading(true);
  console.log(currentUser)
  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }).then((r) => r.json())
  .then(user => setCurrentUser(user))
  navigate('/home')
}
// async function handleLogin(e) {
//   e.preventDefault();
//   setIsLoading(true);
//   console.log(currentUser)
//   try {
//   const response = await fetch("http://localhost:3000/login", {
//   method: "POST",
//   headers: {
//   "Content-Type": "application/json",
//   },
//   body: JSON.stringify({ username, password }),
//   });
//   if (response.ok) {
//   const user = await response.json();
//   setCurrentUser(user);
//   setIsLoading(false);
//   navigate('/home');
//   toast.success('Registered successfully.');
//   } else {
//   const err = await response.json();
//   setErrors(err.errors);
//   setIsLoading(false);
//   toast.error('Invalid credentials. Please try again.');
//   }
//   } catch (error) {
//   console.log(error);
//   }
//   }
console.log(currentUser)

  
  const navigate = useNavigate();

  return (
  <>
   {currentUser && currentUser.id && (
        <Leftsidebar userId={currentUser.id} />
      )}

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
                <MDBInput wrapperClass='mb-4' label='Username' id='formControlLg' type='email' size="lg"   onChange={(e) => setUsername(e.target.value)}/>
                <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"   onChange={(e) => setPassword(e.target.value)}/>
              </form>

              <MDBBtn className="mb-4 px-5" color='dark' size='lg' onClick={handleLogin}>
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
    {currentUser && currentUser.id && (
        <Leftsidebar userId={currentUser.id} />
      )}

    </>
  );
}

export default LoginForm;
