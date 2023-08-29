import React, { useState } from 'react';

import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import validationSchema from '../../Utils/validations/login';
import Input from '../../Components/Input';
import Alert from '@mui/material/Alert';
import './style.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  


    const clear = () => {
        setEmail('');
        setPassword('');
    
      };
      const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
     
      };
    
      const handleEmail = (event) => {
        setEmail(event.target.value);
      };
    
      const handlePassword = (event) => {
        setPassword(event.target.value);
      };
    
      const handleSubmit = async (event) => {
        try {
          event.preventDefault();
          const userData = {
            email,
            password,
          };
    
          await validationSchema.validate(userData, {
            abortEarly: false,
          });
         
          clear();

        } catch (err) {
          setError(err.response ? err.response.data.message : err.errors[0]);
    
        }
      };


return (
    <div id='root'>
      <div id='img'>
        <SearchImg id='logo' width="250" />
      </div>
      <div id='formSection'>
        <Typography id='header'>
          Sign In
        </Typography>
        <form id='form'>
          <Input
           id='input'
            variant="outlined"
            onChange={handleEmail}
            value={email}
            type="email"
            label="Email"
            required
          />
          <Input
            type="password"
            id='inputt'
            variant="outlined"
            onChange={handlePassword}
            value={password}
            label="Password"
            required
          />
          <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success">
              Login Successfully!
            </Alert>
          </Snackbar>
        
          <Button
            id='button'
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
          }
export default Login;          

