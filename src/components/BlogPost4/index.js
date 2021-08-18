import React from 'react'
import Box from '@material-ui/core/Box';
import { useStyles } from "../../Bodycomponents/Bodystyles";
import Card from '@material-ui/core/Card';
import './BlogPost4.styles.css';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import { Grid, CardMedia } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
function BlogPost4() {
    const classes = useStyles();

    return (
        <Box>
            <Grid container spacing={10} >
                <Grid item sm={5} style={{ marginLeft: "20px" ,marginTop:"20px"}} >
                    <Card className={classes.card3}>
                        <CardActionArea>
                            <CardContent>
                               <div className="img">
                               <CardMedia className={classes.image}
                               image ="https://images.unsplash.com/photo-1615022702095-ff2c036f3360?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwZ2lybHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"                               
                               />
                               <Avatar alt="" src="data:image/png;base64,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"
                                style = {{marginLeft:"5px",marginTop:"-65px"}}></Avatar>                                           
                               </div>
                               <div className="text">
                                   <Typography className={classes.content}  variant ="h6">Attention he extremity unwilling on otherwise cars backwards yet</Typography>
                                <Typography style={{fontSize:"14px",marginTop:"10px"}}>
                                Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...
                                </Typography>
                                <Typography style={{fontSize:"14px",marginTop:"10px"}}>
                                29 February 2019
                                </Typography>
                               </div>
                         </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>

                <Grid item sm={5} style={{ marginLeft: "30px" ,marginTop:"20px"}} >
                    <Card className={classes.card3}>
                        <CardActionArea>
                            <CardContent>
                               <div className="img">
                               <CardMedia className={classes.image}
                               image ="https://www.aman.com/sites/default/files/styles/image_and_text_extra_large/public/2021-01/3366_Aman-New-York-Exterior_Office_27873.jpg?itok=Mz3nJ0Vf"
                               />
                               
                               <Avatar alt="" src="data:image/png;base64,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"
                                style = {{marginLeft:"5px",marginTop:"-65px"}}></Avatar>                                           
                               </div>
                               <div className="text">
                                   <Typography className={classes.content}  variant ="h6">
                                   Totally words widow one downs few age every seven if miss part by fact</Typography>
                                <Typography style={{fontSize:"14px",marginTop:"10px"}}>
                                Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...                                </Typography>
                                <Typography style={{fontSize:"14px",marginTop:"10px"}}>
                                29 February 2019
                                </Typography>
                               </div>
                         </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                
            </Grid>
        </Box>
    )
}

export default BlogPost4;
