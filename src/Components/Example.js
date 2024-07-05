import React from 'react';
import "../App.css";
import { Link } from 'react-router-dom';

function Example() {
    return (
        <div className="App gradient_background">
            <Link style={{display: 'flex', alignItems: 'left', justifyContent: 'left', paddingLeft: '4rem'}} to={"/tool"}>Return to Tool</Link>
            <header className='Title'>
               Case Example
            </header>
            <div className='Box Text'>
                This is the future page of Case Example for ShareTheMeal. I have to put a button to return to tool.
           </div>
        </div>
    );
}
export default Example