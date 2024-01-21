import { Routes, Route, Navigate } from 'react-router-dom';
import { Signin } from './Components/Signin';
import { Signup } from './Components/Signup';
import { Home } from './Components/Home';
import "bootstrap/dist/css/bootstrap.min.css";
import Client_Form from './Components/Client.jsx';
import './Assets/Home.css';
import { HomeAfterSignin } from './Components/HomeAfterSignin.js';
import Ilness from './Components/Diagnosis.jsx';
import { useState } from 'react';

function App() {
  const [client, setClient] = useState({ name: "", age: 0, temperature: 0, sex: "male", symptoms: "fever", address: "" });

  return (
    <div>
    {/* <AuthProvider> */}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/home' element={<HomeAfterSignin />} />
          <Route path='/client' element={<Client_Form client={client} setClient={setClient} />} />
          <Route path='/illness' element={<Ilness client={client} />} />
          {/* other routes */}
        </Routes>
      </div>
    {/* </AuthProvider> */}
      
    </div>
  );
}

export default App;
