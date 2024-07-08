import React, { useState, useEffect } from 'react';
import "./Document.css";
import { useNavigate } from "react-router-dom";

const Document = () => {

    const [selectedConcepts, setSelectedConcepts] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    const navigate = useNavigate();

    const [participants, setParticipants] = useState(['']);

    useEffect(() => {
        const concepts = JSON.parse(localStorage.getItem('selectedConcepts')) || [];
        setSelectedConcepts(concepts);
        const questions = JSON.parse(localStorage.getItem('selectedQuestions')) || [];
        setSelectedQuestions(questions);
      }, []);

    const handleParticipantChange = (index, event) => {
        const newParticipants = [...participants];
        newParticipants[index] = event.target.value;
        setParticipants(newParticipants);
    };

    const addParticipant = () => {
        setParticipants([...participants, '']);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            documentName: formData.get('documentName'),
            author: formData.get('author'),
            participants: participants.filter((p) => p.trim() !== ''),
        };
        console.log(data);
        //----------- export doc --------------------
    };

    const handlePreviousClick = () => {
        navigate("/questions");
      };

    return (
    <form onSubmit={handleSubmit}>
        <div className='Container'>
            <Button design={'Button classicBtn'} onClick={handlePreviousClick}>Previous</Button>
            <h1 className='Heading'>Document Details</h1>
            <div className='formGroup'>
                <input className='input' type="text" id="documentName" name="documentName" placeholder="Document name *" required/>
            </div>
            <div className='formGroup'>
                <input className='input' type="text" id="author" name="author" placeholder='Author *' required />
            </div>
            {participants.map((participant, index) => (
            <div key={index} className='formGroup'>
                <input
                    className='input'
                    type="text"
                    id={`participant${index + 1}`}
                    value={participant}
                     placeholder={`Participant ${index + 1} *`}
                    onChange={(event) => handleParticipantChange(index, event)}
                    required
                />
            </div>
            ))}
            <button type="button" className='Button classicBtn' onClick={addParticipant}>ADD NEW PARTICIPANT +</button>
            <button type="submit" className='Button SubmitButton'>CREATE DOCUMENT</button>
            <div className="Document">
      <h1>Your Document</h1>
      {selectedConcepts.length === 0 ? (
        <p>No concepts added yet.</p>
      ) : (
        <ul>
          {selectedConcepts.map((concept, index) => (
            <li key={index}>
              <h2>{concept.concept}</h2>
              <p>{concept.description}</p>
              <p>{concept.requirement}</p>
            </li>
          ))}
        </ul>
      )}
      {selectedQuestions.length === 0 ? (
        <p>No concepts added yet.</p>
      ) : (
        <ul>
            {Array.isArray(selectedQuestions) && (
             selectedQuestions.map((question, index) => (
            <li key={index}>
                <h2>{question.concept}</h2>
              <h2>{question.question}</h2>
            </li>
        )))}
        </ul>
      )}
    </div>
        </div>
    </form>
    );
    };

const Button = ({ disabled = false, design, onClick, children }) => {
    return (
      <button disabled={disabled} className={design} type="button" onClick={onClick}>
        {children}
      </button>
    );
  };

export default Document;
