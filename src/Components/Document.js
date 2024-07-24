import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { exportToWord } from './ExportToWord';  // Assuming you saved the above function in a file named `exportToWord.js`
import "./Document.css";

const Document = () => {
    const [documentName, setDocumentName] = useState('');
    const [author, setAuthor] = useState('');
    const [participants, setParticipants] = useState(['']);
    const [selectedConcepts, setSelectedConcepts] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const concepts = JSON.parse(localStorage.getItem('selectedConcepts')) || [];
        setSelectedConcepts(concepts);
        const questions = JSON.parse(localStorage.getItem('selectedQuestions')) || [];
        setSelectedQuestions(questions);

        const documentName = JSON.parse(localStorage.getItem('documentName')) || [];
        setDocumentName(documentName);
        const author = JSON.parse(localStorage.getItem('author')) || [];
        setAuthor(author);
        const participants = JSON.parse(localStorage.getItem('participants')) || [''];
        setParticipants(participants);
    }, []);

    const handleParticipantChange = (index, event) => {
        const newParticipants = [...participants];
        newParticipants[index] = event.target.value;
        setParticipants(newParticipants);
    };

    const addParticipant = () => {
        setParticipants([...participants, '']);
    };

    const removeParticipant = (index) => {
        const newParticipants = participants.filter((_, i) => i !== index);
        setParticipants(newParticipants);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        exportToWord(documentName, author, participants, selectedConcepts, selectedQuestions);
    };

    const handlePreviousClick = () => {
      localStorage.setItem('documentName', JSON.stringify(documentName));
      localStorage.setItem('author', JSON.stringify(author));
      localStorage.setItem('participants', JSON.stringify(participants));
      navigate("/questions");
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='Container'>
                <Button design={'Button classicBtn'} onClick={handlePreviousClick}>Previous</Button>
                <h1 className='Heading'>Document Details</h1>
                <div className='formGroup'>
                    <input
                        className='input'
                        type="text"
                        id="documentName"
                        name="documentName"
                        placeholder="Document name *"
                        value={documentName}
                        onChange={(e) => setDocumentName(e.target.value)}
                        required
                    />
                </div>
                <div className='formGroup'>
                    <input
                        className='input'
                        type="text"
                        id="author"
                        name="author"
                        placeholder='Author *'
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </div>
                {participants.map((participant, index) => (
                    <div key={index} className='formGroup' style={{display: 'flex'}}>
                        <input
                            className='input'
                            type="text"
                            id={`participant${index + 1}`}
                            value={participant}
                            placeholder={`Participant ${index + 1} *`}
                            onChange={(event) => handleParticipantChange(index, event)}
                            required
                        />
                         {participants.length > 1 && (
                            <button
                                type="button"
                                className='Button classicBtn'
                                style={{marginLeft: '1rem'}}
                                onClick={() => removeParticipant(index)}
                            >
                                X
                            </button>
                        )}
                    </div>
                ))}
                <button type="button" className='Button classicBtn' onClick={addParticipant} style={{marginTop: '1%'}}>ADD NEW PARTICIPANT +</button>
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