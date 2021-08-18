import React from 'react'
import './Widgets1.styles.css';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';


function Widget1() {
    return (
        <div className="widgets">
            <div className="widget">
            <h3 className="title">New User</h3>
            <hr></hr>
        </div>
        <div className="box">
        <TextareaAutosize aria-label="minimum height"  className ="boxholder"   placeholder="Brave New world" />
        </div>

        <div className="box1">
        <TextareaAutosize aria-label="minimum height" minRows={24} className ="holder"  
         placeholder="Words can be like X rays if you use them properly ...." />
        </div>
        </div>
    )
}

export default Widget1;
