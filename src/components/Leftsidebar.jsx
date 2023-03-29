import React, { useEffect, useState } from "react";

export default function Leftsidebar({ userId }) { 
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  if (!user) {
    return <div>Loading user information...</div>;
  }


  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="h5">{user.name}</div>
            <div className="h7 text-muted">{`Fullname : ${user.username}`}</div>
            <div className="h7">{user.description}</div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">Followers</div>
              <div className="h5">{user.followers}</div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">Following</div>
              <div className="h5">{user.following}</div>
            </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </>
  );
}
