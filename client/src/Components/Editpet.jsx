import React, {useState, useEffect} from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Editpet = (props) =>{
    
    const[name, setname] = useState("");
    const[type, settype] = useState("");
    const[description, setdescription] = useState("");
    const[skillone, setskillone] =useState("")
    const[skilltwo, setskilltwo] =useState("")
    const[skillthree, setskillthree] =useState("")
    const[errors, seterrors] = useState({});


    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props._id}`)
        .then(res => {
          console.log(res);
          setname(res.data.name)
          settype(res.data.type)
          setdescription(res.data.description)
          setskillone(res.data.skillone)
          setskilltwo(res.data.skilltwo)
          setskillthree(res.data.skillthree)
          console.log(props);
        })
        .catch(err => console.log(err));
   }, []);

    const updatepet = (e) => {
         e.preventDefault();
         const fixedpet = {name, type, description, skillone, skilltwo, skillthree};
         axios.put(`http://localhost:8000/api/pets/${props._id}`, fixedpet )
          .then(res => {
            console.log(res.data);
            if(res.data.errors){
              seterrors(res.data.errors);
            }
            else{
              navigate('/');
            }

      
          })
          .catch(err => console.log(err))
      
       }


    return(
        
        
        <form onSubmit={updatepet}>
            <p> Pet Name: <input type="text" onChange={ e => setname(e.target.value)} value={name}/> </p>
            {
              errors.name ? 
              <p className="text-danger"> {errors.name.message}</p>:
              ""
            }
            <p> Type: <input type="text" onChange={ e => settype(e.target.value)} value={type}/> </p>
            {
              errors.type? 
              <p className="text-danger"> {errors.type.message}</p>:
              ""
            }
            <p> description: <input type="text" onChange={ e => setdescription(e.target.value)} value={description}/> </p>
            {
              errors.description ? 
              <p className="text-danger"> {errors.description.message}</p>:
              ""
            }
            <p> skill one: <input type="text" onChange={ e => setskillone(e.target.value)}  value={skillone}/> </p>
            <p> skill two: <input type="text" onChange={ e => setskilltwo(e.target.value)} value={skilltwo}/></p>
            <p> skill three: <input type="text" onChange={ e => setskillthree(e.target.value)} value={skillthree}/> </p>

            <button className ="btn btn-primary" type="Submit"> Submit</button> 
            
          </form>
    )
}


export default Editpet;