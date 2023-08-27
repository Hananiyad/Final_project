import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { categoryFilter, locationFilter } from '../../Utils/staticData';
import Slider from '@mui/material/Slider';
import'../style';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Category"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <InputLabel id="demo-select-small-label">Location</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={age}
        label="Location"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
    
    <InputLabel>Rooms</InputLabel>
      <Input
        className={classes.inputNum}
        type="number"
        name="rooms"
        onChange={onChange}
        value={roomValue}
        variant="outlined"
      />
        <InputLabel>Price </InputLabel>
      <Slider
        className={classes.slider}
        name="price"
        onChange={handlePrice}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        value={priceValue}
        min={50}
        max={900}
        variant="outlined"
      />
    </div>
    
  );
}



