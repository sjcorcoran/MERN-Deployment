import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Router, Link} from "@reach/router";
import axios from "axios";
import Allpets from './Components/Allpets'
import Newpet from './Components/Addpet'
import Petinfo from './Components/viewpet';
import Editpet from './Components/Editpet'




function App() {
  return (
    <div className="container">
      <h1> Welcome to (not evil) "Animal Farm"</h1>
      <Link to="/new"> <button className="btn btn-success"> Add Pet </button>  </Link>
      <Link to="/"> <button className="btn btn-primary"> Home yo </button>  </Link>

      <Router>
        <Allpets path ="/"> </Allpets>
        <Newpet path ="/new"></Newpet> 
        <Petinfo path ="/view/:_id"> </Petinfo>
        <Editpet path ="edit/:_id"> </Editpet>


      </Router>
      
    </div>
  );
}

export default App;
