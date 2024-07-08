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
              { dataConcept ? (
                <td>{dataConcept.description}</td>
              ) : (
                <td>No description available</td>
              )}
          </tr>
          {/* Requirement Example */}
          <tr>
            <td>Requirement Example</td>
              { dataConcept ? (
                <td>{dataConcept.requirement}</td>
              ) : (
                <td>No requirement available</td>
              )}
          </tr>
        </tbody>
      </table>
    </div>
  );
};