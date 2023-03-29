import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import Navbar from "./Navbar";

export default function Maincontent() {
  const[posts,setPosts] = useState([])
  const[users,setUsers] = useState([])
  const[title,setTitle] = useState('')
  const[image,setImage] = useState('')
  const [search, setSearch] = useState("")
  const[description,setDescription] = useState('')
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((user) => setPosts(user));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((user) => setUsers(user));
  }, []);
  console.log(posts)
  console.log(users)

  function handleSubmit(e){
    e.preventDefault()
    const post ={
      title: title,
      image: image,
      description: description

    }
    fetch("http://localhost:3000/posts",{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify(post)
    })
    .then(res => res.json())
    .then(post => setPosts([...posts,post]))
  }
  const searched = posts.filter((post) => {
    return search.toLowerCase() === "" ? post
      : post.title.toLowerCase().includes(search);
  });
  return (
    <>
      <div className="col-md-6 gedf-main">
        <div className="card gedf-card">
          <div className="card-header">
            <ul
              className="nav nav-tabs card-header-tabs"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="posts-tab"
                  data-toggle="tab"
                  href="#posts"
                  role="tab"
                  aria-controls="posts"
                  aria-selected="true"
                >
                  Make a publication
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="images-tab"
                  data-toggle="tab"
                  role="tab"
                  aria-controls="images"
                  aria-selected="false"
                  href="#images"
                >
                  Images
                </a>
              </li>
            </ul>
          </div>
          <form style={{marginLeft : '5px'}} className="d-flex " role="search">
              <input className="form-control me-2" type="text" placeholder="Search for a post" value={search}  onChange={(e) => setSearch(e.target.value)} aria-label="Search"/>
           </form>
          <div className="card-body">
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="posts"
                role="tabpanel"
                aria-labelledby="posts-tab"
              >
                <div className="form-group">
                  <form onSubmit={handleSubmit}>
                  <label className="sr-only" for="message">
                    post
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Whats your title?"
                    onChange={(e) => setTitle(e.target.value)}
                  ></textarea>
                   <label className="sr-only" for="message">
                    post
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="Image Link"
                    onChange={(e) => setImage(e.target.value)}
                  ></textarea>
                   <label className="sr-only" for="message">
                    post
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                    placeholder="What are you thinking?"
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                   <div className="btn-toolbar justify-content-between">
              <div className="btn-group">
                <button type="submit" className="btn btn-primary">
                  share
                </button>
              </div>
            </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Feed  posts={searched} users = {users}/>
      </div>
    </>
  );
}
