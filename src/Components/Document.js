import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Document.css";

const Document = () => {
    const [documentId, setDocumentId] = useState(null);
    const [documentName, setDocumentName] = useState('');
    const [author, setAuthor] = useState('');
    const [participants, setParticipants] = useState(['']);
    const [selectedConcepts, setSelectedConcepts] = useState([]);
    const [selectedQuestions, setSelectedQuestions] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const id = JSON.parse(localStorage.getItem('documentId')) || null;
        setDocumentId(id);
        const storedDocumentName = JSON.parse(localStorage.getItem('documentName')) || '';
        setDocumentName(storedDocumentName);
        const storedAuthor = JSON.parse(localStorage.getItem('author')) || '';
        setAuthor(storedAuthor);
        const storedParticipants = JSON.parse(localStorage.getItem('participants')) || [''];
        setParticipants(storedParticipants);
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

    const removeParticipant = (index) => {
        const newParticipants = participants.filter((_, i) => i !== index);
        setParticipants(newParticipants);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const concepts = selectedConcepts.filter(concept => 
            selectedQuestions.some(question => question.concept === concept.concept)
        );

        const documentDetails = {
            id: documentId,
            documentName,
            author,
            participants,
            concepts,
            selectedQuestions
        };

        const storedDocuments = JSON.parse(localStorage.getItem('documents')) || [];
        const documentIndex = storedDocuments.findIndex(doc => doc.id === documentId);
        if(documentIndex !== -1) {
            storedDocuments[documentIndex] = documentDetails;
        } else {
            storedDocuments.push(documentDetails);
        }
        localStorage.setItem('documents', JSON.stringify(storedDocuments));
        clearLocalStorage();
        navigate("/documents");
    };

    const clearLocalStorage = () => {
        const documents = localStorage.getItem('documents');
        localStorage.clear();
        if (documents) {
            localStorage.setItem('documents', documents);
        }
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
                            placeholder={`Participant *`}
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
                <button type="submit" className='Button SubmitButton'>SAVE DOCUMENT</button>
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
