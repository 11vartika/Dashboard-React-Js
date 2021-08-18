import React from 'react'
import './Topbar.styles.css';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import { MenuItem,Select } from '@material-ui/core';

function Topbar() {
    return (
        <div>
            <AppBar
            position="fixed"
            className="appbar">
                <Toolbar className="topbar"> 
                    <div className="search">
                        <div className="searchicon">
                            <SearchIcon className="icon" style={{ fontSize: "18px", color: "#5a6169" }} />
                            <InputBase placeholder="Search for something ......" className="plaecholder">
                            </InputBase>
                        </div>
                    </div>
                    <div className="notification">
                        <Button className="notibutton"
                            style={{
                                background: "#ddddddd", color: "#333333", height: "50px", width: "50px",
                                borderRadius: "50%"
                            }}>
                            <NotificationsIcon />
                            <span className="badge" style={{
                                top: "-0px", right: "10px", width: "20px",
                                height: "22px", background: "red", color: "white", borderRadius: "50%"
                            }} > 2</span>
                        </Button>
                    </div>
                    <div className="accounts">
                        <Avatar alt="Remy Sharp" src="https://cdn.cdnparenting.com/articles/2020/02/25151216/171715070.jpg" />
                        <span style={{ color: "black", fontSize: "13px", marginTop: "12px", padding: "5px" }}>Sierra Brooks</span>
                        <Select style={{visibility:"unvisible"}}>
                            <MenuItem value={1}> Profile</MenuItem>
                            <MenuItem value={2}> Edit</MenuItem>
                            <MenuItem value={3}> Files</MenuItem>
                            <MenuItem value={4}> Transactions</MenuItem>
                            <MenuItem value={5}> Logout</MenuItem>
                        </Select>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Topbar;

