import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar(user) {
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <a href="/" className="navbar-brand">
          <div className='d-flex flex-row mt-2'>
            <MDBIcon fas icon="far fa-face-grin-beam" style={{ color: '#ff6219', marginLeft: '20px' }} />
            <span className="h2 fw-bold mb-0">Smiles</span>
          </div>
        </a>
        <div style={{ marginLeft: '1200px' }}>
          <Link to='/myprofile' className="fas fa-user-large"></Link>
        </div>
        <a href="/home">
        {user &&
        <div style={{marginRight:'30px'}}>
         <span className="h3 fw-bold mb-0">Feed</span>
        </div>
        }
        </a>
      </nav>
    </>
  );
}
