import React from "react";
import { Card } from "react-bootstrap";

const Final = ({ values }) => {

    //destructuring the object from values
  const { Name,Gender,Comments, experience, experience_level,fitness_level, email,dob } = values;
  return (
    <>
      <Card style={{ marginTop: 100, textAlign: "left" }} className="text-center">
  <Card.Header>Form Details</Card.Header>
        <Card.Body>

         
          <p>
            <strong>Name :</strong> {Name}{" "}
          </p>
          <p>
            <strong>Gender :</strong> {Gender}{" "}
          </p>
          <p>
            <strong>dob :</strong> {dob}{" "}
          </p>
          <p>
            <strong>Email :</strong> {email}{" "}
          </p>
          <p>
            <strong>experience :</strong> {experience}{" "}
          </p>
          {experience_level.length>0? <p>
            <strong>experience_level :</strong> {experience_level}{" "}
          </p>:null}
          <p>
            <strong>fitness_level :</strong> {fitness_level}{" "}
          </p>
          <p>
            <strong>Comments :</strong> {Comments}{" "}
          </p>
        </Card.Body>
      </Card>
    </>
  );
};

export default Final;