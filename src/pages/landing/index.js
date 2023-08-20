import React  from "react";
import Typography from '@mui/material/Typography';
import SearchBar from '../../Components/SearchBar';
import ImgMediaCard from '../../Components/Cards'
import'./style.css';

const Landing =()=>{
    return(
    <>
     <div id='hearder'>
     <Typography  variant="h3"
      component="h2"
       textAlign="center"
       id="hero"
       >Let Find a Home Thats Perfact for you</Typography>
       
      </div>
      <SearchBar/>
      <div id='housesSection'>
              <Typography variant="h2" id='sectionTitle'>
              Arrivals
              </Typography>
              </div>
              <ImgMediaCard/>
     
    
    </>
    )

}
export default Landing 