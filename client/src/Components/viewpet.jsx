import React ,{useState, useEffect} from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Petinfo = (props) => {
    const[name, setname] = useState("");
    const[type, settype] = useState("");
    const[description, setdescription] = useState("");
    const[skillone, setskillone] =useState("")
    const[skilltwo, setskilltwo] =useState("")
    const[skillthree, setskillthree] =useState("")
    const[errors, seterrors] = useState({});
    const[likes, setlikes] = useState(0);
    


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

   const likepet = (e) => {
       const likedpet =1;
       setlikes(likedpet)
       
   }

   const adoptpet = (e) => {
       e.preventDefault();
       axios.delete(`http://localhost:8000/api/pets/${props._id}`)
       .then(res => {
           console.log(res);
           navigate("/")

           
       })
       .catch(err => console.log(err));
   }

   
      
    return (
        <div>
            <p> Name: {name} </p>
            <p> Type:  {type} </p>
            <p>Description :{description} </p>
            <p> Likes :{likes}</p>
            <ul>
                <li> {skillone} </li>
                <li> {skilltwo} </li>
                <li> {skillthree} </li>
            </ul>

            <button className="btn btn-warning" onClick={adoptpet}> Adopt {name} </button>
            <button id="mybutton" className="btn btn-primary" onClick={likepet} data-toggle="collapse"  value="like"> Like pet</button>


        </div>


    );
}

export default Petinfo;