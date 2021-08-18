import React from 'react'
import './Widget3.styles.css';
function Widget3() {
    return (
        <div className = "widget3">
          <h3 className="title">Top Referrals</h3>
          <hr></hr>
          <ul className="list">
         <li className="widgetuser">
         <span className="name"> GitHub</span>   
            <span className="values">19,291</span>
            <hr></hr>
         </li>
         <li className="widgetuser" >
         <span className="name">Stack Overflow</span>   
        <span className="values">11,201</span>
            <hr></hr>
         </li>
         <li className="widgetuser" >
         <span className="name"> Hacker News</span>   
            <span className="values">9,291</span>
            <hr></hr>
         </li>
         <li className="widgetuser" >
         <span className="name"> Reddit</span>   
            <span className="values">8,281</span>
            <hr></hr>
         </li>
         <li className="widgetuser" >
         <span className="name"> The Next Web</span>   
            <span className="values">7,128</span>
            <hr></hr>
         </li>
         <li className="widgetuser" >
         <span className="name"> Tech Crunch</span>   
            <span className="values">6,218</span>
            <hr></hr>
         </li>
         <li className="widgetuser" >
         <span className="name"> YouTube</span>   
        < span className="values">1,218</span>
            <hr></hr>
         </li>
         
          </ul>
        </div>
    )
}

export default Widget3;
