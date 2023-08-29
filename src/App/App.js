import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing';
import Layout from '../pages/layout';
import Detail from '../pages/DetailsHouse';
import Houses from '../pages/Houses';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';
import SearchBar from '../Components/SearchBar';
import Login from '../pages/Login';
import Register from '../pages/Register';




function App() {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route exact path='/' element={<Landing/>}/>
        <Route exact path='/details/:id' element={<Detail/>}/>
        <Route exact path='/houses' element={<Houses/>}/>
        <Route exact path='/about' element={<AboutUs/>}/>
        <Route exact path='/search' element={<SearchBar/>}/>
        <Route  exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='*' element={<NotFound/>}/>
       
  
      </Routes>
   
    </Layout>
    </Router>
  );
}

export default App;