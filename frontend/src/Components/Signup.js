import '../Assets/Signin.css'
import { TextField } from "@mui/material"
import { useNavigate } from 'react-router-dom';
import {React,useState, useEffect} from 'react';
import axios from 'axios';

export const Signup=()=>{
    const navigate=useNavigate();
    const[web,setweb]=useState('');
    const[name,setname]=useState('');
    const[mail,setmail]=useState('');
    const[pass,setpass]=useState('');
    const[no,setno]=useState('');
    const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(mail,pass)
      axios.post( 'http://localhost:3001/user',{
        web,name,mail,no,pass
      })
      .then(res=>{console.log(res)})
      .catch(err=>{console.log(err)})
      navigate('/signin')
    }
    useEffect(()=>{
      document.title='SignUp';
    })
    return(
        <div className="divi">
        <form onSubmit={handleSubmit}>
          <div id="ch1" className="division">
            <TextField variant="outlined" id="standard-adornment-password"label="Website Address" required value={web} onChange={(event)=>{setweb(event.target.value)}}/><br/>
            <TextField variant="outlined" id="standard-adornment-password" label="Your Name" className="tf" required value={name} onChange={(event)=>{setname(event.target.value)}}/><br/>
            <TextField variant="outlined" label="Mail ID" id="standard-adornment-password" required value={mail} onChange={(event)=>{setmail(event.target.value)}}/><br/>
            <TextField variant="outlined" label="Contact Number"  required value={no} onChange={(event)=>{setno(event.target.value)}}/><br/>
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="outlined"
              value={pass} onChange={(event)=>{setpass(event.target.value)}} />
              <br/>
              <button className="submit">Sign Up</button>
          </div>      
        </form>
      </div>   
    )
}