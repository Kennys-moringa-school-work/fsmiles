import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { MDBAnimation } from "mdbreact";

export default function Feed({posts, setPosts, users}) {
  const [smiles, setSmiles] = useState({});
  const [smilesCount, setSmilesCount] = useState(0);
  const [comments, setComments] = useState({});
  console.log(users)

  
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
  function decrement(num){
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
    fetch(`http://localhost:3000/posts/${postId}`, {
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
  };

  return (
    <>
      {posts.map((post) => (
         <MDBAnimation type='fadeIn' duration='0.3s' delay='0.2s' className='mb-4'>
        <div key={post.id} className="card gedf-card" style={{maxWidth : "600px", marginLeft : '125px'}}>
          <div className="card-header">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex justify-content-between align-items-center">
                <div className="mr-2">
                  <img
                    className="rounded-circle"
                    width="45"
                    src={users.profile_pic}
                    alt= "dp"
                  />
                </div>
                <div className="ml-2">
                  <div className="h5 m-0"></div>
                 {/* <div className="h7 text-muted">{users.username}</div> */}
                 <strong style={{marginLeft : '15px'}}>{users.username}</strong>
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
            <img src={post.image} alt="" style={{marginLeft : '15px', borderRadius : '24px'}}/>
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
    required
  />
  <Button type="submit">Post Comment</Button>
</form>

  {comments[post.id] &&
    comments[post.id].map((comment, index) => (
      <div key={index}>
        <strong>{users.username}</strong> {comment}
      </div>
    ))}
</div>
<Button type="submit" onClick={handleDeletePost(post.id)} variant = 'danger'>Delete</Button>

        </div>
          </MDBAnimation>
      ))}
    </>
  );
}
