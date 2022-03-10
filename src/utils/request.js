import axios from 'axios';

export const app=axios.create({
    baseURL:"https://3001-mukundakamatham-formback-om63otpxtaa.ws-us34.gitpod.io/form",
  
})

//import {app }from "../../utils/request";
/*app
 .post("/",{data})
    .then((res) => {
      dispatch(addCARTSuccess(res.data));
      dispatch(getcart());
    })
    
    
    
     app.get("/cart/",{ headers: {
    'Authorization': 'Bearer ' + token
  }}).then((res) => {
      dispatch(getCARTSuccess(res.data));
    })*/