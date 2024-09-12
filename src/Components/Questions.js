import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Questions.css";
import QuestionsData from './QuestionsData.js';
import { Link } from 'react-router-dom';


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

  const handleExampleClick = () => {
    localStorage.setItem('selectedQuestions', JSON.stringify(selectedQuestions));
  };

  const getSelectedCount = (concept) => {
    return selectedQuestions.filter(q => q.concept === concept).length;
  };

  return (
    <div className="Questions">
      <div className="sidebar scrollable">
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
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className='BtnBar'>
            <Button design={'Button classicBtn'} onClick={handlePreviousClick}>Previous</Button>
            <Button design={'Button classicBtn'} onClick={handleNextClick} disabled={selectedQuestions.length === 0}>Next</Button>
          </div>
          <div style={{marginBottom: '5%', marginTop: '2%'}}>
            <div className='FirstRow'>
              <Link to={"/example_ShareTheMeal"} onClick={handleExampleClick}>Case Example: ShareTheMeal</Link>
            </div>
          </div>
        </div>
        <div>
          {selectedConcept && QuestionsData[removeSpaces(selectedConcept)] && QuestionsData[removeSpaces(selectedConcept)].map((question, index) => (
            <div key={`question${index}`} className="question" >
              <div style={{display: 'flex', alignItems: 'center'}}>
                <input
                  type="checkbox"
                  id={`question${index}`}
                  onChange={() => handleQuestionChange(question)}
                  checked={selectedQuestions.some(q => q.question === question.question)}
                  style={{cursor: 'pointer'}}
                />
                <label htmlFor={`question${index}`}>{question.question}</label>
              </div>
                {question.requirement && Array.isArray(question.requirement) && question.requirement.map((req, reqIndex) => (
                  <div key={`requirement${reqIndex}`} className='requirement'>
                    {req.text}
                  </div>
                ))}
            </div>
          ))}
        </div>
        {/* <div className='SecondRow'>
          <Link to={"/example_BrightSky"}>Another Case Example: Bright Sky</Link>
        </div> */}
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
