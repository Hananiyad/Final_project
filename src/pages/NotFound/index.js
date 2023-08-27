import React from 'react';
// import { useHistory } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ReactComponent as Image } from '../../Utils/images/notFound.svg';
// import { HOME_PAGE } from '../../Utils/routes.constant';
import {Link} from 'react-router-dom'
import './style.css'

function NotFound() {
   // const history = useHistory();
  
    // const handleClick = () => {
    //   history.push(HOME_PAGE);
    // };

    return (
        <div id='root'>
          <Typography id='num'>
            404
          </Typography>
          <Typography id='text'>
             PAGE NOT FOUND
          </Typography>
          <Image id='img'/>
          <Button
            id='button'
            variant="outlined"
            color="secondary"
           
          >
           <Link to='/'>Back To Home</Link>
          </Button>
        </div>
      );
    }
    
    export default NotFound;