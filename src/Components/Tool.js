import React, { useState, useCallback, useEffect } from 'react';
import "./Buttons.css";
import "./Tool.css";
import { useNavigate } from "react-router-dom";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
} from 'reactflow';
import 'reactflow/dist/style.css';
import DiagramNode from './DiagramComponents/DiagramNode.js';
import FloatingEdge from './DiagramComponents/FloatingEdge';
import FloatingConnectionLine from './DiagramComponents/FloatingConnectionLine';
import { createNodesAndEdges } from './DiagramComponents/utils';
import { Table } from './DiagramComponents/Table.js';
import ConceptsData from './DiagramComponents/ConceptsData.js';

const nodeTypes = { diagramNode: DiagramNode };
const edgeTypes = {
  floating: FloatingEdge,
};

function Tool() {

  const [isOpen, setIsOpen] = useState(false);
  const [clickedNodeId, setClickedNodeId] = useState(null);

  const [dataConcept, setDataConcept] = useState(null);
  //const [dataGoals, setDataGoals] = useState(null);
  const [section, setSection] = useState('All');
  const [selectedConcepts, setSelectedConcepts] = useState([]);
  const [documentId, setDocumentId] = useState(null);

  const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(section);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const navigate = useNavigate();

  const handleNodeClick = useCallback((event, node) => {
    setClickedNodeId(node.id);
    setIsOpen(true);
    if(!ConceptsData[node.id]){
      setDataConcept([]);
    } else {
      setDataConcept(ConceptsData[node.id]);
    }
  }, []);

  const { setCenter } = useReactFlow();

  useEffect(() => {
    setCenter(0, 0, { zoom: 1, duration: 800 });

    const concepts = JSON.parse(localStorage.getItem('selectedConcepts')) || [];
    setSelectedConcepts(concepts);

    const id = JSON.parse(localStorage.getItem('documentId')) || null;
    setDocumentId(id);
    
  }, [setCenter]);

  const handleAddToDocument = (concept) => {
    if (!selectedConcepts.find((c) => c.id === concept.id)) {
      const newSelectedConcepts = [...selectedConcepts, concept];
      setSelectedConcepts(newSelectedConcepts);
      localStorage.setItem('selectedConcepts', JSON.stringify(newSelectedConcepts));
      alert(`Concept ${concept.concept} saved!`);
    } else {
      alert(`Concept ${concept.concept} already saved!`);
    }
  };

  const handleNextClick = () => {
    if (selectedConcepts.length > 0) {
      localStorage.setItem('selectedConcepts', JSON.stringify(selectedConcepts));

      if(!documentId)
        localStorage.setItem('documentId', JSON.stringify(Date.now()));

      navigate("/questions");
    }
  };

  const handleSectionClick = (newSection) => {
    setIsOpen(false);
    setSection(newSection);
    const { nodes: newNodes, edges: newEdges } = createNodesAndEdges(newSection);
    setNodes(newNodes);
    setEdges(newEdges);
  };

  const getConceptById = (id) => {
    return Object.values(ConceptsData).find(concept => concept.id === id);
  };

  const hasRelatedConcepts = (dataConcept) => {
    return dataConcept && Array.isArray(dataConcept.relatedConcepts) && dataConcept.relatedConcepts.length > 0;
  };

  const handleRelatedConceptClick = (relatedConceptId) => {
    const relatedConcept = getConceptById(relatedConceptId);
    if (relatedConcept) {
      setDataConcept(relatedConcept); // Update the dataConcept with the new related concept
      setClickedNodeId(relatedConceptId); // Optionally update the clickedNodeId if needed
    } else {
      console.warn(`No concept found for ID: ${relatedConceptId}`);
    }
  };

  return (
    <div className='Tool'>
      <div className='SelectBar'>
        <div className='SelectText'>
          {clickedNodeId == null ? (
            <div>Selected:</div>
          ) : (
            <div>{dataConcept.concept}</div>
          )}
        </div>
        <Button design={'Button classicBtn'} onClick={handleNextClick} disabled={selectedConcepts.length === 0}>Next</Button>
      </div>
      <div className='Subtitle'>Model Sections:</div>
      <div style={{paddingBottom: '1rem'}}>
      <Button design={'ButtonBar classicBtn startBtn'}  onClick={() => handleSectionClick('All')}>All</Button>
      <Button design={'ButtonBar classicBtn'} onClick={() => handleSectionClick('Modules')}>Modules</Button>
      <Button design={'ButtonBar classicBtn'} onClick={() => handleSectionClick('Universalism')}>Universalism</Button>
      <Button design={'ButtonBar classicBtn'} onClick={() => handleSectionClick('Equality')}>Equality</Button>
      <Button design={'ButtonBar classicBtn'} onClick={() => handleSectionClick('Security')}>Security</Button>
      <Button design={'ButtonBar classicBtn'} onClick={() => handleSectionClick('Gender')}>Gender</Button>
      <Button design={'ButtonBar classicBtn endBtn'} onClick={() => handleSectionClick('Culture')}>Culture</Button>
      </div>
      <div className='diagramStyle'>
        <div className="floatingedges">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodeClick={handleNodeClick}
            onEdgesChange={onEdgesChange}
            connectionLineComponent={FloatingConnectionLine}
          >
            <Controls showInteractive={false} />
            <MiniMap zoomable pannable/>
            <Background variant="cross" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      {isOpen && (<div className="BigTittle">Characteristics</div>)}
      {isOpen && (<Table dataConcept={dataConcept} onAddToDocument={handleAddToDocument} />)}
      {hasRelatedConcepts(dataConcept) && (<div className='Subtitle'>Related Concepts:</div>)}
      <div style={{paddingBottom: '1rem', display: 'flex', justifyContent: 'space-around',}}>
      {hasRelatedConcepts(dataConcept) && dataConcept.relatedConcepts.map((relatedConceptId) => {
        const relatedConcept = getConceptById(relatedConceptId);
        return (
          <Button
            design={'Button classicBtn'}
            key={relatedConceptId}
            onClick={() => handleRelatedConceptClick(relatedConceptId)}
          >
            {relatedConcept ? relatedConcept.concept : 'Unknown Concept'}
          </Button>
        );
      })}
      </div>
    </div>
  );
}

const Button = ({ disabled = false, design, onClick, children }) => {
  return (
    <button disabled={disabled} className={design} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default function WrappedTool() {
  return (
    <ReactFlowProvider>
      <Tool />
    </ReactFlowProvider>
  );
}
