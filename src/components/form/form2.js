import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepTwo = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);
  
  const submitFormData = (e) => {
    e.preventDefault();

    if ( validator.isEmpty(values.email)||ValidateEmail(values.email)) {
      setError(true);
    } else {
      nextStep(1);
    }
  };
  function ValidateEmail(mail) 
  {
   if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
    {
      return (false)
    }
      alert("You have entered an invalid email address!")
      return (true)
  }
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <Card.Text>Question 2: Thanks, {values.Name}. What’s the best email address to reach you at?
</Card.Text>

          <Form onSubmit={submitFormData}>
           
            <Form.Group className="mb-3">

                
              <Form.Label>Email</Form.Label>
              <Form.Control
                style={{ border: error ? "2px solid red" : "" }}
                type="email"
                defaultValue={values.email}
                placeholder="email"
                onChange={handleFormData("email")}
              />
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}><Button variant="primary" type="submit">
                ok
              </Button>
              </div>
              <br>
</br>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="primary" onClick={()=>prevStep(1)}>
               <b>{"<"}</b>
              </Button>


              <Button variant="primary" type="submit">
              <b>{">"}</b>
              </Button>
            </div>


          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepTwo;