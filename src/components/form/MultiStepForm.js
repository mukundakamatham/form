
import { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";

import StepOne from "./form1";
import StepTwo from "./form2";
import StepThree from "./form3";
import StepFour from "./form4";
import StepFive from "./form5";
import StepSix from "./form6";
import {Home} from "./home";
import Final from "./final";
function MultiStepForm(){
const [step, setstep] = useState(0);
  const [formData, setFormData] = useState({
    Name: "",
    dob:"" ,
    Gender:"Gender",
   
    experience:"",
    experience_level:"",
    email: "",
    fitness_level:"",
    Comments:""
  })
const settostart=()=>{
setstep(0);
setFormData({ Name: "",
dob:"" ,
Gender:"Gender",

experience:"",
experience_level:"",
email: "",
fitness_level:"",
Comments:""})
};

const settoupdate=(id)=>{
  setstep(1);
  setFormData(id.item)
}
  const nextStep = (i) => {
    setstep(step + i);
  };

  const prevStep = (i) => {
    setstep(step - i);
  };

  const handleInputData = input => e => {
    let value=""
    if(input==="Gender") {
value = e;
    }else{
      value=e.target.value
     // console.log(e,"a");
    }

    setFormData(prevState => ({
      ...prevState,
      [input]: value
  }));
  console.log(formData);
  }
  const handleInputData1 = input => e => {
    
    setFormData(prevState => ({
      ...prevState,
      "fitness_level": input
  }));
  console.log(formData);
  }

  switch (step) {
    case 0:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <Home nextStep={nextStep}  />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 1:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepOne nextStep={nextStep}  handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    // case 2 to show stepTwo form passing nextStep, prevStep, and handleInputData as handleFormData method as prop and also formData as value to the fprm
    case 2:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                <StepTwo nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData} />
              </Col>
            </Row>
          </Container>
        </div>
      );
    case 3:
      return (
        <div className="App">
          <Container>
            <Row>
              <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                {/* <Final values={formData}  /> */}
                <StepThree nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>
              </Col>
            </Row>
          </Container>
        </div>
      );
      case 4:
        return (
          <div className="App">
            <Container>
              <Row>
                <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                  <StepFour nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>
                </Col>
              </Row>
            </Container>
          </div>
        );
        case 5:
          return (
            <div className="App">
              <Container>
                <Row>
                  <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                    <StepFive nextStep={nextStep} prevStep={prevStep} handleFormData1={handleInputData1} values={formData}/>
                  </Col>
                </Row>
              </Container>
            </div>
          );
          case 6:
            return (
              <div className="App">
                <Container>
                  <Row>
                    <Col  md={{ span: 6, offset: 3 }} className="custom-margin">
                      <StepSix nextStep={nextStep} prevStep={prevStep} handleFormData={handleInputData} values={formData}/>
                    </Col>
                  </Row>
                </Container>
              </div>
            );
    // default case to show data
    default:
      return (
        <div >
         <Final settoupdate={settoupdate} settostart={settostart} values={formData}  /> 

        </div>
      );
  }
}

export default MultiStepForm;