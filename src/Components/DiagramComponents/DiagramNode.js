import { Handle, Position } from 'reactflow';
import './DiagramNode.css';

function DiagramNode({ isConnectable }) {
  return (
    <div className="text-updater-node">
      <div>
        <label>Text</label>
      </div>
      <Handle type="source" position={Position.Bottom} id="a" isConnectable={isConnectable}/>
    </div>
  );
}

export default DiagramNode;