import React from "react";
import './TableStyle.css';

export const Table = ({ dataConcept, onAddToDocument }) => {
  const handleButtonClick = () => {
    if (dataConcept) {
      onAddToDocument(dataConcept);
    }
  };

  return (
    <div className="visual-design-table">
      <table>
        <thead>
          <tr>
            <th colSpan="4">
              <div className="header">
                {!dataConcept ? (<div>No content</div>) : <div className="title">{dataConcept.concept}</div>}
                {!dataConcept ? (<div>No content</div>) : <button className="add-to-document" onClick={handleButtonClick}>ADD TO DOCUMENT</button>}  
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* Description */}
          <tr>
            <td>Description</td>
              <td>
                {Array.isArray(dataConcept.description) && dataConcept.description.length > 0 ? (
                  dataConcept.description.map((description, index) => (
                    index === 0 ? <div>{description.text}</div> : 
                    <div style={{paddingTop: "0.5rem"}}>{description.text}</div>
                  ))
                ) : (
                  <td>No goals available</td>
                )}
              </td>
          </tr>
          {/* Requirement Examples */}
          <tr>
            <td>Requirement Examples</td>
              <td>
                {Array.isArray(dataConcept.requirement) && dataConcept.requirement.length > 0 ? (
                  dataConcept.requirement.map((requirement, index) => (
                    index === 0 ? <div>{requirement.text}</div> : 
                    <div style={{paddingTop: "0.5rem"}}>{requirement.text}</div>
                  ))
                ) : (
                  <td>No requirement examples available</td>
                )}
              </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};