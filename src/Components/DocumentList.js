import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { exportToWord } from './ExportToWord';
import "./DocumentsList.css";
import "./Buttons.css";

const DocumentsList = () => {
    const [documents, setDocuments] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const storedDocuments = JSON.parse(localStorage.getItem('documents')) || [];
        setDocuments(storedDocuments);
    }, []);

    const handleEdit = (document) => {
        localStorage.setItem('documentId', JSON.stringify(document.id));
        localStorage.setItem('documentName', JSON.stringify(document.documentName));
        localStorage.setItem('author', JSON.stringify(document.author));
        localStorage.setItem('participants', JSON.stringify(document.participants));
        localStorage.setItem('selectedConcepts', JSON.stringify(document.concepts));
        localStorage.setItem('selectedQuestions', JSON.stringify(document.selectedQuestions));

        navigate(`/document`);
    };

    const handleDelete = (id) => {
        const updatedDocuments = documents.filter(doc => doc.id !== id);
        setDocuments(updatedDocuments);
        localStorage.setItem('documents', JSON.stringify(updatedDocuments));
    };

    const handleExport = (document) => {
        exportToWord(document.documentName, document.author, document.participants, document.concepts, document.selectedQuestions);
    };

    const handleCreateNew = () => {
        clearLocalStorage();
        navigate("/tool");
    };

    const clearLocalStorage = () => {
        const documents = localStorage.getItem('documents');
        localStorage.clear();
        if (documents) {
            localStorage.setItem('documents', documents);
        }
    };

    return (
        <div className="Container">
            <h1 className="Heading">Documents</h1>
            <button className="Button classicBtn" onClick={handleCreateNew}>Create New Document</button>
            {documents.map(doc => (
                <div key={doc.id} className="DocumentCard">
                    <p>Name: {doc.documentName}</p>
                    <p>Author: {doc.author}</p>
                    <p>Characteristics: {doc.concepts.map(concept => concept.concept).join(', ')}</p>
                    <p>Participants: {doc.participants.join(', ')}</p>
                    <button className='Button darkBtn'
                            onClick={() => handleExport(doc)}> Export</button>
                    <button className='Button darkBtn'
                            onClick={() => handleEdit(doc)}
                            style={{marginLeft: '0.5rem'}}>Edit</button>
                    <button className='Button darkBtn'
                            onClick={() => handleDelete(doc.id)}
                            style={{marginLeft: '0.5rem'}}>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default DocumentsList;
