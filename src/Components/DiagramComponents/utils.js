import { Position } from 'reactflow';

// this helper function returns the intersection point
// of the line between the center of the intersectionNode and the target node
function getNodeIntersection(intersectionNode, targetNode) {
  // https://math.stackexchange.com/questions/1724792/an-algorithm-for-finding-the-intersection-point-between-a-center-of-vision-and-a
  const {
    width: intersectionNodeWidth,
    height: intersectionNodeHeight,
    positionAbsolute: intersectionNodePosition,
  } = intersectionNode;
  const targetPosition = targetNode.positionAbsolute;

  const w = intersectionNodeWidth / 2;
  const h = intersectionNodeHeight / 2;

  const x2 = intersectionNodePosition.x + w;
  const y2 = intersectionNodePosition.y + h;
  const x1 = targetPosition.x + targetNode.width / 2;
  const y1 = targetPosition.y + targetNode.height / 2;

  const xx1 = (x1 - x2) / (2 * w) - (y1 - y2) / (2 * h);
  const yy1 = (x1 - x2) / (2 * w) + (y1 - y2) / (2 * h);
  const a = 1 / (Math.abs(xx1) + Math.abs(yy1));
  const xx3 = a * xx1;
  const yy3 = a * yy1;
  const x = w * (xx3 + yy3) + x2;
  const y = h * (-xx3 + yy3) + y2;

  return { x, y };
}

// returns the position (top,right,bottom or right) passed node compared to the intersection point
function getEdgePosition(node, intersectionPoint) {
  const n = { ...node.positionAbsolute, ...node };
  const nx = Math.round(n.x);
  const ny = Math.round(n.y);
  const px = Math.round(intersectionPoint.x);
  const py = Math.round(intersectionPoint.y);

  if (px <= nx + 1) {
    return Position.Left;
  }
  if (px >= nx + n.width - 1) {
    return Position.Right;
  }
  if (py <= ny + 1) {
    return Position.Top;
  }
  if (py >= n.y + n.height - 1) {
    return Position.Bottom;
  }

  return Position.Top;
}

// returns the parameters (sx, sy, tx, ty, sourcePos, targetPos) you need to create an edge
export function getEdgeParams(source, target) {
  const sourceIntersectionPoint = getNodeIntersection(source, target);
  const targetIntersectionPoint = getNodeIntersection(target, source);

  const sourcePos = getEdgePosition(source, sourceIntersectionPoint);
  const targetPos = getEdgePosition(target, targetIntersectionPoint);

  return {
    sx: sourceIntersectionPoint.x,
    sy: sourceIntersectionPoint.y,
    tx: targetIntersectionPoint.x,
    ty: targetIntersectionPoint.y,
    sourcePos,
    targetPos,
  };
}

const sectionsConfig = {
  All: {
    nodes:  [
      { id: 'Universalism', data: { label: 'Universalism' }, position: { x: 0, y: 0 } },
      { id: 'Social Justice', data: { label: 'Social Justice' }, position: { x: 200, y: -60 } },
      { id: 'Equality', data: { label: 'Equality' }, position: { x: -200, y: -60 } },
      { id: 'Wisdom', data: { label: 'Wisdom' }, position: { x: 200, y: 150 } },
      { id: 'Broadminded', data: { label: 'Broadminded' }, position: { x: -200, y: 150 } },
      { id: 'Universalism Requirement', data: { label: 'Universalism Requirement' }, position: { x: 0, y: 250 } },
      { id: 'Social Sustainability', data: { label: 'Social Sustainability' }, position: { x: 0, y: -150 } },
    ],
    edges: [
      { id: `uni-sj`, target: 'Universalism', source: `Social Justice`, type: 'floating' },
      { id: `uni-eq`, target: 'Universalism', source: `Equality`, type: 'floating' },
      { id: `uni-wis`, target: 'Universalism', source: `Wisdom`, type: 'floating' },
      { id: `uni-broa`, target: 'Universalism', source: `Broadminded`, type: 'floating' },
      { id: `uni-unireq`, target: 'Universalism', source: `Universalism Requirement`, type: 'floating' },
      { id: `uni-socialsus`, target: 'Universalism', source: `Social Sustainability`, type: 'floating' },
      { id: `sj-eq`, target: 'Social Justice', source: `Equality`, type: 'floating' },
      { id: `socialsus-eq`, target: 'Social Sustainability', source: `Equality`, type: 'floating' },    
    ],
  },
  Modules: {
    nodes:  [
      { id: 'Universalism', data: { label: 'Universalism' }, position: { x: 0, y: 0 } },
      { id: 'Security', data: { label: 'Security' }, position: { x: 220, y: -80 } },
      { id: 'Trust', data: { label: 'Trust' }, position: { x: 40, y: -170 } },
      { id: 'Privacy', data: { label: 'Privacy' }, position: { x: 400, y: -170 } },
      { id: 'Security Requirement', data: { label: 'Security Requirement' }, position: { x: 220, y: -170 } },
      { id: 'Equality', data: { label: 'Equality' }, position: { x: -220, y: -80 } },
      { id: 'Gender', data: { label: 'Gender' }, position: { x: 220, y: 80 } },
      { id: 'Culture', data: { label: 'Culture' }, position: { x: -220, y: 80 } },
    ],
    edges: [
      { id: `uni-sec`, target: 'Universalism', source: `Security`, type: 'floating' },
      { id: `uni-eq`, target: 'Universalism', source: `Equality`, type: 'floating' },
      { id: `uni-gen`, target: 'Universalism', source: `Gender`, type: 'floating' },
      { id: `uni-cul`, target: 'Universalism', source: `Culture`, type: 'floating' },
      { id: `sec-tr`, target: 'Security', source: `Trust`, type: 'floating' },
      { id: `sec-pri`, target: 'Security', source: `Privacy`, type: 'floating' },
      { id: `sec-secReq`, target: 'Security', source: `Security Requirement`, type: 'floating' },
    ],
  },
  Universalism: {
    nodes: [
      { id: 'Universalism', data: { label: 'Universalism' }, position: { x: 0, y: 0 } },
      { id: 'Social Justice', data: { label: 'Social Justice' }, position: { x: 200, y: -60 } },
      { id: 'Equality', data: { label: 'Equality' }, position: { x: -200, y: -60 } },
      { id: 'Wisdom', data: { label: 'Wisdom' }, position: { x: 200, y: 150 } },
      { id: 'Broadminded', data: { label: 'Broadminded' }, position: { x: -200, y: 150 } },
      { id: 'Universalism Requirement', data: { label: 'Universalism Requirement' }, position: { x: 0, y: 250 } }
    ],
    edges: [
      { id: `uni-sj`, target: 'Universalism', source: `Social Justice`, type: 'floating' },
      { id: `uni-eq`, target: 'Universalism', source: `Equality`, type: 'floating' },
      { id: `uni-wis`, target: 'Universalism', source: `Wisdom`, type: 'floating' },
      { id: `uni-broa`, target: 'Universalism', source: `Broadminded`, type: 'floating' },
      { id: `uni-unireq`, target: 'Universalism', source: `Universalism Requirement`, type: 'floating' },
      { id: `uni-socialsus`, target: 'Universalism', source: `Social Sustainability`, type: 'floating' },
      { id: `sj-eq`, target: 'Social Justice', source: `Equality`, type: 'floating' },
    ],
  },
  Equality: {
    nodes: [
      { id: 'Equality', data: { label: 'Equality' }, position: { x: 0, y: 0 } },
      { id: 'Social Sustainability', data: { label: 'Social Sustainability' }, position: { x: 0, y: -150 } },
    ],
    edges: [
      { id: `socialsus-eq`, target: 'Social Sustainability', source: `Equality`, type: 'floating' }, 
    ],
  },
  Security: {
    nodes: [
      { id: 'Equality', data: { label: 'Equality' }, position: { x: 0, y: 0 } },
      { id: 'Social Sustainability', data: { label: 'Social Sustainability' }, position: { x: 0, y: -150 } },
    ],
    edges: [
      { id: `socialsus-eq`, target: 'Social Sustainability', source: `Equality`, type: 'floating' }, 
    ],
  },
  Gender: {
    nodes: [
      { id: 'Equality', data: { label: 'Equality' }, position: { x: 0, y: 0 } },
      { id: 'Social Sustainability', data: { label: 'Social Sustainability' }, position: { x: 0, y: -150 } },
    ],
    edges: [
      { id: `socialsus-eq`, target: 'Social Sustainability', source: `Equality`, type: 'floating' }, 
    ],
  },
  Culture: {
    nodes: [
      { id: 'Culture', data: { label: 'Culture' }, position: { x: 0, y: 0 } },
      { id: 'Norm', data: { label: 'Norm' }, position: { x: -250, y: -150 } },
      { id: 'Value', data: { label: 'Value' }, position: { x: 0, y: -150 } },
      { id: 'Action', data: { label: 'Action' }, position: { x: 80, y: 150 } },
      { id: 'Ritual', data: { label: 'Ritual' }, position: { x: 330, y: 60 } },
      { id: 'Custom', data: { label: 'Custom' }, position: { x: 330, y: 240 } },
      { id: 'Social Environment', data: { label: 'Social Environment' }, position: { x: -250, y: 100 } },
      { id: 'Social Interaction', data: { label: 'Social Interaction' }, position: { x: -250, y: 0 } },
      { id: 'Universalism', data: { label: 'Universalism' }, position: { x: -200, y: -350 } },
      { id: 'Human', data: { label: 'Human' }, position: { x: 200, y: -350 } },
      { id: 'Beliefs', data: { label: 'Beliefs' }, position: { x: 400, y: -200 } },
      { id: 'Human Right', data: { label: 'Human Right' }, position: { x: -550, y: -200 } },
      { id: 'Fair Salary', data: { label: 'Fair Salary' }, position: { x: -550, y: -100 } },
    ],
    edges: [
      { id: `cul-act`, source: 'Culture', target: `Action`, type: 'floating'},
      { id: `cul-socInt`, source: 'Culture', target: `Social Interaction`, type: 'floating'}, 
      { id: `nor-socInt`, source: 'Norm', target: `Value`, type: 'floating'},
      { id: `nor-humRig`, source: 'Norm', target: `Human Right`, type: 'floating'}, 
      { id: `nor-faiSal`, source: 'Norm', target: `Fair Salary`, type: 'floating'}, 
      { id: `val-uni`, source: 'Value', target: `Universalism`, type: 'floating'},
      { id: `val-rit`, source: 'Value', target: `Ritual`, type: 'floating'}, 
      { id: `val-bel`, source: 'Value', target: `Beliefs`, type: 'floating'}, 
      { id: `rit-act`, source: 'Ritual', target: `Action`, type: 'floating'}, 
      { id: `cus-act`, source: 'Custom', target: `Action`, type: 'floating'}, 
      { id: `socEnv-socInt`, source: 'Social Environment', target: `Social Interaction`, type: 'floating'}, 
      { id: `socEnv-bel`, source: 'Social Environment', target: `Beliefs`, type: 'floating'}, 
      { id: `socInt-socEnv`, source: 'Social Interaction', target: `Social Environment`, type: 'floating'}, 
      { id: `socInt-act`, source: 'Social Interaction', target: `Action`, type: 'floating'}, 
      { id: `socInt-bel`, source: 'Social Interaction', target: `Beliefs`, type: 'floating'}, 
      
      { id: `hum-nor`, source: 'Human', target: `Norm`, type: 'floating'}, 
      { id: `hum-val`, source: 'Human', target: `Value`, type: 'floating'}, 
      { id: `hum-socInt`, source: 'Human', target: `Social Interaction`, type: 'floating'}, 
      { id: `hum-act`, source: 'Human', target: `Action`, type: 'floating'}, 

      { id: `bel-hum`, source: 'Beliefs', target: `Human`, type: 'floating', label: 'influences'}, 
      { id: `bel-val`, source: 'Beliefs', target: `Value`, type: 'floating', label: 'influences'}, 
      { id: `bel-act`, source: 'Beliefs', target: `Action`, type: 'floating', label: 'influences'}, 
      { id: `bel-cus`, source: 'Beliefs', target: `Custom`, type: 'floating', label: 'influences'}, 
    ],
  },
};

export function createNodesAndEdges(section) {
  return sectionsConfig[section] || { nodes: [], edges: [] };
}