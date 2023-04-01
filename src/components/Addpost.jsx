import React from "react";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Addpost() {
  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [search, setSearch] = useState("")
  const [description, setDescription] = useState('')
  //   const [filterParam, setFilterParam] = useState(["All"]);
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const post = {
      title: title,
      image: image,
      description: description

    }
    fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(post)
    })
      .then(res => res.json())
      .then(post => setPosts([...posts, post]))
    navigate('/home')
  }
  return (
    <>
      <div className="col-md-6 gedf-main" style={{ marginTop: '200px', marginLeft: '450px' }}>
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
                  Create your post
                </a>
              </li>
            </ul>
          </div>
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

                    {/* <input type='file'> choosefile</input> */}

                    <label className="sr-only" for="message">
                      post
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      placeholder="What are you thinking?"
                      style={{ marginTop: '10px' }}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                    <label className="sr-only" for="message">
                      post
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="3"
                      type
                      placeholder="Image Link"
                      onChange={(e) => setImage(e.target.value)}
                    ></textarea>
                    {/* <Upload onChange={(info) => setImage(info.file)} >
                    <Button icon={<UploadOutlined />}>Choose File</Button>
                  </Upload> */}

                    <div className="btn-toolbar justify-content-between">
                      <div className="btn-group" style={{ marginLeft: '350px' }} >
                        <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
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
      </div>
    </>
  )
}
export default Addpost