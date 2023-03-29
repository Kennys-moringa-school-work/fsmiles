import React, { useState } from "react";
import { Button } from "react-bootstrap";
export default function Feed({posts}) {
const [smilesCount, setSmilesCount] = useState(0);

const handleSmileClick = () => {
  const newCount = increment(smilesCount);
  setSmilesCount(newCount);
};
function increment(num) {
  return num + 1;
}


  // const handleSmileClick = async (postId) => {
  //   try {
  //     const response = await fetch(`http://localhost:3000/posts/${postId}/like`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       setSmilesCount(data.smilesCount);
  //     } else {
  //       throw new Error(response.statusText);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  
  return (
    <>
    {posts.map((post => (   <div className="card gedf-card">
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src={post.pic}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">{post.username}</div>
                <div className="h7 text-muted">Miracles Lee Cross</div>
              </div>
            </div>
            <div>
              <div className="dropdown">
                <button
                  className="btn btn-link dropdown-toggle"
                  type="button"
                  id="gedf-drop1"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa fa-ellipsis-h"></i>
                </button>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="gedf-drop1"
                >
                  <div className="h6 dropdown-header">Configuration</div>
                  <a className="dropdown-item" href="#">
                    Save
                  </a>
                  <a className="dropdown-item" href="#">
                    Hide
                  </a>
                  <a className="dropdown-item" href="#">
                    Report
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            {" "}
            <i className="fa fa-clock-o"></i>10 min ago
          </div>
          <a className="card-link" href="#">
            <h5 className="card-title">
              {post.title}
            </h5>
          </a>
          <img src={post.image}/>

          <p className="card-text">
           {post.description}
          </p>
        </div>
        <div className="card-footer">
        <Button variant="success" onClick={handleSmileClick} style = {{marginLeft : '1050px', marginTop : '50px', display:'flex' }}>
        <i class="far fa-face-grin-beam"> {smilesCount}</i>
           </Button>
           <form style={{marginLeft : '5px'}} className="d-flex " role="search">
              <input className="form-control me-2" type="text" placeholder="Add a commentx"    aria-label="Search"/>
              <Button>Post Comment</Button>
           </form>
        </div>
      </div>)))}
 
      </>
  )
}
    

<i class="far fa-face-grin-beam"></i>