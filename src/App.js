import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import About from './components/About';
import Home from './components/Home';
import React from "react";
import Leftsidebar from "./components/Leftsidebar";
import Maincontent from "./components/Maincontent";
import Navbar from "./components/Navbar";
import Rightsidebar from "./components/Rightsidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles.css";
import MyProfile from './components/MyProfile';
import  {useEffect, useState} from 'react'
import Edituser from './components/Edituser';
import { useNavigate } from 'react-router-dom';
export default function App() {


  const [user, setUser] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("http://localhost:3000/me", { credentials: 'include' }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  function handleLogin(user) {
    setUser(user);
  }

  function handleLogout(){
    setUser(null)
  }
  console.log(user)
  // const navigate = useNavigate();
  // if (!user) {
  //   navigate('/');
  // }

// if(!user) return <LoginForm setUser={setUser}/>
  return (
   <BrowserRouter>
     <Navbar/>
     <Routes>
     {/* if(!user) return <LoginForm setUser={setUser}/> */}
     <Route path='/' element={<LoginForm setUser ={setUser} onLogin={handleLogin}/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/home' element={<Home user = {user} setUser={setUser} onLogout={handleLogout}/>}/>
       <Route path='/signup' element={<SignupForm/>}/>
       <Route path='/myprofile' element={<MyProfile user ={user}/>}/>
       <Route path='/edituser' element={<Edituser/>}/>
       {/* <Route path='/users' element={<Users/>}/> */}
       {/* <Route path='/login' element={<LoginForm/>}/> */}

     </Routes>
    
   </BrowserRouter>

  );
}

