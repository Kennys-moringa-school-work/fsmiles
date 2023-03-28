// import logo from './logo.svg';
// import './App.css';
// import LoginForm from './components/LoginForm';
// import SignupForm from './components/SignupForm';
// import About from './components/About';
// import Home from './components/Home';
// import Topbar from './components/topbar/Topbar';

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
import "./styles.css";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar/>
          <Maincontent />
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}

