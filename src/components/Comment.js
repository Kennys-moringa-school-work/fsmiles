import React, { useState } from "react";

function Comment({ comments, onComment }) {
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      onComment(newComment);
      setNewComment("");
    }
  };

  return (
    <>
      <h6 className="card-subtitle mb-2 text-muted">{comments.length} Comments</h6>
      {comments.map((comment) => (
        <div key={comment.id} className="mb-2">
          <b>{comment.username}</b>: {comment.text}
        </div>
      ))}
      <form onSubmit={handleCommentSubmit}>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}