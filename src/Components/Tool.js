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
import './DiagramComponents/DiagramNode.css';
import FloatingEdge from './DiagramComponents/FloatingEdge';
import FloatingConnectionLine from './DiagramComponents/FloatingConnectionLine';
import { createNodesAndEdges } from './DiagramComponents/utils';

//import { Table } from './DiagramComponents/Table.js';
//import ConceptsData from './DiagramComponents/ConceptsData.js';
import { Link } from 'react-router-dom';
import { Table } from './DiagramComponents/SecondTable.js';
import ConceptsData from './DiagramComponents/SecondConceptsData.js';

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

  const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(section);
  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const navigate = useNavigate();

  const handleNodeClick = useCallback((event, node) => {
    setClickedNodeId(node.id);
    setIsOpen(true);
    setDataConcept(ConceptsData[node.id]);
    //setDataGoals(ConceptsData[`${node.id}Goals`]);
  }, []);

  const { setCenter } = useReactFlow();

  useEffect(() => {
    setCenter(0, 0, { zoom: 1, duration: 800 });
    const concepts = JSON.parse(localStorage.getItem('selectedConcepts')) || [];
    setSelectedConcepts(concepts);
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

  return (
    <div className='Tool'>
      <div className='FirstRow'>
        <Link to={"/example"}>Case Example: ShareTheMeal</Link>
      </div>
      <div className='SelectBar'>
        <div className='SelectText'>
          {clickedNodeId == null ? (
            <div>Selected:</div>
          ) : (
            <div>{clickedNodeId}</div>
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
        <div className="floatingedges" style={{ width: '90vw', height: '80vh', border: '5px solid #4BB4DE', borderRadius: '10px' }}>
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
            <MiniMap />
            <Background variant="cross" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      {isOpen && (<div className="BigTittle">Characteristics</div>)}
      {/* {isOpen && (<Table dataConcept={dataConcept} dataGoals={dataGoals} /> )} */}
      {isOpen && (<Table dataConcept={dataConcept} onAddToDocument={handleAddToDocument}/>)}
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
