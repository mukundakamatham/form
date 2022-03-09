
import React, { useState } from "react";
import { Form, Card, Button } from "react-bootstrap";
import validator from "validator";


const StepThree = ({ nextStep, handleFormData, prevStep, values }) => {
  const [error, setError] = useState(false);


  const submitFormData = (e) => {
    e.preventDefault();

    if ( validator.isEmpty(values.experience)) {
      setError(true);
    } else {
        if(values.experience==="YES"){
      nextStep(1);
        }else{
            nextStep(2);
          

        }
    }
  };
  return (
    <>
      <Card style={{ marginTop: 100 }}>
        <Card.Body>
        <Card.Text>Question 3: Have you ever practised yoga before?
</Card.Text>

          <Form onSubmit={submitFormData}>
           
            <Form.Group className="mb-3">

                
            <Form.Check
        inline
        value="YES"
        label="YES"
        name="group1"
        type="radio"
        defaultChecked={(values.experience==="YES")?"checked":""}
        onClick={handleFormData("experience")}
        id={`inline-${"radio"}-1`}
      />
      <Form.Check
        inline
        value="NO"
        label="NO"
        name="group1"
        defaultChecked={(values.experience==="NO")?"checked":""}
        type="radio"
        onClick={handleFormData("experience")}

        id={`inline-${"radio"}-2`}
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

export default StepThree;