import React,{useState} from 'react'
import { Box, Container, Typography } from '@material-ui/core'
import NewData from './AddData';
import CodeEditor from './CodeEditor';
import { InputBase, Card ,Button,CardActionArea} from '@material-ui/core';
import FlagIcon from '@material-ui/icons/Flag';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ScoreIcon from '@material-ui/icons/Score';
import { useStyles } from "../../Bodycomponents/Bodystyles";
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Checkbox } from '@material-ui/core';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import SaveIcon from '@material-ui/icons/Save';
import './AddNewPost.styles.css';

function AddNewPost() {
    const classes = useStyles();

    const [checked,setChecked] = React.useState(true)
    const toggleCheckbox = event =>{
        setChecked(event.target.Checked)
    }
    return (
        <Box>
            <NewData label='BLOG POSTS' blogTitle='Add New Post' />

            <div className={classes.container}>
                <Card className={classes.cardcontainer}>
                    < Container className={classes.containertitle}>
                        <InputBase placeholder="Your Post Title"></InputBase>
                    </Container>
                    <div className={classes.codeeditor}>
                        <CodeEditor />
                    </div>
                </Card>
                <div>
                    <Card className={classes.cardcontainer2}>
                        <Typography className={classes.action}>Actions</Typography>
                        <hr></hr>
                        <ul className="list">
                            <li className={classes.users}>
                                <FlagIcon className={classes.icon} />
                                <span className={classes.textstatus}>Status :</span>
                                <span className={classes.draft}>Draft</span>
                                <span style={{ marginLeft: "90px", color: "blue" }}>Edit</span>
                            </li>

                            <li className={classes.users}>
                                <VisibilityIcon className={classes.icon} />
                                <span className={classes.textstatus}>Visibility :</span>
                                <span className={classes.draft} style={{color:"lightgreen"}}>Public </span>

                                <span style={{ marginLeft: "65px", color: "blue" }}>Edit</span>
                            </li>

                            <li className={classes.users}>
                                <CalendarTodayIcon className={classes.icon} />
                                <span className={classes.textstatus}>Schedule :</span>
                                <span className={classes.draft}>Now </span>
                                <span style={{ marginLeft: "75px", color: "blue" }}>Edit</span>
                            </li>

                            <li className={classes.users}>
                                <ScoreIcon className={classes.icon} />
                                <span className={classes.textstatus}>Readability :</span>
                                <span className={classes.draft} style={{color:"yellow"}}>Ok</span>
                            </li>

                        </ul>
                        <CardActionArea>
                            <Button className={classes.button1} size="small" >
                                <SaveIcon className={classes.icon1} /> 
                                <Typography style={{fontSize:"10px",color:"#007bff"}}>SaveDraft</Typography>
                            </Button>
                            <Button className={classes.button1} size="small" style={{marginLeft:"60px"}} >
                                <FileCopyIcon className={classes.icon1} /> 
                                <Typography style={{fontSize:"10px",color:"#007bff"}}>Publish</Typography>
                            </Button>
                        </CardActionArea>
                    </Card>

                    <Card className={classes.cardcontainer3}>
                    <Typography className={classes.action}>Categories</Typography>
                        <hr></hr>
                        <ul>
                            <li className={classes.users}>
                            <Checkbox  enabled defaultchecked onChange={toggleCheckbox}inputProps={{"aria-label":"click"}}  />
                            <span> Uncategorized</span>
                            </li>

                            <li className={classes.users}> 
                            <Checkbox defaultchecked  onChange={toggleCheckbox}inputProps={{"aria-label":"click"}}  />
                             <span>  Design</span>
                           </li>
                            <li className={classes.users}>
                            <Checkbox  disabled defaultchecked  onChange={toggleCheckbox}inputProps={{"aria-label":"click"}}  />
                            <span> Development</span>
                            </li>
                            <li className={classes.users}> 
                            <Checkbox  disabled defaultchecked onChange={toggleCheckbox}inputProps={{"aria-label":"click"}}  />
                        <span> Writing</span>
                        </li>
                            <li className={classes.users}> 
                            <Checkbox  disabled defaultchecked onChange={toggleCheckbox}  />
                            <span>   Books</span>
                          </li>
                        </ul>
                       
                        <div className={classes.newentry}>

                        </div>
                     </Card>
                </div>
            </div>
        </Box>
    )
}

export default AddNewPost;
