import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <a href="#" className="navbar-brand">
        <div className='d-flex flex-row mt-2'>
            <MDBIcon fas icon="far fa-face-grin-beam" style={{ color: '#ff6219', marginLeft : '20px'}}/>
            <span className="h2 fw-bold mb-0">Smiles</span>
       </div>
        </a>
        <form className="form-inline">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                id="button-addon2"
              >
                <i className="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>
      </nav>
    </>
  );
}
