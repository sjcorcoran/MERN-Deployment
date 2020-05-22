import React, {useState} from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Newpet = (props) =>{
    
    const[name, setname] = useState("");
    const[type, settype] = useState("");
    const[description, setdescription] = useState("");
    const[skillone, setskillone] =useState("")
    const[skilltwo, setskilltwo] =useState("")
    const[skillthree, setskillthree] =useState("")
    const[errors, seterrors] = useState({});

    const addpet = (e) => {
        //  here we acces the database and pass in the new product below. this will consist of the information being passed through the form created. 
         e.preventDefault();
         const newpet = {name, type, description, skillone, skilltwo, skillthree}
         axios.post("http://localhost:8000/api/pets", newpet)
          .then(res => {
            console.log(res.data);
            if(res.data.errors){
              seterrors(res.data.errors);
            }
            else{
              navigate('/');
            }
            // pullproduct();   -- no longer able to pull this here unless I build it
            // calling pull product above here allows the page to update with the updated list of products without having to refresh the fucking page. if we kept it in the app.js  
           
      
          })
          .catch(err => console.log(err))
      
       }


    return(
        
        
        <form onSubmit={addpet}>
            <p> Pet Name: <input type="text" onChange={ e => setname(e.target.value)} /> </p>
            {
              errors.title ? 
              <p className="text-danger"> {errors.title.message}</p>:
              ""
            }
            <p> Type: <input type="text" onChange={ e => settype(e.target.value)}/> </p>
            {
              errors.price ? 
              <p> {errors.price.message}</p>:
              ""
            }
            <p> description: <input type="text" onChange={ e => setdescription(e.target.value)}/> </p>
            {
              errors.description ? 
              <p className="text-danger"> {errors.description.message}</p>:
              ""
            }
            <p> skill one: <input type="text" onChange={ e => setskillone(e.target.value)}/> </p>
            <p> skill two: <input type="text" onChange={ e => setskilltwo(e.target.value)}/> </p>
            <p> skill three: <input type="text" onChange={ e => setskillthree(e.target.value)}/> </p>

            <button className ="btn btn-primary" type="Submit"> Submit</button> 
            
          </form>
    )
}


export default Newpet;