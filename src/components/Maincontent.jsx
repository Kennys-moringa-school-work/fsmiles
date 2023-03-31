import React, { useEffect, useState } from "react";
import Feed from "./Feed";
import { Upload, Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import {
  Card,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import Navbar from "./Navbar";

export default function Maincontent({currentuser}) {
  const[posts,setPosts] = useState([])
  const[users,setUsers] = useState([])
  const[title,setTitle] = useState('')
  const[image,setImage] = useState('')
  const [search, setSearch] = useState("")
  const[description,setDescription] = useState('')
  const [filterParam, setFilterParam] = useState(["All"]);
  useEffect(() => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((post) => setPosts(post));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((user) => setUsers(user));
  }, []);
  console.log(posts)
 

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
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('title', title);
  //   formData.append('description', description);
  //   formData.append('image', image);
  
  //   fetch('http://localhost:3000/posts', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((post) => setPosts([...posts, post]));
  // }
  
  // const searched = posts.filter((post) => {
  //   return search.toLowerCase() === "" ? post
  //     : post.title.toLowerCase().includes(search);
  // });

  return (
    <>
      <div className="col-md-5 gedf-main">
        <Feed  posts={posts} users = {currentuser} setPosts = {setPosts}/>
        {/* {postCards} */}
      </div>
    </>
  );
}
