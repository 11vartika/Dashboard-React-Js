import React from 'react'
import { makeStyles } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import { Typography,List,ListItem,ListItemText,ListItemIcon } from '@material-ui/core';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import TableChartIcon from '@material-ui/icons/TableChart';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import ViewModuleIcon from '@material-ui/icons/ViewModule';
import { useHistory,useLocation } from 'react-router-dom';

const drawerWidth = 230
const useStyles = makeStyles({
    drawer:{
        width:drawerWidth,
    },
    drawerPaper:{
        width:drawerWidth,
    },
    active : {
        background:'#f4f4f4'
    },
})

const Slider = () =>{
    const menuItems=[
        {
            text:"Blog Dashboard",
            icon: <BorderColorIcon/>,
            path : '/dashboard'            
        },

        {
            text:'Blog Post',
            icon: <VerticalSplitIcon/>,
            path : '/post'                    
        },

        {
            text:'Add New Post',
            icon: <NoteAddIcon/>,   
            path :'/newpost'
        },

        {
            text:'Forms & Components',
            icon: <ViewModuleIcon/>,
            path : '/forms'
        },

        {
            text:'Table',
            icon: <TableChartIcon/>,
            path : '/table'
        },

        {
            text:'User Profile ',
            icon: <PersonOutlineIcon/>,
            path : '/profile'
        },
        
        {
            text:'Error',
            icon: <ErrorOutlineIcon />,
            path : '/error'
        },
    ];
    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()
    
    return(        
            <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper:classes.drawerPaper}}
            >
            <div>
            <Typography variant ="h5" style ={{marginTop:"20px",marginLeft:"15px"}} className={classes.title}> Dashboard </Typography>
            </div>
            <List>
                {menuItems.map((item)=>(
                    <ListItem button key={item.text} 
                    onClick ={()=>history.push(item.path)}
                    className = {location.pathname == item.path ? classes.active: null }>                    
                        <ListItemIcon> {item.icon}</ListItemIcon>
                        <ListItemText primary ={item.text}/>                        
                    </ListItem>
                ))}
            </List>            
            </Drawer>      
           );
        };
export default Slider;        