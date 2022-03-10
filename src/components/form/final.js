import React,{useState,useEffect} from "react";
import { Button, Card } from "react-bootstrap";
import {app }from "../../utils/request";
const Final = ({ settostart }) => {
const [data,setData] = useState([]);
useEffect(() =>{
  getData();
},[]);
const handleclick=async (id)=>{
await app.delete(`/${id}`)
await  app.get("/").then((res)=>setData(res.data)).then(()=>console.log(data));

}
const handleform=()=>{
  settostart()
}
const getData =async ()=>{
await  app.get("/").then((res)=>setData(res.data)).then(()=>console.log(data));
}
   return (
    <>
    {data.length>0&&data.map((e)=>(
        <Card key={e._id} style={{ marginTop: 10, textAlign: "left" }} className="text-center">
        <Card.Header>Form Details</Card.Header>
              <Card.Body>
      
               
                <p>
                  <strong>Name :</strong> {e.Name}{" "}
                </p>
                <p>
                  <strong>Gender :</strong> {e.Gender}{" "}
                </p>
                <p>
                  <strong>dob :</strong> {e.dob}{" "}
                </p>
                <p>
                  <strong>Email :</strong> {e.email}{" "}
                </p>
                <p>
                  <strong>experience :</strong> {e.experience}{" "}
                </p>
                {e.experience_level? <p>
                  <strong>experience_level :</strong> {e.experience_level}{" "}
                </p>:null}
                <p>
                  <strong>fitness_level :</strong> {e.fitness_level}{" "}
                </p>
                <p>
                  <strong>Comments :</strong> {e.Comments}{" "}
                </p>
              </Card.Body>
              <Card.Footer>
<Button onClick={()=>handleclick(e._id)}>delete form</Button>
                </Card.Footer>
            </Card>
    ))}
    {data.length===0?
    <Card className="text-center"  style={{ marginTop: 100, textAlign: "center" }}>
      
      
      <Card.Body>
      
      <Card.Text>
      nothing to display  to fill the form  
      </Card.Text>
      <Button onClick={handleform}>click me</Button> 

    </Card.Body>
  </Card>
      
      :null
    }
    </>
  );
};

export default Final;