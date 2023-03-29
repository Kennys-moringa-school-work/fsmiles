import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import About from './components/About';
import Home from './components/Home';

// function App() {
//   return (
//     <Topbar/>
//   );
// }

// export default App;

import React from "react";
import Leftsidebar from "./components/Leftsidebar";
import Maincontent from "./components/Maincontent";
import Navbar from "./components/Navbar";
import Rightsidebar from "./components/Rightsidebar";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./styles.css";
import MyProfile from './components/MyProfile';


export default function App() {
  return (
   <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' element={<LoginForm/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/signup' element={<SignupForm/>}/>
       <Route path='/myprofile' element={<MyProfile/>}/>
       {/* <Route path='/login' element={<LoginForm/>}/> */}

     </Routes>
    
   </BrowserRouter>

  );
}

