import React, { useState } from "react";
import {Col, Row,Form, Card, Button, DropdownButton,Dropdown } from "react-bootstrap";
import validator from "validator";

const StepOne = ({ nextStep, handleFormData, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if (
      validator.isEmpty(values.Name) ||
       validator.isEmpty(values.dob)||
      values.Gender==="Gender"
    ) {
      setError(true);
    } else {
      nextStep(1);
    }
  };

  return (
    <div>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <Card.Text>Question 1: Would you like to provide us with the following details?
</Card.Text>

          <Form onSubmit={submitFormData}>
          <Row className="mb-3">

            <Form.Group as={Col} md="4">
              <Form.Label> Name</Form.Label>
              <Form.Control
                style={{ border: error&& (values.Name.length<1) ? "2px solid red" : "" }}
                name="firstName"
                defaultValue={values.Name}
                type="text"
                placeholder="Name"
                
                onInput={()=>setError(false)}
                onChange={handleFormData("Name")}
              />
              {error && (values.Name.length<1) ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
                  </Form.Group>
                
                  <Form.Group as={Col} md="4">


                  <Form.Label>Select Date</Form.Label>
            <Form.Control type="date" name="dob" 
            defaultValue={values.dob}
                            style={{ border: error&& (values.dob.length<1) ? "2px solid red" : "" }}

            placeholder="Date of Birth"
              onChange={handleFormData("dob")}/>
          {error && (values.dob.length<1) ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}


                   </Form.Group>
                <Form.Group as={Col} md="4">
                <Form.Label>Gender</Form.Label>
                     <DropdownButton

                                     id={`dropdown-variants-Success`}
                                     variant={error&& (values.Gender==="Gender") ?"Danger".toLowerCase():"Success".toLowerCase()}
                                     
                                     

    
      title= {values.Gender}
      onSelect={handleFormData("Gender")}
    >
      <Dropdown.Item eventKey="Male">Male</Dropdown.Item>
      <Dropdown.Item eventKey="Female">Female</Dropdown.Item>
      <Dropdown.Item eventKey="Others">Others</Dropdown.Item>
     
    </DropdownButton>
    {error&& (values.Gender==="Gender") ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
          </Form.Group> 
            </Row>
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>





      
    </div>
  );
};

export default StepOne;