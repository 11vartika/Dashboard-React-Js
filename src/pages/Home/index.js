import React from 'react'
import FeaturesInfo from '../../components/FeaturesInfo/index';
import Chart from '../../components/Chart/index';
import Widget1 from '../../components/Widgets1/index';
import Widget2 from '../../components/Widget2';
import Widget3 from '../../components/Widget3';

function Home({authorized}) {
    return (
        <div className="home">
            <FeaturesInfo/>
            <Chart/>
            
            <div className="container">
            <Widget1/> 
                <Widget2/>
                <Widget3/>
                
            </div>
        </div>
    )
}

export default Home;
