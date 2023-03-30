import React from "react";

export default function Leftsidebar({ user }) { 
 
console.log(user)

  return (
    <>
      <div className="col-md-3">
        <div className="card">
          <div className="card-body">
            <div className="h5"></div>
            <div className="h7 text-muted">{`Fullname : ${user.username}`}</div>
            <div className="h7"></div>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="h6 text-muted">Followers</div>
              <div className="h5"></div>
            </li>
            <li className="list-group-item">
              <div className="h6 text-muted">Following</div>
              <div className="h5"></div>
            </li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    </>
  );
}
