import React, { useState, useCallback, useEffect  } from 'react';
import "../App.css";
import ReactFlow, {
  MiniMap,
  Controls,
  addEdge,
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

const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges();


const nodeTypes = { diagramNode: DiagramNode };

const edgeTypes = {
  floating: FloatingEdge,
};

function Tool() {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedNodeId, setClickedNodeId] = useState(null);

  const handleNodeClick = useCallback((event, node) => {
    setClickedNodeId(node.id);
    setIsOpen(true);
  }, []);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const { setCenter } = useReactFlow();

  useEffect(() => {
    setCenter(0, 0, { zoom: 1, duration: 800 });
  }, [setCenter]);

  return (
    <div className='App'>
      <div style={{paddingTop: '2rem'}}>
        Horizontal process barrrrrr
      </div>
      <div style={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        Select barrrrrr
      </div>
      <div className='diagramStyle'>
        <div className="floatingedges" style={{ width: '90vw', height: '80vh', border: '5px solid #4BB4DE', borderRadius: '10px' }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
            onNodeClick={handleNodeClick}
            //onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            connectionLineComponent={FloatingConnectionLine}
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

export default function WrappedTool() {
  return (
    <ReactFlowProvider>
      <Tool />
    </ReactFlowProvider>
  );
}
