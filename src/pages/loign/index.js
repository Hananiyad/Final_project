// import React, { useContext, useState } from 'react';
// // import { useHistory } from 'react-router-dom';
// import Alert from '@material/Alert';
// import Snackbar from '@mui/material/Snackbar';
// import Typography from '@mui/material/Typography';
// import validationSchema from '../../Utils/validations/login';
// import Input from '../../Components/Input';
// import './style.css';

// function Login() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isLoading, setIsLoading] = useState();
//     const [error, setError] = useState();
//     const [open, setOpen] = useState(false);


//     const clear = () => {
//         setEmail('');
//         setPassword('');
//         setError(null);
//       };
//       const handleClose = (event, reason) => {
//         if (reason === 'clickaway') {
//           return;
//         }
//         setOpen(false);
//       };
    
//       const handleEmail = (event) => {
//         setEmail(event.target.value);
//       };
    
//       const handlePassword = (event) => {
//         setPassword(event.target.value);
//       };
    
//       const handleSubmit = async (event) => {
//         try {
//           event.preventDefault();
//           setIsLoading(true);
//           const userData = {
//             email,
//             password,
//           };
    
//           await validationSchema.validate(userData, {
//             abortEarly: false,
//           });
//           await Axios.post('/api/v1/login', userData);
//           clear();
//           setIsLoading(false);
//           setIsAuth(true);
//           setOpen(true);
//           history.push(HOME_PAGE);
//         } catch (err) {
//           setError(err.response ? err.response.data.message : err.errors[0]);
//           setIsLoading(false);
//         }
//       };


// return (
//     <div id='root'>
//       <div id='img'>
//         <SearchImg id='logo' width="250" />
//       </div>
//       <div id='formSection'>
//         <Typography id='header'>
//           Sign In
//         </Typography>
//         <form id='form'>
//           <Input
//            id='input'
//             variant="outlined"
//             onChange={handleEmail}
//             value={email}
//             type="email"
//             label="Email"
//             required
//           />
//           <Input
//             type="password"
//             id='inputt'
//             variant="outlined"
//             onChange={handlePassword}
//             value={password}
//             label="Password"
//             required
//           />
//           <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
//             <Alert onClose={handleClose} severity="success">
//               Login Successfully!
//             </Alert>
//           </Snackbar>
//           {error && (
//             <Alert id='alert' severity="error">
//               {error}
//             </Alert>
//           )}
//           <Button
//             id='button'
//             variant="contained"
//             color="primary"
//             onClick={handleSubmit}
//           >
//             {isLoading ? <Loading color="secondary" /> : 'LogIn'}
//           </Button>
//         </form>
//       </div>
//     </div>
//   );
//           }
// export default Login;          

