
import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepFour = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);

  const submitFormData = (e) => {
    e.preventDefault();

    if ( validator.isEmpty(values.experience_level)) {
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
        <Card.Text>Question 4: How would you describe your current Yoga practice?

</Card.Text>

          <Form onSubmit={submitFormData}>
           
            <Form.Group className="mb-3">

                
            <Form.Check
        inline
        value="Beginner"
        label="Beginner"
        name="group1"
        type="checkbox"
        defaultChecked={(values.experience_level==="Beginner")?"checked":""}

        onClick={handleFormData("experience_level")}
        id={`inline-${"checkbox"}-1`}
      />
      <Form.Check
        inline
        value="Intermediate"
        label="Intermediate"
        name="group1"
        type="checkbox"
        defaultChecked={(values.experience_level==="Intermediate")?"checked":""}

        onClick={handleFormData("experience_level")}
        id={`inline-${"checkbox"}-2`}
      />
    
    <Form.Check
        inline
        value="Advanced"
        label="Advanced"
        name="group1"
        defaultChecked={(values.experience_level==="Advanced")?"checked":""}

        type="checkbox"
        onClick={handleFormData("experience_level")}
        id={`inline-${"checkbox"}-3`}
      />

              {/* {error ? (
                <Form.Text style={{ color: "red" }}>
                  This is a required field
                </Form.Text>
              ) : (
                ""
              )} */}
            </Form.Group>
           
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

export default StepFour;