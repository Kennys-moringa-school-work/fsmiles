import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Leftsidebar({ user, setUser, onLogout}) { 
  const navigate = useNavigate()
  function handleLogout() {
    fetch('http://localhost:3000/logout', { method: 'DELETE'})
    .then(() => onLogout());
    navigate('/')
  }
  
 
console.log(user)


  return (
    <>
      <div className="col-md-3">
        <div className="card" style={{maxWidth : '300px'}}>
          <div className="card-body">
            <div className="h5"></div>
            <div className="h7 text-muted">
            <p className="h2 fw-bold mb-0">{`@ ${user.username}`}</p>
            </div>
            <div className="h7"></div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">
              <img
        // style={}
          className="rounded-circle"
          width="200"
          length="200"
          src={user.profile_pic}
          alt=""
           />
              </div>
              <div className="h5"></div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">{user.bio}</div>
              <div className="h5">
              <Link to="/edituser" class="far fa-pen-to-square fa-1.5x" style ={{marginLeft : '85%', marginTop : '50px'}}/>
              <div>
              <Button onClick={handleLogout} variant="danger">Log out</Button>
              </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
