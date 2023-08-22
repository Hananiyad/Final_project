import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BedIcon from '@mui/icons-material/Bed';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './style.css'


export default function MediaCard({house}) {
    const { title, bathroom,bedroom,location,description,price,image  } = house;
    return (
    <Card sx={{ maxWidth: 345 }}  id="root">
      <CardMedia
        sx={{ height: 140 }}
        image= {image}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
       {title} {price}
        </Typography>
        <Typography variant="body2" color="primary.main">
          <BathtubIcon/> {bathroom}
          <BedIcon/> {bedroom}
           <LocationOnIcon/> {location}
           </Typography>
           <Typography variant="body2" color="primary.main">
           </Typography>
          <Typography variant="body2" color="primary.main">
   {description}
    </Typography>
      </CardContent>
      <CardActions>
      <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}