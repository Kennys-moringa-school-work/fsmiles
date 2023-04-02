import React from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function Rightsidebar({setUser}) {
  const navigate = useNavigate()
  function handleLogout(){
    fetch("http://localhost:3000/logout",{
      method : 'DELETE'
    })
    .then(res => res.json)
    .then(user => setUser(null))
    navigate('/')
  }
  return (
    <>
      <div className="col-md-3" style={{maxWidth : '200px'}}>
        <div className="card gedf-card">
          <div className="card-body">
            <p className="card-text">
              Want to add a post?
            </p>
            <Link to='/addpost'>
                <Button variant="success" onClick={handleLogout}>Add post</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
