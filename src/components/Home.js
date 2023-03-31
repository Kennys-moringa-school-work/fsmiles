import React, {useState, useEffect} from "react";
import Leftsidebar from "./Leftsidebar";
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";
import Rightsidebar from "./Rightsidebar";
import "/home/latimore/smiles/src/styles.css";

export default function Home({user, setUser, onLogout}) {

  return (
    <>
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar  user = {user} setUser={setUser} onLogout={onLogout}/>
          <Maincontent currentuser ={user} />
          {/* <Rightsidebar /> */}
        </div>
      </div>
    </>
  );
}
