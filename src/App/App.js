import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from '../Pages/Landing';
import Details from '../Pages/DetailsHouse';
import Houses from '../Pages/Houses'
import AboutUs from '../Pages/AboutUs'
import Layout from '../Pages/Layout';
import NotFound from '../Pages/NotFound';


function App() {
  return (
    <Layout>
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/details/:id' element={<Details/>}/>
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