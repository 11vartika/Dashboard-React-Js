import React from 'react'
import './Widget2.styles.css';
import { Button } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import CloseIcon from '@material-ui/icons/Close';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function Widget2() {
    return (
        <div className="widget2">
            <h3 className="widgettitle">Discussions</h3>
            <hr></hr>
            <ul className="widgetlist">
                <li className="widgetlistitem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgW0o5li270mnFWcPKVqwF4JR-UvJc0Rv_Q&usqp=CAU"
                        alt="" className="widgetimg" />
                    <div className="widgetuser">
                        <span className="name"> John Doe on Hello World!- 3 days ago</span>
                    </div>
                </li>
                <div className="widgetuser1">
                    <span className="name1"> Well, the way they make shows is, they make one show ..</span>
                </div>
                <div className="btnlist">
                    <Button className="btn">
                        <DoneIcon className="correct" />Approve
                    </Button>
                    <Button className="btn1"> <CloseIcon className="icon" />Reject</Button>
                    <Button className="btn2"> <MoreVertIcon />Edit</Button>
                </div>
                <hr className="hr"></hr>
            </ul>
            <ul className="widgetlist">
                <li className="widgetlistitem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgW0o5li270mnFWcPKVqwF4JR-UvJc0Rv_Q&usqp=CAU"
                        alt="" className="widgetimg" />
                    <div className="widgetuser">
                        <span className="name"> John Doe on Hello World!- 3 days ago</span>
                    </div>
                </li>
                <div className="widgetuser1">
                    <span className="name1"> Well, the way they make shows is, they make one show ..</span>
                </div>
                <div className="btnlist">
                    <Button className="btn">
                        <DoneIcon className="correct" />Approve
                    </Button>
                    <Button className="btn1"> <CloseIcon className="icon" />Reject</Button>
                    <Button className="btn2"> <MoreVertIcon />Edit</Button>
                </div>
                <hr className="hr" ></hr>
            </ul>
            <br />
            <ul className="widgetlist">
                <li className="widgetlistitem">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkgW0o5li270mnFWcPKVqwF4JR-UvJc0Rv_Q&usqp=CAU"
                        alt="" className="widgetimg" />
                    <div className="widgetuser">
                        <span className="name"> John Doe on Hello World!- 3 days ago</span>
                    </div>
                </li>
                <div className="widgetuser1">
                    <span className="name1"> Well, the way they make shows is, they make one show ..</span>
                </div>
                <div className="btnlist">
                    <Button className="btn">
                        <DoneIcon className="correct" />Approve
                    </Button>
                    <Button className="btn1"> <CloseIcon className="icon" />Reject</Button>
                    <Button className="btn2"> <MoreVertIcon />Edit</Button>
                </div>
                <hr className="hr"></hr>
            </ul>
            <br />
           
        </div>
    )
}

export default Widget2;
