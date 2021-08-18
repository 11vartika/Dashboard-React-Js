import React from 'react'
import {Grid,Typography} from'@material-ui/core';
import {useStyles}from '../../Bodycomponents/Bodystyles';

const NewData =({label,pageTitle}) =>{
    const classes= useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='body2' className={classes.postSubtitle}>BLOG POSTS</Typography>
                <Typography variant='h5' className={classes.postTitle}>Add New Post
                </Typography>
            </Grid>
        </Grid>
    );
};
export default NewData;