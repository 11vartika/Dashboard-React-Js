import React from 'react'
import {Grid,Typography} from'@material-ui/core';
import {useStyles}from '../../Bodycomponents/Bodystyles';

const PageHeader=({label,pageTitle}) =>{
    const classes= useStyles();
    return (
        <Grid container>
            <Grid item xs={12}>
                <Typography variant='body2' className={classes.pageSubtitle}>DASHBOARD</Typography>
                <Typography variant='h5' className={classes.pageTitle}>Blog Overview</Typography>
            </Grid>
        </Grid>
    );
};
export default PageHeader;