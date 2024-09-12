import React from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Buttons.css"
 
function Home() {

    const navigate = useNavigate();
    const infoPage = () => {
        navigate("/universalism-tool/information");
    }
    const instructionsPage = () => {
      navigate("/universalism-tool/instructions");
    }
    const toolPage = () => {
      clearLocalStorage();
      navigate("/universalism-tool/tool");
    }
    
    const clearLocalStorage = () => {
      const documents = localStorage.getItem('documents');
      localStorage.clear();
      if (documents) {
          localStorage.setItem('documents', documents);
      }
    };

    return (
        <div className="App gradient_background">
          <header className='Title'>
              Universalism Tool
          </header>
          <div className='Text'>
            A support tool for the Universalism Requirements Elicitation Framework
          </div>
          <div className='First-Row'>
            <Button design={'Button classicBtn'} onClick={toolPage}>Start</Button>
          </div>
          <div className='Second-Row'>
            <Button design={'Button whiteBtn'} onClick={infoPage}>What is this tool?</Button>
            <Button design={'Button whiteBtn'} onClick={instructionsPage}>See Instructions</Button>
          </div>
        </div>
    );
}

const Button = ({ design, onClick, children }) => {
    return (
      <button className={design} type="button" onClick={onClick}>
        {children}
      </button>
    );
  };
  
export default Home