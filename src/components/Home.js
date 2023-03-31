import React, {useState, useEffect} from "react";
import Leftsidebar from "./Leftsidebar";
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";
import Rightsidebar from "./Rightsidebar";
import "/home/latimore/smiles/src/styles.css";
import { useNavigate } from "react-router-dom";

export default function Home({user, setUser, onLogout}) {
  const navigate = useNavigate()
  // useEffect(() => {
  //   const userId = localStorage.getItem('id');
  //   if (userId) {
  //     // Fetch user data using user ID
  //     fetch(`http://localhost:3000/users/${userId}`)
  //       .then(response => response.json())
  //       .then(data => setUser(data));
  //   } else {
  //     // Redirect user to login page
  //   navigate('/');
  //   }
  // }, []);
  

  return (
    <>
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar  user = {user} setUser={setUser} onLogout={onLogout}/>
          <Maincontent currentuser ={user} />/
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}
