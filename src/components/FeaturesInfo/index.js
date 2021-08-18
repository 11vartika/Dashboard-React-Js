import React from 'react'
import {Box,Grid,Typography,Card, CardContent} from'@material-ui/core';
import PageHeader from './Data';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import {useStyles} from "../../Bodycomponents/Bodystyles";
import { Button } from '@material-ui/core';
import {randomValueGenerator} from '../../utils/Fakeapi';

function Features() {
    const classes=useStyles();
    const DisplayData =[
        {
            label:"POSTS",
            value:randomValueGenerator({digit: 2390 }),
            icon:<ArrowDropUpIcon/>,
            iconlabel:"4.7%",
        },
        {
            label:"PAGES",
            value:randomValueGenerator({digit:182}),
            icon:<ArrowDropUpIcon/>,
            iconlabel:"12.4",
        },
        {
            label:"COMMENTS",           
             value:randomValueGenerator({digit:8147}),
            icon:<ArrowDropDownIcon style={{color:"red"}}/>,
            iconlabel:"3.8%" ,
        },
        {
            label:"NEW CUSTOMERS",
            value:randomValueGenerator({digit:29}),
            icon:<ArrowDropDownIcon style={{color:"red"}}/>,
            iconlabel:"2.71%",
        },
        {
            label:"SUBSCRIBERS" ,
            value:randomValueGenerator({digit:17281}),
            icon:<ArrowDropDownIcon style={{color:"red"}}/>,
            iconlabel:"2.4%",
        },
    ]
    return (<Box>
        <PageHeader label='Dashboard' pageTitle='blog Overview'/>

        <Grid container spacing={1}>
        {DisplayData.map((item,i)=>(
        <Grid item xs={8} sm={2}key={i}style={{marginLeft:"10px",padding:"5px",}} >
        <Card className={classes.card} >
            <CardContent key={i} className={classes.CardContent}>
            <Typography variant="body2" className={classes.cardlabel}> {item.label}
            </Typography>
            <Typography variant="h5" component ="h6" className={classes.cardTitle}>
                {item.value} </Typography>
            <Typography component='p' style={{textAlign:"center", marginBottom:"0px"}}>
                <Button size="small" className={classes.ratiobtn } startIcon={item.icon}> 
                {item.iconlabel} </Button>
            </Typography>
            </CardContent>
        </Card> 
        </Grid>
        ))}
        </Grid>
    </Box>       
    )
}
export default Features;
