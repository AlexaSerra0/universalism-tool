import React, { useState, useCallback, useEffect } from 'react';
import "../App.css";
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

import { Table } from './DiagramComponents/Table.js';
import ConceptsData from './DiagramComponents/ConceptsData.js';

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges();

const nodeTypes = { diagramNode: DiagramNode };
const edgeTypes = {
  floating: FloatingEdge,
};

function Tool() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedNodeId, setClickedNodeId] = useState(null);
  const [currentNodeIndex, setCurrentNodeIndex] = useState(0); 

  const [dataConcept, setDataConcept] = useState(null);
  const [dataGoals, setDataGoals] = useState(null);
  
  const [nodes] = useNodesState(initialNodes);
  const [edges, onEdgesChange] = useEdgesState(initialEdges);

  const handleNodeClick = useCallback((event, node) => {
    setClickedNodeId(node.id);
    setIsOpen(true);
    setCurrentNodeIndex(nodes.findIndex((n) => n.id === node.id));

    setDataConcept(ConceptsData[node.id]);
    setDataGoals(ConceptsData[`${node.id}Goals`]);
  }, [nodes]);

  const { setCenter } = useReactFlow();

  useEffect(() => {
    setCenter(0, 0, { zoom: 1, duration: 800 });
  }, [setCenter]);

  const handlePreviousClick = () => {
    if (currentNodeIndex > 0) {
      const newIndex = currentNodeIndex - 1;
      setClickedNodeId(nodes[newIndex].id);
      setCurrentNodeIndex(newIndex);

      setDataConcept(ConceptsData[nodes[newIndex].id]);
      setDataGoals(ConceptsData[`${nodes[newIndex].id}Goals`]);
    }
  };

  const handleNextClick = () => {
    if (currentNodeIndex < nodes.length - 1) {
      const newIndex = currentNodeIndex + 1;
      setClickedNodeId(nodes[newIndex].id);
      setCurrentNodeIndex(newIndex);

      setDataConcept(ConceptsData[nodes[newIndex].id]);
      setDataGoals(ConceptsData[`${nodes[newIndex].id}Goals`]);
    }
  };

  return (
    <div className='App'>
      <div style={{ paddingTop: '2rem' }}>
        Horizontal process barrrrrr
      </div>
      <div className='SelectBar'>
        <Button design={'Button classicBtn'} onClick={handlePreviousClick} >Previous</Button>
        <div className='SelectText'>
          {clickedNodeId == null ? (
            <div>Selected:</div>
          ) : (
            <div>{clickedNodeId}</div>
          )}
        </div>
        <Button design={'Button classicBtn'} onClick={handleNextClick} >Next</Button>
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
      {isOpen && (<Table dataConcept={dataConcept} dataGoals={dataGoals} /> )}
    </div>
  );
}

const Button = ({ design, onClick, children }) => {
  return (
    <button className={design} type="button" onClick={onClick}>
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
