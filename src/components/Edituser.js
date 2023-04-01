import React, { useState } from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function Edituser() {
  const [newusername, setNewusername] = useState("");
  const [bio, setBio] = useState("");
  const [newpfp, setNewpfp] = useState("");

  function handleEdit() {
    e.preventDefault();
    const newdata = {
      username: newusername,
      bio: bio,
      profile_pic: newpfp,
    };
    fetch("http://localhost:3000/users", {
      method: "PATCH",
      body: JSON.stringify(newdata),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
        .then((res) => res.json())
        .then(),
    });
  }

  function updateCharity(updatedCharity) {
    const updatedChar = charities.map((charity) => {
      if (charity.id === updatedCharity.id) {
        return updatedCharity;
      } else return charity;
    });
    setCharities(updatedChar);
  }

  return (
    <div style={{ marginLeft: "40%", marginTop: "250px" }}>
      <form style={{ maxWidth: "300px" }}>
        <MDBInput
          id="form4Example1"
          wrapperClass="mb-4"
          label="Username"
          onChange={(e) => setNewusername(e.target.value)}
        />
        <MDBInput
          type="text"
          id="form4Example2"
          wrapperClass="mb-4"
          label="Bio"
          onChange={(e) => setBio(e.target.value)}
        />
        <MDBInput
          wrapperClass="mb-4"
          textarea
          id="form4Example3"
          rows={4}
          label="Bio"
          onChange={(e) => setBio(e.target.value)}
        />

        <MDBBtn
          type="submit"
          className="mb-4"
          onClick={handleEdit}
          block
          style={{
            maxWidth: "100px",
            marginLeft: "115px",
            backgroundColor: "#d03206",
          }}
        >
          <MDBIcon fas icon="save" />
        </MDBBtn>
      </form>
    </div>
  );
}
