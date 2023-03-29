import React from "react";
import Leftsidebar from "./Leftsidebar";
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";
import Rightsidebar from "./Rightsidebar";
import "/home/latimore/smiles/src/styles.css";

export default function Home() {
  return (
    <>
      <div className="container-fluid gedf-wrapper">
        <div className="row">
          <Leftsidebar />
          <Maincontent />
          <Rightsidebar />
        </div>
      </div>
    </>
  );
}
