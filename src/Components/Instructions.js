import React from 'react';
import "../App.css";

function Instructions() {
    return (
        <div className="App gradient_background">
            <header className='Title'>
                Instructions
            </header>
            <div className='Box Text' style={{textAlign: 'left'}}>
                <div>
                     The first step to use this tool is clicking the "START" button on the home page. You will be redirected to the tool page.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    On the tool page, you have the model where you can choose to view part of the model to understand it better.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    Select the concepts that interest you to know more about them.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    When you find a concept that you want on your final document, click the "ADD TO DOCUMENT" button.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    Once you have saved all the concepts you want, click the "NEXT" button to go to the questions page.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    On the questions page, you have a list of the concepts you saved. If you want to remove anyone, click the "X" button.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    Each concept has a set of questions to assist in the implementation of the concept into your system. Select all the questions you want to add to the final document.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    When you finish, click the "NEXT" button to go towards the final step, saving the document.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    On the document page, you give your document a name and name the author of the document along with the participants. You can add as many participants as you want by clicking the “ADD NEW PARTICIPANT +” button.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    To finish, click the “CREATE DOCUMENT” button to save your document on your device. The file is in a docx format.
                </div>
                <div style={{paddingTop: '1rem'}}>
                    That is all you need to know to use this tool!
                </div>
            </div>
        </div>
    );
}

export default Instructions