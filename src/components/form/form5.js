
import React, { useState } from "react";
import { Form,ButtonToolbar,ButtonGroup, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepFive = ({ nextStep, handleFormData1, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if ( validator.isEmpty(values.fitness_level)) {
      setError(true);
    } else {
      nextStep(1);
    }
  };
  const prev=()=>{
      if(values.experience==="YES"){
        prevStep(1)
      }else{
        prevStep(2)
      }
  }
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <Card.Text>Question 5: How would you evaluate your current fitness level?

</Card.Text>

          <Form onSubmit={submitFormData}>
           
            <Form.Group className="mb-3">

            <ButtonToolbar aria-label="Toolbar with button groups">
  
  <ButtonGroup value="1"   onClick={handleFormData1("1")} className="me-2 ms-5" aria-label="Third group">
    <Button>1</Button>
  </ButtonGroup>
  <ButtonGroup onClick={handleFormData1("2")}  value="2" className="me-2" aria-label="Third group">
    <Button>2</Button>
  </ButtonGroup>
  <ButtonGroup onClick={handleFormData1("3")}  value="3" className="me-2"  aria-label="Third group">
    <Button>3</Button>
  </ButtonGroup>
  <ButtonGroup  onClick={handleFormData1("4")} value="4" className="me-2"  aria-label="Third group">
    <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup onClick={handleFormData1("5")}  value="5" className="me-2"  aria-label="Third group">
    <Button>5</Button>
  </ButtonGroup>
  <ButtonGroup  onClick={handleFormData1("6")} value="6" className="me-2"  aria-label="Third group">
    <Button>6</Button>
  </ButtonGroup>
  <ButtonGroup onClick={handleFormData1("7")}  value="7" className="me-2"  aria-label="Third group">
    <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup onClick={handleFormData1("8")} value="8" className="me-2"  aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
  <ButtonGroup  onClick={handleFormData1("9")} value="9" className="me-2"  aria-label="Third group">
    <Button>9</Button>
  </ButtonGroup>
  <ButtonGroup onClick={handleFormData1("10")}  value="10" className="me-2"  aria-label="Third group">
    <Button>10</Button>
  </ButtonGroup>
</ButtonToolbar>
            </Form.Group>
            {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )}
           
            <div style={{ display: "flex", justifyContent: "space-around" }}><Button variant="primary" type="submit">
                ok
              </Button>
              </div>
              <br>
</br>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Button variant="primary" onClick={prev}>
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

export default StepFive;