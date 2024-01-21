import { TextField } from "@mui/material";
import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { MouseEvent } from 'react';


const Signup = () => {
  const [pass, setPass] = useState(true);
  const [web, setWeb] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [no, setNo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const visib = () => {
    setPass(!pass);
  };

  const { registerUser } = useAuth();

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    // Assuming you have state variables like web, name, mail, no, and password
    await registerUser({ web, name, mail, no, password });
    // Redirect to the client page after successful registration
    navigate('/client');
  };
  

  return (
    <div>
      <TextField variant="outlined" label="Website Address" /><br />
      {/* ... other form fields ... */}
      <button onClick={visib} className="eye1">{pass ? <Eye /> : <EyeOff />}</button>
      <TextField type={pass ? "password" : "text"} variant="outlined" label="Password" /><br />
      <p>Already An User?</p>
      <Link to="/signin">Sign In</Link><br />
      <button className="submit" onClick={handleSubmit}>Sign Up</button>
    </div>
  );
};

export default Signup;
