import React, { useState } from "react";
import { Form, Card, Button,FloatingLabel } from "react-bootstrap";
import validator from "validator";
import {app }from "../../utils/request";


const StepSix = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);
  const submitFormData = async (e) => {
    e.preventDefault();

    if ( validator.isEmpty(values.Comments)) {
      setError(true);
    } else {
      console.log(values)
      if(values._id){
        app.patch(`/${values._id}`,values).then((res) => {console.log(res.data);}).then(() => {nextStep(1)})

      }else{
  app.post("/",values).then((res) => {console.log(res.data);}).then(() => {nextStep(1)})
      }
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <Card.Text>Question 6: Before you go, do you have any concerns or injuries you would like to share with us?
</Card.Text>

          <Form onSubmit={submitFormData}>
           
            <Form.Group className="mb-3">

                
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
    <Form.Control
      as="textarea"
      defaultValue={values.Comments}
      placeholder="Leave a comment here"
      onInput={handleFormData("Comments")}
      style={{ height: '100px' }}
    />
  </FloatingLabel>
              {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
            </Form.Group>
            <div style={{ display: "flex", justifyContent: "space-around" }}><Button variant="primary" type="submit">
                Submit
              </Button>
              </div>
              <br>
</br>
            <div className="d-flex justify-content-end" style={{ display: "flex", justifyContent: "right" }}>
              <Button variant="primary" onClick={()=>prevStep(1)}>
               <b>{"<"}</b>
              </Button>


             
            </div>


          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default StepSix;