import React, { useState } from 'react';
import "./Document.css";
import { useNavigate } from "react-router-dom";

const Document = () => {

    const navigate = useNavigate();

    const [participants, setParticipants] = useState(['']);

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
