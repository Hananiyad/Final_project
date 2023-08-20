import React  from "react";
import { InputBase, IconButton, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import './style.css'

function SearchBar({ value, onChange, onSearch }) {
    return (
      <Paper component="form" id='com'>
        <InputBase
          placeholder="Search About House"
          value={value}
          onChange={onChange}
          id="paper"
        />
        <IconButton type="submit" onClick={onSearch} id='icon' >
          <SearchIcon />
        </IconButton>
      </Paper>
      
    );
  }
  export default SearchBar 
  