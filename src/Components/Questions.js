import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Questions.css";
import QuestionsData from './QuestionsData.js';

const Questions = () => {
  const navigate = useNavigate();
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [availableConcepts, setAvailableConcepts] = useState([]);
  const [selectedConcept, setSelectedConcept] = useState('');

  useEffect(() => {
    const storedSelectedQuestions = JSON.parse(localStorage.getItem('selectedQuestions')) || [];
    setSelectedQuestions(storedSelectedQuestions);

    const storedConcepts = JSON.parse(localStorage.getItem('selectedConcepts')) || [];
    setAvailableConcepts(storedConcepts);

    if (storedConcepts.length > 0) {
      setSelectedConcept(storedConcepts[0].concept);
    }

  }, []);

  const handleRemoveConcept = (concept) => {
    const updatedQuestions = selectedQuestions.filter(q => q.concept !== concept.concept);
    setSelectedQuestions(updatedQuestions);

    localStorage.setItem('selectedQuestions', JSON.stringify(updatedQuestions));

    const updatedConcepts = availableConcepts.filter(c => c.concept !== concept.concept);
    setAvailableConcepts(updatedConcepts);

    localStorage.setItem('selectedConcepts', JSON.stringify(updatedConcepts));

    if (selectedConcept === concept.concept) {
      if (updatedConcepts.length > 0) {
        setSelectedConcept(updatedConcepts[0].concept);
      } else {
        setSelectedConcept(''); // No concept available
      }
    }
  };

  function removeSpaces(inputString) {
    if(inputString === 'Socio-cultural Equity')
      return 'SocioculturalEquity';
    if(inputString === "Owner | Controller")
      return 'OwnerController';
    return inputString.split(' ').join('');
  }

  const handleQuestionChange = (question) => {
    setSelectedQuestions((prev) => {
      if (prev.some(q => q.question === question.question)) {
        return prev.filter(q => q.question !== question.question);
      } else {
        return [...prev, question];
      }
    });
  };

  const handleNextClick = () => {
    localStorage.setItem('selectedQuestions', JSON.stringify(selectedQuestions));
    navigate("/document");
  };

  const handlePreviousClick = () => {
    localStorage.setItem('selectedQuestions', JSON.stringify(selectedQuestions));
    navigate("/tool");
  };

  const getSelectedCount = (concept) => {
    return selectedQuestions.filter(q => q.concept === concept).length;
  };

  return (
    <div className="Questions">
      <div className="sidebar">
        {availableConcepts.map((concept) => (
          <div 
            key={concept.id}
            className={`concept ${selectedConcept === concept.concept ? 'active' : ''}`}
            onClick={() => setSelectedConcept(concept.concept)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
              {concept.concept} {getSelectedCount(concept.concept)}/{QuestionsData[removeSpaces(concept.concept)].length}
              <button className="removeConceptBtn" onClick={(e) => { 
                e.stopPropagation(); 
                handleRemoveConcept(concept); 
              }}>X</button>
            </div>
          </div>
        ))}
      </div>
      <div className="content">
        <div className='BtnBar'>
          <Button design={'Button classicBtn'} onClick={handlePreviousClick}>Previous</Button>
          <Button design={'Button classicBtn'} onClick={handleNextClick} disabled={selectedQuestions.length === 0}>Next</Button>
        </div>
        <div className="questionsContainer">
          {selectedConcept && QuestionsData[removeSpaces(selectedConcept)] && QuestionsData[removeSpaces(selectedConcept)].map((question, index) => (
            <div key={`question${index}`} className="question">
              <input
                type="checkbox"
                id={`question${index}`}
                onChange={() => handleQuestionChange(question)}
                checked={selectedQuestions.some(q => q.question === question.question)}
              />
              <label htmlFor={`question${index}`}>{question.question}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Button = ({ disabled = false, design, onClick, children }) => {
  return (
    <button disabled={disabled} className={design} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Questions;
