import React from 'react'
import Box from '@material-ui/core/Box';
import { useStyles } from "../../Bodycomponents/Bodystyles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
function BlogPost2() {
    const classes = useStyles();

    return (
        <Box>
            <Grid container spacing={4} >
                <Grid item sm={3} style={{ marginLeft: "20px",marginTop:"20px" }} >
                    <Card className={classes.card1}>
                        <CardActionArea>
                            <CardMedia className={classes.media1}
                                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwo7novTI5_F5quVAxUI8x_-Ovg3K1svtslA&usqp=CAU"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    Extremity so attending objection as engrossed </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Pursuit chamber as elderly amongst on. Distant however warrant farther to of. My justice wishing prudent waiting in be...                                </Typography>
                                <hr></hr>
                                <Typography variant="h6"style={{ fontSize:"15px", color:"#868e96",}}>
                                    ByAlene Trenton inNews
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={3}style={{ marginTop:"20px"}} >
                    <Card className={classes.card1}>
                        <CardActionArea>
                            <CardMedia className={classes.media1}
                                image="https://miro.medium.com/max/2000/1*EL6CwqJJ3eSVwU5knwqW5Q.png"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    Bed sincerity yet therefore forfeited his
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Speaking throwing breeding betrayed children my to. Me marianne no he horrible produced ye. Sufficient unpleasing and....</Typography>
                               <hr></hr>
                                <Typography variant="h6"style={{ fontSize:"15px",color:"#868e96",}}>
                                    ByChris Jamie inNews
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>

                </Grid>
                <Grid item sm={3} style={{ marginTop:"20px",}}>
                    <Card className={classes.card1}>
                        <CardActionArea>
                            <CardMedia className={classes.media1}
                                image="http://cdn.cnn.com/cnnnext/dam/assets/181010131059-australia-best-beaches-cossies-beach-cocos3.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    Object remark lively all did feebly excuse our                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel not seeing...     </Typography>
                                <hr></hr>
                                <Typography variant="h6"style={{ fontSize:"15px",color:"#868e96",}}>
                                    ByMonica Jordan inNews
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid item sm={2} style={{ marginTop:"20px",}} >
                    <Card className={classes.card1}>
                        <CardActionArea>
                            <CardMedia className={classes.media1}
                                image="https://onlinechat.co.in/wp-content/uploads/2021/07/Girls-Chat-Rooms-scaled-346x188.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="h4">
                                    His followed carriage proposal entrance                  </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    For county now sister engage had season better had waited. Occasional mrs interested far expression directly as regard...    </Typography>
                                    <hr></hr>
                                <Typography variant="h6"style={{ fontSize:"15px", color:"#868e96",}}>
                                    ByMonica Jordan inNews
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BlogPost2;
