import React from 'react'
import  './Chart.styles.css';
import { LineChart,Line,XAxis,YAxis,Tooltip
    ,ResponsiveContainer,} from 'recharts';
  
function Chart() {
    const data = [
        {
          name: '1',
          "Active User" : 4000,
         
        },
        {
          name: '7',
          "Active User" : 3000,
          
        },
        {
          name: '14',
          "Active User" : 2000,
        },
        {
          name: '21',
          "Active User" : 2780,    
         
        },

        {
          name: '28',
          "Active User" : 1890,
        
        },        
        {
          name: '35',
          "Active User" : 2390,
         
        },
        
      ];
 
    return (
        <div className= "chart">
          <div className = "chart1">
            <h3 className = "charttitle">Users Overview</h3>
            <ResponsiveContainer width="100%" aspect ={4 / 1}>
                <LineChart data = {data}> 
                <XAxis datakey ="name" stroke= "#5550bd"/>
                <Line type="monotone" dataKey="Active User" stroke= "#5550bd" />
                <Tooltip/>
                <YAxis/>
                </LineChart>
            </ResponsiveContainer>      
        </div>
        </div>
    )
}
export default Chart;
