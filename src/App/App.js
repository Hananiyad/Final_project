import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../pages/landing';
import Layout from '../pages/layout';
import Detail from '../pages/DetailsHouse';
import Houses from '../pages/Houses';
import AboutUs from '../pages/AboutUs';
import NotFound from '../pages/NotFound';




function App() {
  return (
    <Layout>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/details/:id' element={<Detail/>}/>
        <Route path='/search' element={<Houses/>}/>
        <Route path='/aboutas' element={<AboutUs/>}/>
        <Route path='*' element={<NotFound/>}/>
       
        {/* <Route path='/Houses/:'' element={<Houses/>} */}
      </Routes>
   
    </Router>
    </Layout>
  );
}

export default App;