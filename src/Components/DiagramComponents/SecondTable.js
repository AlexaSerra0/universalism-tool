import React from "react";
import './TableStyle.css';

export const Table = ({ dataConcept, onAddToDocument }) => {
  const handleButtonClick = () => {
    if (dataConcept) {
      onAddToDocument(dataConcept);
    }
  };

  const hasValidData = (dataConcept) => {
    return dataConcept && (
      (Array.isArray(dataConcept.description) && dataConcept.description.length > 0) ||
      (Array.isArray(dataConcept.requirement) && dataConcept.requirement.length > 0)
    );
  };

  return (
    <div className="visual-design-table">
      <table>
        <thead>
          <tr>
            <th colSpan="4">
              <div className="header">
                {!hasValidData(dataConcept) ? (<div>No content</div>) : <div className="title">{dataConcept.concept}</div>}
                {!hasValidData(dataConcept) ? (<div>No content</div>) : <button className="add-to-document" onClick={handleButtonClick}>ADD TO DOCUMENT</button>}  
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Description */}
          <tr>
            <td>Description</td>
              <td>
                {hasValidData(dataConcept) ? (
                  dataConcept.description.map((description, index) => (
                    index === 0 ? <div key={index}>{description.text}</div> : 
                    <div key={index} style={{paddingTop: "0.5rem"}}>{description.text}</div>
                  ))
                ) : (
                  <div>No description available</div>
                )}
              </td>
          </tr>
          {/* Requirement Examples */}
          <tr>
            <td>Requirement Examples</td>
            <td>
              {hasValidData(dataConcept) ? (
                dataConcept.requirement.map((requirement, index) => (
                  <div key={index} className="requirement-text">{requirement.text}</div>
                ))
              ) : (
                <div>No requirement examples available</div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};