import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Layout from '../Pages/Layout';
import Detail from '../Pages/DetailsHouse';
import Houses from '../Pages/Houses';
import AboutUs from '../Pages/AboutUs';
import NotFound from '../Pages/NotFound';
import SearchBar from '../Components/SearchBar';
import Login from '../Pages/Login';
import Register from '../Pages/Register';




function App() {
  return (
    <Layout>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/houses' element={<Houses/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/search' element={<SearchBar/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='*' element={<NotFound/>}/>
       
  
      </Routes>
   
    </Router>
    </Layout>
  );
}

export default App;