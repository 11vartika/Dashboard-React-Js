import React from 'react'
import ProfileData from './ProfileData';
import {useStyles} from "../../Bodycomponents/Bodystyles";
import {Box,Card, CardMedia,Grid,CardActionArea,Typography,TextField, CardContent,Button} from '@material-ui/core'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function UserProfile() {
    const classes=useStyles();
    return (
        <Box>
            <ProfileData label='Components' profileTitle='blog post'/>
            <Grid container spacing={4} >
           <Grid item sm={3} style={{marginLeft:"20px"}} >
           <Card className={classes.cardProfile}>
            <CardActionArea>
                <CardMedia   className={classes.mediaprofile}
                image ="https://i.pinimg.com/564x/6f/de/85/6fde85b86c86526af5e99ce85f57432e.jpg"
            />    
            <Typography  className={classes.brooks}>Sierra Brooks</Typography>  
            <Typography className={classes.manager}> Project Manager</Typography>
           
            <hr></hr>
            <div className={classes.workload}>
        <Typography>Workload</Typography>
            </div>
            <hr></hr>
            <div className={classes.description}>
                <Typography style={{marginLeft:"50px",justifyContent:"center" ,color:"#868e96",marginTop:"20px",}}> Description</Typography>
                <Typography style={{marginLeft:"50px",justifyContent:"center" ,color:"#5a6169",marginTop:"20px",}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eaque, quidem, commodi soluta qui quae minima obcaecati quod dolorum sint alias, possimus illum assumenda eligendi cumque?
                </Typography>
            </div>
             </CardActionArea>
             </Card>
             </Grid>

             <Grid item sm={3} style={{marginLeft:"120px"}} >
             <Card className={classes.cardProfile1}>
                 <Typography className={classes.account}>Account Details</Typography>
                 <hr></hr>
                 <CardContent>
                     <Grid container spacing={1}>
                    <Grid xs={12} sm={6} item >
                        <Typography>First Name</Typography>
                        <TextField  placeholder="First name" variant="outlined" style={{width:"250px",height:"30px"}}/>
                    </Grid>
                    <Grid xs={12} sm={6} item >
                        <Typography>Last Name</Typography>
                        <TextField  placeholder="last name" variant="outlined" style={{width:"250px",height:"30px"}}/>
                    </Grid>
                    <Grid xs={12} sm={6} item style={{marginTop:"25px"}}>
                        <Typography>Email</Typography>
                        <TextField  placeholder="email" variant="outlined" style={{width:"250px",height:"30px"}}/>
                    </Grid>
                    <Grid xs={12} sm={6} item style={{marginTop:"25px"}}>
                        <Typography>Password</Typography>
                        <TextField  placeholder="password" variant="outlined" style={{width:"250px",height:"30px"}}/>
                    </Grid>
                    <Grid xs={12}  item style={{marginTop:"25px"}}>
                        <Typography>Address</Typography>
                        <TextField  placeholder="address" variant="outlined" style={{width:"550px",height:"30px"}}/>
                    </Grid>
                    <Grid xs={6} sm={4} item style={{marginTop:"25px"}}>
                        <Typography>City</Typography>
                        <TextField  placeholder="City" variant="outlined" style={{width:"150px",height:"30px"}}/>                        
                    </Grid>
                    <Grid xs={6} sm={4} item style={{marginTop:"25px"}}>
                        <Typography>State</Typography>
                        <TextField  placeholder="state" variant="outlined" style={{width:"150px",height:"30px"}}/>                        
                    </Grid>
                    <Grid xs={6} sm={4} item style={{marginTop:"25px"}}>
                        <Typography>Zip</Typography>
                        <TextField  placeholder="zip" variant="outlined" style={{width:"150px",height:"30px"}}/>                        
                    </Grid>

                    <Grid xs={12}  item style={{marginTop:"25px"}}>
                        <Typography>Description</Typography>
                        <TextareaAutosize aria-label="minimum height" minRows={6} style={{width :"550px"}}  />                        
                    </Grid>
                   <Button className={classes.update}>Update Account</Button>
                     </Grid>
                 </CardContent>
                 </Card>
                 </Grid>
             </Grid>
             </Box>
    )
   

}

export default UserProfile;

