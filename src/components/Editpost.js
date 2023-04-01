import React from "react";
import { MDBInput, MDBCheckbox, MDBBtn, MDBIcon } from "mdb-react-ui-kit";

export default function Editpost() {
  return (
    <div
      style={{
        maxWidth: "300px",
        borderRadius: "15px",
        marginTop: "250px",
        marginLeft: "750px",
      }}
    >
      <form style={{ maxWidth: "300px", borderRadius: "15px" }}>
        <MDBInput id="form4Example1" wrapperClass="mb-4" label="Title" />
        <MDBInput
          type="email"
          id="form4Example2"
          wrapperClass="mb-4"
          label="Image"
        />
        <MDBInput
          wrapperClass="mb-4"
          textarea
          id="form4Example3"
          rows={4}
          label="Description"
        />
        <MDBBtn
          type="submit"
          className="mb-4"
          // onClick={handleEdit}
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
