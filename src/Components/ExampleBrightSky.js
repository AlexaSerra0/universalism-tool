import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function ExampleBrightSky() {
    return (
        <div className="App gradient_background">
            <Link style={{display: 'flex', alignItems: 'left', justifyContent: 'left', paddingLeft: '4rem'}} to={"/tool"}>Return to Tool</Link>
            <header className='Title'>
                Bright Sky
            </header>
            <div className='Box Text'>
                <div>
                    ShareTheMeal is a fundraising application by the United Nations World Food Programme (WFP) whose goal is to fight global hunger. It allows users to donate small amounts of money to various causes all around the world by simply using their phones. It's designed for quick and easy use, allowing everyone to make an impact for this cause.
                </div>
                <div style={{paddingTop: '2%'}}>
                    <Link to={"https://www.hestia.org/brightsky"} target="_blank">Click here to learn more about BrightSky.</Link>
                </div>
           </div>
        </div>
    );
}
export default ExampleBrightSky