import { TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent } from 'react'; // Import FormEvent type from react


const Signin = () => {
  const [mail, setMail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Signin';
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mail, pass);

    axios.get(`http://localhost:3001/user?mail=${mail}&pass=${pass}`)
      .then(res => {
        if (res.data.length > 0) {
          alert("Login Successful");
          navigate('/client');
        } else {
          alert('Invalid username or password');
        }
      })
      .catch(err => {
        console.error(err);
        alert('An error occurred during login');
      });
  };
  
  return (
    <div className="divi">
      <div id="ch2" className="division">
        <form onSubmit={handleSubmit} id="ch2" className="division">
          <TextField variant="outlined" label="Mail ID" className="tf" value={mail} onChange={(event) => { setMail(event.target.value) }} required /><br />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            value={pass}
            onChange={(event) => { setPass(event.target.value) }}
            autoComplete="current-password"
            variant="outlined"
          /><br />
          <Link to="/signup">Don't Have an Account? Sign Up</Link><br />
          <button className="submit" type='submit'>Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Signin;
