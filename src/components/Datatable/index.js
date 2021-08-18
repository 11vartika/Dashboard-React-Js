import React from 'react';
import BlogHeader from './Dataform';
import {Box,Table,Container,TableCell,TableRow,TableContainer, TableHead, Typography, TableBody} from'@material-ui/core';
import {useStyles} from "../../Bodycomponents/Bodystyles";

function Datatable() {
    const classes=useStyles();
    return (
        <Box>
        <BlogHeader label='Components' blogTitle='blog post'/>
            <Container className={classes.table}>
                <div style= {{marginTop:"5px",}}>
                <Typography >Active Users</Typography>
                </div>
                
            <TableContainer>
                <Table style ={{marginTop:"20px"}}>
                    <TableHead>
                        <TableRow>
                            <TableCell style={{backgroundColor:"#dee2e6",}}>#</TableCell>
                            <TableCell style={{backgroundColor:"#dee2e6",}}>First Name</TableCell>
                            <TableCell style={{backgroundColor:"#dee2e6",}}>Last Name</TableCell>
                            <TableCell style={{backgroundColor:"#dee2e6",}}>Country</TableCell>
                            <TableCell style={{backgroundColor:"#dee2e6",}}> City </TableCell>
                            <TableCell style={{backgroundColor:"#dee2e6",}}> Phone </TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell> 1</TableCell>
                            <TableCell> Ali</TableCell>
                            <TableCell> Kerry</TableCell>
                            <TableCell> Russian Federation</TableCell>
                            <TableCell> Gdańsk</TableCell>
                            <TableCell> 107-0339</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell> 2</TableCell>
                            <TableCell> Clark</TableCell>
                            <TableCell> Angela</TableCell>
                            <TableCell> Estonia</TableCell>
                            <TableCell> Borghetto di Vara</TableCell>
                            <TableCell> 1-660-850-1647</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell> 3</TableCell>
                            <TableCell> Jerry</TableCell>
                            <TableCell> Nathan</TableCell>
                            <TableCell>Cyprus</TableCell>
                            <TableCell> Braunau am Inn</TableCell>
                            <TableCell> 214-4225</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
 
            <Container className={classes.table1}>
            <div style= {{marginTop:"5px",}}>
                <Typography >Active Users</Typography>
                </div>                
            <TableContainer>
                <Table style ={{marginTop:"20px"}}>
                    <TableHead  >
                        <TableRow >
                            <TableCell className={classes.tablecontent}>#</TableCell>
                            <TableCell className={classes.tablecontent}>First Name</TableCell>
                            <TableCell className={classes.tablecontent}>Last Name</TableCell>
                            <TableCell className={classes.tablecontent}>Country</TableCell>
                            <TableCell className={classes.tablecontent}> City </TableCell>
                            <TableCell className={classes.tablecontent}> Phone </TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell className={classes.tablecontent}> 1</TableCell>
                            <TableCell className={classes.tablecontent}> Ali</TableCell>
                            <TableCell className={classes.tablecontent}> Kerry</TableCell>
                            <TableCell className={classes.tablecontent}> Russian Federation</TableCell>
                            <TableCell className={classes.tablecontent}> Gdańsk</TableCell>
                            <TableCell className={classes.tablecontent}> 107-0339</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className={classes.tablecontent}> 2</TableCell>
                            <TableCell className={classes.tablecontent}> Clark</TableCell>
                            <TableCell className={classes.tablecontent}> Angela</TableCell>
                            <TableCell className={classes.tablecontent}> Estonia</TableCell>
                            <TableCell className={classes.tablecontent}> Borghetto di Vara</TableCell>
                            <TableCell className={classes.tablecontent}> 1-660-850-1647</TableCell>
                        </TableRow>
                        <TableRow>
                        <TableCell className={classes.tablecontent}> 3</TableCell>
                            <TableCell className={classes.tablecontent}> Jerry</TableCell>
                            <TableCell className={classes.tablecontent}> Nathan</TableCell>
                            <TableCell className={classes.tablecontent}>Cyprus</TableCell>
                            <TableCell className={classes.tablecontent}> Braunau am Inn</TableCell>
                            <TableCell className={classes.tablecontent}> 214-4225</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            </Container>
 
        </Box>
    )
}

export default Datatable;
