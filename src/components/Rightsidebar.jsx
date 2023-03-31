import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Rightsidebar() {
  return (
    <>
      <div className="col-md-3" style={{maxWidth : '200px'}}>
        <div className="card gedf-card">
          <div className="card-body">
            <p className="card-text">
              Want to add a post?
            </p>
            <Link to='/addpost'>
                <Button variant="success" >Add post</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
