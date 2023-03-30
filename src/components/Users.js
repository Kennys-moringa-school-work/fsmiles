import React, { useEffect, useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple
  } from 'mdb-react-ui-kit';


function Users(){
    const[users,setUsers] = useState([])
    useEffect(()=> {
        fetch("http://localhost:3000/users")
        .then(res => res.json)
        .then(user => setUsers(user))
    },[])

    return(
        <>
        {users.map((user) => {
            return(
                <MDBCard>
                <MDBCardImage src={user.profile_pic} position='top' alt='...' />
                <MDBCardBody>
                  <MDBCardTitle>{user.username}</MDBCardTitle>
                  <MDBCardText>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                  </MDBCardText>
                  <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
              </MDBCard>
            )
        })}
        </>
    )
}

export default Users