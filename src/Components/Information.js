import React from 'react';
import "../App.css";

function Information() {
    return (
        <div className="App gradient_background">
            <header className='Title'>
                What is this tool?
            </header>
            <div className='Box Text' style={{textAlign: 'left'}}>
                <div>
                    Every person has values (e.g. honesty, safety) that might differentiate them from others or have different levels of importance. Software systems must conform to human values as much as possible to satisfy users’ necessities. Therefore, considering human values when developing software is necessary and must occur at the beginning of software development.
                </div>
                <div style={{paddingTop: '1rem', textAlign: 'left'}}>
                    This is a prototype tool designed to support the universalism framework, whose goal is to address universalism values during the initial phase of requirements engineering, assisting the planning of requirements elicitation.
                </div>
           </div>
        </div>
    );
}
export default Information