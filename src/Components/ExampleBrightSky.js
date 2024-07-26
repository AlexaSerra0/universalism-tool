import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function ExampleBrightSky() {
    return (
        <div className="App gradient_background">
            <Link style={{display: 'flex', alignItems: 'left', justifyContent: 'left', paddingLeft: '4rem'}}
                    to={"/questions"}>Return to Questions</Link>
            <header className='Title'>
                Bright Sky
            </header>
            <div className='Box Text'>
                <div>
                    Bright Sky is an application created by the charity Hestia. Its main goal is to support those impacted by domestic abuse, providing a lot of resources to help these individuals understand their situation better and how to address the abuse. This app was designed to be user-friendly and discreet, offering a hidden mode that disguises the app as another application as to not cause suspicion in the abuser or simply for privacy. This way, Bright Sky helps those in need. In this tool, the the requirements examples were made about Bright Sky PT.
                </div>
                <div style={{paddingTop: '2%'}}>
                    <Link to={"https://www.hestia.org/brightsky"} target="_blank">Click here to learn more about BrightSky.</Link>
                </div>
           </div>
        </div>
    );
}
export default ExampleBrightSky