import React from 'react'
import {Grid,Typography} from'@material-ui/core';
import {useStyles}from '../../Bodycomponents/Bodystyles';

const ProfileData=({label,pageTitle}) =>{
    const classes= useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='body2' className={classes.profileSubtitle}>OVERVIEW</Typography>
                <Typography variant='h5' className={classes.profileTitle}>User Profile</Typography>
            </Grid>
        </Grid>
    );
};
export default ProfileData;

