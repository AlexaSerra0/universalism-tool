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
      { id: 'Security', data: { label: 'Security' }, position: { x: 0, y: -100 } },
      { id: 'Trust', data: { label: 'Trust' }, position: { x: -180, y: -190 } },
      { id: 'Privacy', data: { label: 'Privacy' }, position: { x: 220, y: -190 } },
      { id: 'Security Requirement', data: { label: 'Security Requirement' }, position: { x: 0, y: -190 } },
      { id: 'Equality', data: { label: 'Equality' }, position: { x: -240, y: 0 } },
      { id: 'Gender', data: { label: 'Gender' }, position: { x: 240, y: 0 } },
      { id: 'Culture', data: { label: 'Culture' }, position: { x: 0, y: 100 } },
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
      { id: 'Security', data: { label: 'Security' }, position: { x: 0, y: 0 } },
      { id: 'Privacy', data: { label: 'Privacy' }, position: { x: -750, y: -100} },
      { id: 'PersonalInformation', data: { label: 'Personal Information' }, position: { x: -900, y: -200} },
      { id: 'Owner|Controller', data: { label: 'Owner | Controller' }, position: { x: -900, y: -300} },
      { id: 'ThirdParty', data: { label: 'Third Party' }, position: { x: -900, y: -400} },
      { id: 'PrivacyMechanism', data: { label: 'Privacy Mechanism' }, position: { x: -600, y: -200} },
      { id: 'Constraint', data: { label: 'Constraint' }, position: { x: -700, y: -300} },
      { id: 'Context', data: { label: 'Context' }, position: { x: -500, y: -300} },
      { id: 'SecurityRequirement', data: { label: 'Security Requirement' }, position: { x: 0, y: -100} },
      { id: 'SecurityRisk', data: { label: 'Security Risk' }, position: { x: -200, y: -150} },
      { id: 'Threat', data: { label: 'Threat' }, position: { x: -200, y: -250} },
      { id: 'Attack', data: { label: 'Attack' }, position: { x: -200, y: -350} },
      { id: 'Harm', data: { label: 'Harm' }, position: { x: -100, y: -420} },
      { id: 'SecurityMechanism', data: { label: 'Security Mechanism' }, position: { x: 200, y: -200} },
      { id: 'Vulnerability', data: { label: 'Vulnerability' }, position: { x: 100, y: -320} },
      { id: 'Asset', data: { label: 'Asset' }, position: { x: 100, y: -420} },
      { id: 'Resource', data: { label: 'Resource' }, position: { x: 0, y: -520} },
      { id: 'Property', data: { label: 'Property' }, position: { x: -100, y: -620} },
      { id: 'Service', data: { label: 'Service' }, position: { x: 100, y: -620} },
      { id: 'Trust', data: { label: 'Trust' }, position: { x: 600, y: -100} },
      { id: 'Accountability', data: { label: 'Accountability' }, position: { x: 600, y: -200} },
      { id: 'Transparency', data: { label: 'Transparency' }, position: { x: 500, y: -300} },
      { id: 'Honesty', data: { label: 'Honesty' }, position: { x: 700, y: -300} },
      { id: 'Human', data: { label: 'Human' }, position: { x: 200, y: -520 } },
      { id: 'SoftwareSystem', data: { label: 'Software System' }, position: { x: 450, y: -420 } },
      { id: 'OperatingSystem', data: { label: 'Operating System' }, position: { x: -200, y: -720 } },
      { id: 'Hardware', data: { label: 'Hardware' }, position: { x: 0, y: -720 } },
      { id: 'SocialSustainability', data: { label: 'Social Sustainability' }, position: { x: 0, y: 100 } },
      { id: 'Universalism', data: { label: 'Universalism' }, position: { x: 0, y: 200 } },
      { id: 'GenderEquity', data: { label: 'Gender Equity' }, position: { x: -400, y: -600 } },
      { id: 'SocialEquality', data: { label: 'Social Equality' }, position: { x: -400, y: -520 } },
      { id: 'NeedsSatisfaction', data: { label: 'Needs Satisfaction' }, position: { x: -400, y: -440 } },
      { id: 'Community', data: { label: 'Community' }, position: { x: 850, y: -100 } },
      { id: 'SocialCohesion', data: { label: 'Social Cohesion' }, position: { x: 850, y: -200 } },
    ],
    edges: [
      { id: `uni-socSus`, source: 'Universalism', target: `SocialSustainability`, type: 'floating'},
      { id: `human-priMec`, source: 'Human', target: `PrivacyMechanism`, type: 'floating'},
      { id: `human-secMec`, source: 'Human', target: `SecurityMechanism`, type: 'floating'},
      { id: `socEquality-resource`, source: 'SocialEquality', target: `Resource`, type: 'floating'},
      { id: `needsSatis-resource`, source: 'NeedsSatisfaction', target: `Resource`, type: 'floating'},
      { id: `softSys-resource`, source: 'SoftwareSystem', target: `Resource`, type: 'floating'},
      { id: `sec-pri`, source: 'Security', target: `Privacy`, type: 'floating'}, 
      { id: `sec-tru`, source: 'Security', target: `Trust`, type: 'floating'}, 
      { id: `sec-socSus`, source: 'Security', target: `SocialSustainability`, type: 'floating'},  
      { id: `pri-perInf`, source: 'Privacy', target: `PersonalInformation`, type: 'floating'}, 
      { id: `pri-priMec`, source: 'Privacy', target: `PrivacyMechanism`, type: 'floating'}, 
      { id: `perInf-priMec`, source: 'PersonalInformation', target: `PrivacyMechanism`, type: 'floating'}, 
      { id: `perInf-ownCont`, source: 'PersonalInformation', target: `Owner|Controller`, type: 'floating'}, 
      { id: `ownCont-thiPar`, source: 'Owner|Controller', target: `ThirdParty`, type: 'floating'}, 
      { id: `priMec-secRis`, source: 'PrivacyMechanism', target: `SecurityRisk`, type: 'floating'}, 
      { id: `priMec-constraint`, source: 'PrivacyMechanism', target: `Constraint`, type: 'floating'}, 
      { id: `priMec-context`, source: 'PrivacyMechanism', target: `Context`, type: 'floating'}, 
      { id: `priMec-tru`, source: 'PrivacyMechanism', target: `Trust`, type: 'floating'}, 
      { id: `secRequir-security`, source: 'SecurityRequirement', target: `Security`, type: 'floating'}, 
      { id: `secRequir-secRisk`, source: 'SecurityRequirement', target: `SecurityRisk`, type: 'floating'}, 
      { id: `secRisk-threat`, source: 'SecurityRisk', target: `Threat`, type: 'floating'}, 
      { id: `secRisk-vulnerability`, source: 'SecurityRisk', target: `Vulnerability`, type: 'floating'}, 
      { id: `threat-attack`, source: 'Threat', target: `Attack`, type: 'floating'}, 
      { id: `attack-harm`, source: 'Attack', target: `Harm`, type: 'floating'}, 
      { id: `attack-vulnerability`, source: 'Attack', target: `Vulnerability`, type: 'floating'},
      { id: `harm-asset`, source: 'Harm', target: `Asset`, type: 'floating'}, 
      { id: `secMec-secRequir`, source: 'SecurityMechanism', target: `SecurityRequirement`, type: 'floating'}, 
      { id: `secMec-vulnerability`, source: 'SecurityMechanism', target: `Vulnerability`, type: 'floating'}, 
      { id: `secMec-asset`, source: 'Vulnerability', target: `Asset`, type: 'floating'}, 
      { id: `asset-resource`, source: 'Asset', target: `Resource`, type: 'floating'}, 
      { id: `asset-human`, source: 'Asset', target: `Human`, type: 'floating'}, 
      { id: `asset-softSys`, source: 'Asset', target: `SoftwareSystem`, type: 'floating'}, 
      { id: `resource-property`, source: 'Resource', target: `Property`, type: 'floating'}, 
      { id: `resource-service`, source: 'Resource', target: `Service`, type: 'floating'}, 
      { id: `resource-gendEquity`, source: 'Resource', target: `GenderEquity`, type: 'floating'}, 
      { id: `property-opSys`, source: 'Property', target: `OperatingSystem`, type: 'floating'}, 
      { id: `property-hardware`, source: 'Property', target: `Hardware`, type: 'floating'}, 
      { id: `tru-account`, source: 'Trust', target: `Accountability`, type: 'floating'},
      { id: `tru-community`, source: 'Trust', target: `Community`, type: 'floating'},
      { id: `account-transp`, source: 'Accountability', target: `Transparency`, type: 'floating'}, 
      { id: `account-honest`, source: 'Accountability', target: `Honesty`, type: 'floating'}, 
      { id: `account-SocCohesion`, source: 'Accountability', target: `SocialCohesion`, type: 'floating'}, 
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
      { id: 'SocialEnvironment', data: { label: 'Social Environment' }, position: { x: -250, y: 100 } },
      { id: 'SocialInteraction', data: { label: 'Social Interaction' }, position: { x: -250, y: 0 } },
      { id: 'Universalism', data: { label: 'Universalism' }, position: { x: -200, y: -350 } },
      { id: 'Human', data: { label: 'Human' }, position: { x: 200, y: -350 } },
      { id: 'Beliefs', data: { label: 'Beliefs' }, position: { x: 400, y: -200 } },
      { id: 'HumanRight', data: { label: 'Human Right' }, position: { x: -550, y: -200 } },
      { id: 'FairSalary', data: { label: 'Fair Salary' }, position: { x: -550, y: -100 } },
    ],
    edges: [
      { id: `cul-act`, source: 'Culture', target: `Action`, type: 'floating'},
      { id: `cul-socInt`, source: 'Culture', target: `SocialInteraction`, type: 'floating'}, 
      { id: `nor-socInt`, source: 'Norm', target: `Value`, type: 'floating'},
      { id: `nor-humRig`, source: 'Norm', target: `HumanRight`, type: 'floating'}, 
      { id: `nor-faiSal`, source: 'Norm', target: `FairSalary`, type: 'floating'}, 
      { id: `val-uni`, source: 'Value', target: `Universalism`, type: 'floating'},
      { id: `val-rit`, source: 'Value', target: `Ritual`, type: 'floating'}, 
      { id: `val-bel`, source: 'Value', target: `Beliefs`, type: 'floating'}, 
      { id: `rit-act`, source: 'Ritual', target: `Action`, type: 'floating'}, 
      { id: `cus-act`, source: 'Custom', target: `Action`, type: 'floating'}, 
      { id: `socEnv-socInt`, source: 'SocialEnvironment', target: `SocialInteraction`, type: 'floating'}, 
      { id: `socEnv-bel`, source: 'SocialEnvironment', target: `Beliefs`, type: 'floating'}, 
      { id: `socInt-socEnv`, source: 'SocialInteraction', target: `SocialEnvironment`, type: 'floating'}, 
      { id: `socInt-act`, source: 'SocialInteraction', target: `Action`, type: 'floating'}, 
      { id: `socInt-bel`, source: 'SocialInteraction', target: `Beliefs`, type: 'floating'}, 
      { id: `hum-nor`, source: 'Human', target: `Norm`, type: 'floating'}, 
      { id: `hum-val`, source: 'Human', target: `Value`, type: 'floating'}, 
      { id: `hum-socInt`, source: 'Human', target: `SocialInteraction`, type: 'floating'}, 
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