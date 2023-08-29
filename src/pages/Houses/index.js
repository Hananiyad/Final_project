import React,{useState,useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import { TextField,Slider } from '@mui/material';
import { locationFilter, categoryFilter } from '../../Utils/staitcadata';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import CardContainer from '../../Components/CardContainer';
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';

import './style.css'

const SearchBar =()=>{


  const [location, setLocation] = useState('');
  const [bedroom, setBedroom] = useState();
  const [bathroom, setBathroom] = useState();
  const [selectedType, setSelectedType] = useState('');
  const [price , setPrice] = useState(100);
  const [housesData, setHousesData] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);

      useEffect(() => {
      fetchData();
         }, []);

      const fetchData = async () => {
       
         try {
          const response = await fetch("https://my-json-server.typicode.com/ansam-mohammed/api/houses");

          if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setHousesData(data);
         
      } catch (error) {
          console.error('Error fetching data:', error);
         
      }

   

   
  };
  const handleSearch = (event) => {
      event.preventDefault();
      const filteredHouses = housesData.filter((house) =>
          (bedroom === undefined || house.bedroom === +bedroom))
          .filter((house) => (bathroom === undefined || house.bathroom === +bathroom))
          .filter((house) => (selectedType === '' || house.category === selectedType))
          .filter((house) => (price === undefined || house.price === +price))
          .filter((house) => (location === '' || house.location.toLowerCase().includes(location.toLowerCase())));
      setFilteredHouses(filteredHouses);
  };
  const handleResetFilter = () => {
      setLocation('');
      setBedroom('');
      setBathroom('');
      setPrice('')
      setFilteredHouses([]);
  };
  const handleBedroomChange = (event) => {
      setBedroom(event.target.value);
  };
  const handleBathroomChange = (event) => {
      setBathroom(event.target.value);
  };
  const handlePriceChange = (event) => {
    const newValue = parseInt(event.target.value);
    setPrice(newValue)
};

  

        
        return(
          <>
 <div id='headerr'>
            <div id='containerr' >
                             
                    <TextField sx={{ ml: 5, flex: 1, }}
                        placeholder="Location "
                        inputProps={{ 'aria-label': 'search google maps' }}
                        value={location} 
                        onChange={(event) => setLocation(event.target.value)}
                        id='loc' 
                    />
             
                   
              

            </div>
            <div  id='textf'>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bedroom'
                        value={bedroom}
                        name="bedroom"
                        type='number'
                        onChange={handleBedroomChange}
                        displayEmpty
                        id='bed'
                    />
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <TextField
                        placeholder='Bathroom'
                        value={bathroom}
                        name="bathroom"
                        type='number'
                        onChange={handleBathroomChange}
                        displayEmpty
                        id='bed'
                    />
                </FormControl>


                <FormControl sx={{ marginLeft: '20px' }}>
                  <FormLabel style={{color: '#FF8243',}}>Select Category:</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={selectedType}
                        onChange={(event) => setSelectedType(event.target.value)}
                        style={{
                            width:'auto',
                            height:'auto',
                            display:'flex',
                            flexWrap:'nowrap',
                            flexDirection:'row'
                        }}>
                        <FormControlLabel value="Apartment" control={<Radio />} label="Apartment" />
                        <FormControlLabel value="Roof" control={<Radio />} label="Roof" />
                    </RadioGroup>
                </FormControl>


                <FormControl sx={{ marginLeft: '20px' }}>
                <FormLabel style={{color: '#FF8243'}}>Price</FormLabel>
        

         <Slider style={{
           color:'#FF8243',
           width:'180px'
         }}
        onChange={handlePriceChange}
        valueLabelDisplay="auto"
        aria-label="range-slider"
        value={price}
        step={100}
        min={700}
        max={1500}
        variant="outlined"
      />   

      </FormControl>


          

            </div>

              <Button 
                    variant="contained"
                    onClick={handleSearch}
                    style={{
                        backgroundColor: '#EB9235',
                        marginTop:'60px',
                        color: 'white',
                        height: '50px',
                        width:'850px',
                        letterSpacing: '1px',
                        fontWeight: 'bolder',
                        textTransform:'capitalize'
                    }}
                >
                    Search
                    </Button> 
                 
            <div>
               <CardContainer houses={filteredHouses} />
            </div>
        </div>

          </>
        )


}


export default SearchBar;
