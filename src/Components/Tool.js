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
import DiagramNode from './DiagramNode.js';
import './DiagramNode.css';

const initialNodes = [
  { id: 'Universalism', position: { x: 0, y: 0 }, data: { label: 'Universalism'}  },
  { id: 'Social Justice', position: { x: 200, y: 0 }, data: { label: 'Social Justice'} },
  { id: 'Equality', position: { x: -200, y: 0 }, data: { label: 'Equality'} },
  { id: 'Wisdom', position: { x: -100, y: 100 }, data: { label: 'Wisdom'} },
  { id: 'Broadminded', position: { x: 100, y: 100 }, data: { label: 'Broadminded' } },
  { id: 'Universalism Requirement', position: { x: 0, y: 200 }, data: { label: 'Universalism Requirement' } },
  { id: 'Social Sustainability', position: { x: 0, y: -200 }, data: { label: 'Social Sustainability' } },
];
const initialEdges = [
  { id: 'uni-sj', source: 'Universalism', target: 'Social Justice'},
  { id: 'uni-eq', source: 'Universalism', target: 'Equality'},
  { id: 'uni-wis', source: 'Universalism', target: 'Wisdom'},
  { id: 'uni-broad', source: 'Universalism', target: 'Broadminded'},
  { id: 'uni-unireq', source: 'Universalism', target: 'Universalism Requirement'},
  { id: 'uni-socials', source: 'Universalism', target: 'Social Sustainability'},
  { id: 'eq-sj', source: 'Social Justice', target: 'Equality'},
];

const nodeTypes = { diagramNode: DiagramNode };

function Tool() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedNodeId, setClickedNodeId] = useState(null);

  const handleNodeClick = useCallback((event, node) => {
    setClickedNodeId(node.id);
    setIsOpen(true);
  }, []);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <div className='App'>
      <div className='diagramStyle'>
        <div style={{ width: '90vw', height: '70vh', border: '5px solid #4BB4DE', borderRadius: '10px' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            onNodeClick={handleNodeClick}
          >
            <Controls showInteractive={false} />
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
