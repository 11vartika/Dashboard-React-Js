import React from 'react'
import { Typography,Button, CardActionArea } from '@material-ui/core';
import './Error.styles.css';
import { useStyles } from "../../Bodycomponents/Bodystyles";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function Error() {
    const classes = useStyles();
    return (
        <div className={classes.error} >
           
            <Typography  className={classes.texterror}> 500</Typography>
            <Typography  className={classes.texterror1}>Something went wrong!</Typography>    
        <Typography  className={classes.texterror2}>There was a problem on our end. Please try again later.</Typography>
       <CardActionArea>
          
       <Button  className={classes.btn} size="small"> 
       <ArrowBackIcon/>
       <Typography style  ={{fontSize:"15px"}}>Go Back </Typography>
       </Button>
       </CardActionArea>
        </div>
    )
}

export default Error;
