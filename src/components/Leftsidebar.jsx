import React, { useEffect, useState } from "react";

export default function Leftsidebar() { 
  const[users,setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/users/1")
      .then((response) => response.json())
      .then((user) => setUsers(user));
    console.log(users);
  }, []);

    
  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="h5">{users.name}</div>
            <div className="h7 text-muted">Fullname : Miracles Lee Cross</div>
            <div className="h7">
              Developer of web applications, JavaScript, PHP, Java, Python,
              Ruby, Java, Node.js, etc.
            </div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">Followers</div>
              <div className="h5">5.2342</div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">Following</div>
              <div className="h5">6758</div>
            </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </>
  );
}
