import React, { useState, useCallback } from 'react';
import "../App.css";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';

const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];

function Tool() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedNodeId, setClickedNodeId] = useState(null);

  const handleClick = () => {
    setIsOpen(true);
    console.log("Diagram clicked!");
  };

  const handleNodeClick = useCallback((event, node) => {
    setClickedNodeId(node.id);
    setIsOpen(true);
    console.log("Node clicked:", node.id);
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className='App'>
      <div className='diagramStyle'>
        <div style={{ width: '90vw', height: '70vh', border: '5px solid #4BB4DE' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onClick={handleClick}
            onNodeClick={handleNodeClick}
          >
            <Controls />
            <MiniMap />
            <Background variant="cross" gap={12} size={1} />
          </ReactFlow>
        </div>
      </div>
      {isOpen && clickedNodeId && (
        <div>Clicked Node ID: {clickedNodeId}</div>
      )}
    </div>
  );
}

export default Tool;
