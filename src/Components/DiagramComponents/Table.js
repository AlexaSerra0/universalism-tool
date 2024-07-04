import React from "react";
import './TableStyle.css';

export const Table = ({ dataConcept, dataGoals }) => {
  const handleButtonClick = (rowData) => {
    
    console.log('Button clicked for row:', rowData);
  };

  return (
    <div className="visual-design-table">
      <table>
        <thead>
          <tr>
            <th colSpan="4">
              <div className="header">
                {!dataConcept ? (<div>No content</div>) : <div className="title">{dataConcept.concept}</div>}
                {!dataConcept ? (<div>No content</div>) : <div className="subtitle">{dataConcept.conceptDescription}</div>}
                {!dataConcept ? (<div>No content</div>) : <button className="add-to-document" onClick={handleButtonClick}>ADD TO DOCUMENT</button>}  
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Goals */}
          <tr>
            <td>Goals</td>
              {Array.isArray(dataGoals) && dataGoals.length > 0 ? (
                dataGoals.map((goal, index) => (
                  <td key={index}>{goal.goal}</td>
                ))
              ) : (
                <td>No goals available</td>
              )}
          </tr>
          {/* Potential Issues */}
          <tr>
            <td>Potential Issues</td>
              {Array.isArray(dataGoals) && dataGoals.length > 0 ? (
                dataGoals.map((issue, index) => (
                <td key={index}>{issue.potentialIssue}</td>
                ))
              ) : (
                <td>No issues available</td>
              )}
          </tr>
          {/* Descriptions */}
          <tr>
            <td>Descriptions</td>
              {Array.isArray(dataGoals) && dataGoals.length > 0 ? (
                dataGoals.map((description, index) => (
                    <td key={index}>{description.description}</td>

                ))
              ) : (
                <td>No descriptions available</td>
              )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};