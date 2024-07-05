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
      { id: 'Security', data: { label: 'Security' }, position: { x: 200, y: -60 } },
      { id: 'Equality', data: { label: 'Equality' }, position: { x: -200, y: -60 } },
      { id: 'Accessibility', data: { label: 'Accessibility' }, position: { x: 200, y: 150 } },
      { id: 'Gender', data: { label: 'Gender' }, position: { x: -200, y: 150 } },
      { id: 'Culture', data: { label: 'Culture' }, position: { x: 0, y: 250 } },
    ],
    edges: [
      { id: `uni-sec`, target: 'Universalism', source: `Security`, type: 'floating' },
      { id: `uni-eq`, target: 'Universalism', source: `Equality`, type: 'floating' },
      { id: `uni-acc`, target: 'Universalism', source: `Accessibility`, type: 'floating' },
      { id: `uni-gen`, target: 'Universalism', source: `Gender`, type: 'floating' },
      { id: `uni-cul`, target: 'Universalism', source: `Culture`, type: 'floating' },
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
};

export function createNodesAndEdges(section) {
  return sectionsConfig[section] || { nodes: [], edges: [] };
}