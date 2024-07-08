import React, { useEffect }  from 'react';
import { useNavigate } from "react-router-dom";
import "../App.css";
import "./Buttons.css"
 
function Home() {

    const navigate = useNavigate();
    const infoPage = () => {
        navigate("/information");
    }
    const instructionsPage = () => {
      navigate("/instructions");
    }
    const toolPage = () => {
      navigate("/tool");
    }
    
    useEffect(() => {
      localStorage.clear();
      }, []);

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