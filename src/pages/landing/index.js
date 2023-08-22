import React  from "react";
import {useState,useEffect} from 'react'
import Typography from '@mui/material/Typography';
import CustomizedInputBase from '../../Components/SearchBar';
import ImgMediaCard from '../../Components/Cards'
import CardContainer from "../../Components/CardContainer";
import'./style.css';

const Landing =()=>{
    const[house , setHouse] = useState([]);
    const getHouse =  async ()=>{
        try{
        const response = await fetch("https://my-json-server.typicode.com/ansam-mohammed/api/houses");
        console.log(response,"res");
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
        const data = await response.json();
        console.log(data,"data");
          setHouse(data);
        }
        catch (error) {
            console.error('There was a problem with the fetch operation:', error);
          }
    };
   useEffect(()=>{
    getHouse();
   },[])
   
    return(
        
    <>
     <div id='hearder'>
      {console.log(house, "hhoi")}
     <Typography  variant="h3"
      component="h2"
       textAlign="center"
       id="hero"
       >Let Find a Home Thats Perfact for you</Typography>
       <CustomizedInputBase id='search'/>
      </div>
      
      
      <div id='housesSection'>
              <Typography variant="h2" id='sectionTitle'>
              Arrivals
              </Typography>
              {/* <h1>tittle</h1> */}
              </div>
              <ImgMediaCard/>
      <CardContainer houses={house}/>
        </>
    )

}
export default Landing 