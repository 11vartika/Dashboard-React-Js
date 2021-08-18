import React from 'react'
import {Box,Grid,Typography} from '@material-ui/core';
import {useStyles} from "../../Bodycomponents/Bodystyles";

function Footer() {
    const classes = useStyles();
    return (
        <footer>
           <Box  className={classes.footer}>
               <Grid container>
                   <Grid item xs ={6} sm={1}>
                       <Typography >Contact</Typography>
                   </Grid>
                   <Grid item xs ={6} sm={1}>
                       <Typography>Blog</Typography>
                   </Grid>
                   <Grid item xs ={6} sm={6}>
                       <Typography>Post</Typography>
                   </Grid>
                  
                   <Grid item xs ={6} sm={4}>
                       <Typography style={{color:"#818ea3"}}> Copyright ©  ' {new Date().getFullYear()} DesignRevision</Typography>
                   </Grid>
               </Grid>
           </Box>

       </footer>
    );   
}
export default Footer;
