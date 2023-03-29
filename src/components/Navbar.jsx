import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-light bg-white">
        <a href="/" className="navbar-brand">
          <div className='d-flex flex-row mt-2'>
            <MDBIcon fas icon="far fa-face-grin-beam" style={{ color: '#ff6219', marginLeft : '20px'}}/>
            <span className="h2 fw-bold mb-0">Smiles</span>
          </div>
        </a>
        <Link to='/about' className="h2 fw-bold mb-0" style={{ color: '#ff6219', marginLeft : '700px'}}>About us</Link>
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
        <i class="fas fa-user-large"></i>
        <Link to='/profile' className="h2 fw-bold mb-0" style={{ color: '#ff6219', marginRight : '20px'}}>
        <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src="https://images.unsplash.com/photo-1679678691007-ae67bc760699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                </div>
        </Link>
      </nav>
    </>
  );
}
// import React from "react";
// import { MDBIcon } from "mdb-react-ui-kit";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <>
//       <nav className="navbar navbar-light bg-white">
//         <a href="/" className="navbar-brand">
//           <div className='d-flex flex-row mt-2'>
//             <MDBIcon fas icon="far fa-face-grin-beam" style={{ color: '#ff6219', marginLeft : '20px'}}/>
//             <span className="h2 fw-bold mb-0">Smiles</span>
//           </div>
//         </a>
//         <Link to='/about' className="h2 fw-bold mb-0" style={{ color: '#ff6219', marginLeft : '700px'}}>About us</Link>
//         <Link to='/profile' className="h2 fw-bold mb-0" style={{ color: '#ff6219', marginLeft : '20px'}}>Profile</Link>
//         <form className="form-inline">
//           <div className="input-group">
//             <input
//               type="text"
//               className="form-control"
//               aria-label="Recipient's username"
//               aria-describedby="button-addon2"
//             />
//             <div className="input-group-append">
//               <button
//                 className="btn btn-outline-primary"
//                 type="button"
//                 id="button-addon2"
//               >
//                 <i className="fa fa-search"></i>
//               </button>
//             </div>
//           </div>
//         </form>
//       </nav>
//     </>
//   );
// }
