import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MDBAnimation, MDBIcon } from "mdbreact";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Feed({ users }) {
  const [smiles, setSmiles] = useState({});
  const [smilesCount, setSmilesCount] = useState(0);
  const [comments, setComments] = useState({});
  const [posts, setPosts] = useState([])
  const [editingPost, setEditingPost] = useState(null);
  const [showEditForm,setShowEditForm] = useState(false)

  const navigate = useNavigate()
  console.log(users)


  useEffect(() => {
    fetch("https://mysmile.onrender.com/posts")
      .then((response) => response.json())
      .then((post) => setPosts(post));
  }, []);


  const handleSmileClick = (postId) => {
    if (smiles[postId]) {
      // User has already liked the post
      const newCount = decrement(smiles[postId]);
      setSmilesCount((prevCounts) => ({ ...prevCounts, [postId]: newCount }));
      setSmiles((prevSmiles) => ({ ...prevSmiles, [postId]: false }));
    } else {
      // User has not liked the post
      const newCount = increment((smiles[postId] || 0));
      setSmilesCount((prevCounts) => ({ ...prevCounts, [postId]: newCount }));
      setSmiles((prevSmiles) => ({ ...prevSmiles, [postId]: true }));
    }
  };
  function increment(num) {
    return num + 1;
  }
  function decrement(num) {
    return num - 1
  }
  const handleAddComment = (postId, comment) => {
    if (!comments[postId]) {
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [comment],
      }));
    } else {
      setComments((prevComments) => ({
        ...prevComments,
        [postId]: [...prevComments[postId], comment],
      }));
    }
  };
  const handleDeletePost = (postId) => {
    fetch(`https://mysmile.onrender.com/posts/${postId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          // remove the deleted post from the list of posts
          const updatedPosts = posts.filter(post => post.id !== postId);
          setPosts(updatedPosts);
        } else {
          throw new Error('Failed to delete post');
        }
      })
      .catch(error => {
        console.error(error);
      });
    console.log("post deleted")
  };

  const handleUpdatePost = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const description = e.target.elements.description.value;
    const image = e.target.elements.image.value;
  
    fetch(`https://mysmile.onrender.com/posts/${editingPost.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, description, image })
    })
      .then(response => {
        if (response.ok) {
          // update the post in the list of posts
          const updatedPosts = posts.map(post => {
            if (post.id === editingPost.id) {
              return { ...post, title, description, image };
            }
            return post;
          });
          setPosts(updatedPosts);
          setShowEditForm(false);
          setEditingPost(null);
        } else {
          throw new Error('Failed to update post');
        }
      })
      .catch(error => {
        console.error(error);
      });
      console.log("save clicked")
  };
  
  let postcards = posts.map((post) => (
    <MDBAnimation type='fadeIn' duration='0.3s' delay='0.2s' className='mb-4'>
      <div key={post.id} className="card gedf-card" style={{ maxWidth: "600px", marginLeft: '125px' }}>
        <div className="card-header">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src={users.profile_pic}
                  alt="dp"
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0"></div>
                {/* <div className="h7 text-muted">{users.username}</div> */}
                <strong style={{ marginLeft: '15px' }}>{users.username}</strong>
              </div>
            </div>
            <div>

            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="text-muted h7 mb-2">
            <i className="fa fa-clock-o"></i> 10 min ago
          </div>
          <a className="card-link" href="#">
            <h5 className="card-title">{post.title}</h5>
          </a>
          <img src={post.image} alt="" style={{ borderRadius: '24px', marginRight: '15px' }} />
          <p className="card-text">{post.description}</p>
        </div>
        <div className="card-footer">
          <Button
            variant="success"
            onClick={() => handleSmileClick(post.id)}
            style={{
              display: "flex",
              marginBottom: "20px",
              borderRadius: "15px",
            }}
          >
            <i className="far fa-face-grin-beam"> {smiles[post.id] || 1}</i>
          </Button>
          <form
            style={{ marginLeft: "5px" }}
            className="d-flex "
            onSubmit={(e) => {
              e.preventDefault();
              const comment = e.target.elements.comment.value;
              handleAddComment(post.id, comment);
              e.target.reset();
            }}
          >
            <input
              className="form-control me-2"
              type="text"
              placeholder="Add a comment"
              aria-label="Search"
              name="comment"
              style={{ borderRadius: '24px' }}
              required
            />
            <Button type="submit" style={{ borderRadius: '24px', backgroundColor: '#d03206' }}>Post Comment</Button>
          </form>
          <Button style={{ marginTop: '10px', borderRadius: '30px', backgroundColor: 'greenyellow' }} href='/home#edituser' onClick={() => {
            setEditingPost(post);
            setShowEditForm(true);
          }} >
            <MDBIcon far icon="edit" />
          </Button >
          {comments[post.id] &&
            comments[post.id].map((comment, index) => (
              <div key={index}>
                <strong>{users.username}</strong> {comment}
              </div>
            ))}
        </div>
        {/* <Button type="submit" onClick={handleDeletePost(post.id)} variant = 'danger'>Delete</Button> */}
        <button
          className="btn btn-danger btn-sm"
          onClick={() => handleDeletePost(post.id)}
        >
          Delete
        </button>

      </div>
    </MDBAnimation>
  ))

  return (
    <>
      {postcards}
      {showEditForm && (
        <form onSubmit={handleUpdatePost} id="edituser" >
          <h3 style={{marginLeft:'250px', color:'orangered'}}>Edit Post</h3>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input type="text" className="form-control" id="title" name="title" defaultValue={editingPost.title} required />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea className="form-control" id="description" name="description" defaultValue={editingPost.description} required></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image URL</label>
            <input type="text" className="form-control" id="image" name="image" defaultValue={editingPost.image} required />
          </div>
          <Button type="submit" style={{ borderRadius: '24px', backgroundColor: '#d03206' }}>Save</Button>
          <Button style={{ marginLeft: '10px', borderRadius: '24px', backgroundColor: '#d03206' }} onClick={() => setShowEditForm(false)}>Cancel</Button>
        </form>
      )}

    </>
  );
}
