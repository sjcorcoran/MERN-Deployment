// this component will hold the form that we use to view all the pets
import React, {useState, useEffect} from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Allpets =(props) => {
    const [pet, setpet] = useState([]);

    const pullpet = () => {
        axios.get("http://localhost:8000/api/pets")
         .then(res => {
           console.log(res);
           setpet(res.data)
         })
         .catch(err => console.log(err))
      }


    useEffect(() => {
        pullpet();
       }, []);

    return (
        <table className="table bg-light  text-dark">
        <thead>
        <tr> 
          <th> Title </th>
          <th> Type </th>
          <th> description </th>
          <th> actions</th>
        </tr>
        </thead>
         
        <tbody>
          {pet.map(onepet =>
          <tr key={onepet._id}>
            <td> {onepet.name} </td>
            <td> {onepet.type} </td>
            <td> {onepet.description}</td>
            <td>
                <button className="btn btn-info "><Link className="text-light" to={"/view/" +onepet._id}> View Pet  </Link> </button>
                <button className="btn btn-success"><Link className="text-light" to={"/edit/" +onepet._id}> Edit Pet   </Link> </button>
               
               </td>
          </tr>
          )}
        </tbody>
        
      </table>


    )
}

export default Allpets;