import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    axios.post('http://localhost:3001/register',{name,email,password}).then(result => {console.log(result)
        navigate('/login');
    }).catch(err => console.log(err));
    
    
  };

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            // value={formData.name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            // value={formData.email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="password" 
            name="password" 
            // value={formData.password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary mt-4">Register</button>
        </form>
        <Link to ="/login" className="btn btn-secondary mt-4 ms-3">Login</Link>
      
    </div>
  );
}

export default Signup;
