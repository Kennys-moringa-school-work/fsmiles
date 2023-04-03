// import React, { useEffect, useState } from "react";
// import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

// export default function Edituser({user}) {
//   const [newusername, setNewusername] = useState("");
//   const [bio, setBio] = useState("");
//   const [newpfp, setNewpfp] = useState("");
//   const [users,setUsers] = useState([])

//   useEffect(() => {
//     fetch('https://mysmile.onrender.com')
//     .then(res => res.json())
//     .them(data => setUsers(data))
//   },[])


//   function handleEdit() {
//     e.preventDefault();
//     const newdata = {
//       username: newusername,
//       bio: bio,
//       profile_pic: newpfp,
//     };
//     fetch(`https://mysmile.onrender.com/users/${user.id}`, {
//       method: "PATCH",
//       body: JSON.stringify(newdata),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       }
//       .then(response => {
//         if (response.ok) {
//           // update the post in the list of posts
//           const updatedUser = users.map(user => {
//             if (user.id === user.id) {
//               return { ...users, title, description, image };
//             }
//             return post;
//           });
//           setPosts(updatedPosts);
//           setShowEditForm(false);
//           setEditingPost(null);
//         } else {
//           throw new Error('Failed to update post');
//         }
//       })
//     });
//   }
  

//   return (
//     <div style={{ marginLeft: "40%", marginTop: "250px" }}>
//       <form style={{ maxWidth: "300px" }}>
//         <MDBInput
//           id="form4Example1"
//           wrapperClass="mb-4"
//           label="Username"
//           defaultValue={user.username}
//           onChange={(e) => setNewusername(e.target.value)}
//         />
//         <MDBInput
//           type="text"
//           id="form4Example2"
//           wrapperClass="mb-4"
//           label="Bio"
//           defaultValue={user.bio}
//           onChange={(e) => setBio(e.target.value)}
//         />
//         <MDBInput
//           wrapperClass="mb-4"
//           textarea
//           id="form4Example3"
//           rows={4}
//           label="Profile pic"
//           defaultValue={user.profile_pic}
//           onChange={(e) => setNewpfp(e.target.value)}
//         />

//         <MDBBtn
//           type="submit"
//           className="mb-4"
//           onClick={handleEdit}
//           block
//           style={{
//             maxWidth: "100px",
//             marginLeft: "115px",
//             backgroundColor: "#d03206",
//           }}
//         >
//           <MDBIcon fas icon="save" />
//         </MDBBtn>
//       </form>
//     </div>
//   );
// }
