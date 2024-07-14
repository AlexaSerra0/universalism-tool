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
      { id: 'Universalism', data: { label: 'Universalism' }, position: { x: 250, y: 0 } },
      { id: 'SocialJustice', data: { label: 'Social Justice' }, position: { x: 500, y: 100 } },
      { id: 'Equality', data: { label: 'Equality' }, position: { x: 0, y: 0 } },
      { id: 'SocialSustainability', data: { label: 'Social Sustainability' }, position: { x: 250, y: -100} },
      { id: 'NeedsSatisfaction', data: { label: 'Needs Satisfaction' }, position: { x: 500, y: -100} },
      { id: 'SocialCohesion', data: { label: 'Social Cohesion' }, position: { x: 450, y: -200} },
      { id: 'Community', data: { label: 'Community' }, position: { x: 50, y: -200} },
      { id: 'Security', data: { label: 'Security' }, position: { x: 250, y: -200 } },
      { id: 'SocialEquality', data: { label: 'Social Equality' }, position: { x: -350, y: -200} },
      { id: 'Resource', data: { label: 'Resource' }, position: { x: -350, y: -300} },
      { id: 'Asset', data: { label: 'Asset' }, position: { x: -100, y: -300 } },
      { id: 'Property', data: { label: 'Property' }, position: { x: -600, y: -250 } },
      { id: 'Service', data: { label: 'Service' }, position: { x: -600, y: -350 } },
      { id: 'Fairness', data: { label: 'Fairness' }, position: { x: -350, y: 200} },
      { id: 'FairTreatment', data: { label: 'Fair Treatment' }, position: { x: -150, y: 300} },
      { id: 'Discrimination', data: { label: 'Discrimination' }, position: { x: -550, y: 300} },
      { id: 'FairSalary', data: { label: 'Fair Salary' }, position: { x: -450, y: 400} },
      { id: 'HumanRight', data: { label: 'Human Right' }, position: { x: -250, y: 400} },
      { id: 'Socio-culturalEquity', data: { label: 'Socio-cultural Equity' }, position: { x: -800, y: 0} },
      { id: 'Compatibility', data: { label: 'Compatibility' }, position: { x: -1100, y: -200} },
      { id: 'Network', data: { label: 'Network' }, position: { x: -1200, y: -300} },
      { id: 'Hardware', data: { label: 'Hardware' }, position: { x: -1000, y: -300} },
      { id: 'OperatingSystem', data: { label: 'Operating System' }, position: { x: -900, y: -220} },
      { id: 'Device', data: { label: 'Device' }, position: { x: -1300, y: -220} },
      { id: 'Education', data: { label: 'Education' }, position: { x: -1100, y: -50} },
      { id: 'Knowledge', data: { label: 'Knowledge' }, position: { x: -1400, y: -100} },
      { id: 'GenderEquity', data: { label: 'Gender Equity' }, position: { x: -1150, y: 90} },
      { id: 'Accessibility', data: { label: 'Accessibility' }, position: { x: -1100, y: 200} },
      { id: 'AssistiveTechnology', data: { label: 'AssistiveTechnology' }, position: { x: -1250, y: 300} },
      { id: 'Disability', data: { label: 'Disability' }, position: { x: -950, y: 300 } },
      { id: 'SoftwareSystem', data: { label: 'Software System' }, position: { x: -230, y: -500 } },
      { id: 'Human', data: { label: 'Human' }, position: { x: -1100, y: 500 } },
      //{ id: 'UniversalismRequirement', data: { label: 'Universalism Requirement' }, position: { x: 250, y: 200 } },
      //{ id: 'Identity', data: { label: 'Identity' }, position: { x: -550, y: 600 } },
      //{ id: 'GenderStereotypes', data: { label: 'Gender Stereotypes' }, position: { x: -1450, y: 450 } },
      //{ id: 'Norm', data: { label: 'Norm' }, position: { x: -350, y: 500 } },
      //{ id: 'SocioculturalContext', data: { label: 'Sociocultural Context' }, position: { x: -800, y: 500 } },
      //{ id: 'Wisdom', data: { label: 'Wisdom' }, position: { x: -1600, y: -100 } },
      //{ id: 'Gender', data: { label: 'Gender' }, position: { x: -1550, y: 80 } },
      //{ id: 'Accountability', data: { label: 'Accountability' }, position: { x: 450, y: -400 } },
      //{ id: 'Trust', data: { label: 'Trust' }, position: { x: 200, y: -400 } },
    ],
    edges: [
      { id: `Universalism-SocialSustainability`, source: 'Universalism', target: `SocialSustainability`, type: 'floating'},
      { id: `Universalism-Equality`, source: 'Universalism', target: `Equality`, type: 'floating'},
      { id: `Universalism-SocialJustice`, source: 'Universalism', target: `SocialJustice`, type: 'floating'},
      { id: `SocialJustice-Equality`, source: 'SocialJustice', target: `Equality`, type: 'floating'},

      { id: `SocialSustainability-SocialCohesion`, source: 'SocialSustainability', target: `SocialCohesion`, type: 'floating'},
      { id: `SocialSustainability-NeedsSatisfaction`, source: 'SocialSustainability', target: `NeedsSatisfaction`, type: 'floating'},
      { id: `SocialSustainability-SocialEquality`, source: 'SocialSustainability', target: `SocialEquality`, type: 'floating'},
      { id: `SocialSustainability-Community`, source: 'SocialSustainability', target: `Community`, type: 'floating'},
      { id: `Security-SocialSustainability`, source: 'Security', target: `SocialSustainability`, type: 'floating'},
      { id: `NeedsSatisfaction-Resource`, source: 'NeedsSatisfaction', target: `Resource`, type: 'floating'},

      { id: `SocialEquality-Equality`, source: 'SocialEquality', target: `Equality`, type: 'floating'},
      { id: `SocialEquality-Resource`, source: 'SocialEquality', target: `Resource`, type: 'floating'},

      { id: `Resource-GenderEquity`, source: 'Resource', target: `GenderEquity`, type: 'floating'},
      { id: `Resource-Property`, source: 'Resource', target: `Property`, type: 'floating'},
      { id: `Resource-Service`, source: 'Resource', target: `Service`, type: 'floating'},
      { id: `Asset-Resource`, source: 'Asset', target: `Resource`, type: 'floating'},
      { id: `Asset-Human`, source: 'Asset', target: `Human`, type: 'floating'},
      { id: `Asset-SoftwareSystem`, source: 'Asset', target: `SoftwareSystem`, type: 'floating'},
      { id: `Property-OperatingSystem`, source: 'Property', target: `OperatingSystem`, type: 'floating'},
      { id: `Property-SoftwareSystem`, source: 'Property', target: `Hardware`, type: 'floating'},

      { id: `Fairness-Equality`, source: 'Fairness', target: `Equality`, type: 'floating'},
      { id: `FairTreatment-Fairness`, source: 'FairTreatment', target: `Fairness`, type: 'floating'},
      { id: `Discrimination-Fairness`, source: 'Discrimination', target: `Fairness`, type: 'floating'},
      { id: `Discrimination-GenderEquity`, source: 'Discrimination', target: `GenderEquity`, type: 'floating'},
      { id: `FairSalary-Fairness`, source: 'FairSalary', target: `Fairness`, type: 'floating'},
      { id: `HumanRight-Fairness`, source: 'HumanRight', target: `Fairness`, type: 'floating'},
      { id: `HumanRight-Education`, source: 'HumanRight', target: `Education`, type: 'floating'},

      { id: `Socio-culturalEquity-Equality`, source: 'Socio-culturalEquity', target: `Equality`, type: 'floating'},
      
      { id: `Compatibility-Socio-culturalEquity`, source: 'Compatibility', target: `Socio-culturalEquity`, type: 'floating'},
      { id: `Compatibility-Device`, source: 'Compatibility', target: `Device`, type: 'floating'},
      { id: `Compatibility-Network`, source: 'Compatibility', target: `Network`, type: 'floating'},
      { id: `Compatibility-OperatingSystem`, source: 'Compatibility', target: `OperatingSystem`, type: 'floating'},
      { id: `Compatibility-Hardware`, source: 'Compatibility', target: `Hardware`, type: 'floating'},

      { id: `Education-Socio-culturalEquity`, source: 'Education', target: `Socio-culturalEquity`, type: 'floating'},
      { id: `Education-SocialSustainability`, source: 'Education', target: `SocialSustainability`, type: 'floating'},
      { id: `Education-Community`, source: 'Education', target: `Community`, type: 'floating'},
      { id: `Education-Knowledge`, source: 'Education', target: `Knowledge`, type: 'floating'},
      { id: `Education-GenderEquity`, source: 'Education', target: `GenderEquity`, type: 'floating'},

      { id: `GenderEquity-Socio-culturalEquity`, source: 'GenderEquity', target: `Socio-culturalEquity`, type: 'floating'},
      { id: `GenderEquity-Equality`, source: 'GenderEquity', target: `Equality`, type: 'floating'},

      { id: `Accessibility-Socio-culturalEquity`, source: 'Accessibility', target: `Socio-culturalEquity`, type: 'floating'},
      { id: `Accessibility-Disability`, source: 'Accessibility', target: `Disability`, type: 'floating'},
      { id: `Accessibility-Human`, source: 'Accessibility', target: `Human`, type: 'floating'},

      { id: `AssistiveTechnology-Human`, source: 'AssistiveTechnology', target: `Human`, type: 'floating'},
      { id: `AssistiveTechnology-Accessibility`, source: 'AssistiveTechnology', target: `Accessibility`, type: 'floating'},
      { id: `AssistiveTechnology-Disability`, source: 'AssistiveTechnology', target: `Disability`, type: 'floating'},

      { id: `SoftwareSystem-Resource`, source: 'SoftwareSystem', target: `Resource`, type: 'floating'},

      { id: `Human-SoftwareSystem`, source: 'Human', target: `SoftwareSystem`, type: 'floating'},
      { id: `Human-Disability`, source: 'Human', target: `Disability`, type: 'floating'},
      //{ id: `security-tru`, source: 'Security', target: `Trust`, type: 'floating'},
      //{ id: `tru-accountability`, source: 'Trust', target: `Accountability`, type: 'floating'},
      //{ id: `tru-community`, source: 'Trust', target: `Community`, type: 'floating'},
      //{ id: `accountability-socialCohes`, source: 'Accountability', target: `SocialCohesion`, type: 'floating'},

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
      //{ id: 'GenderEquity', data: { label: 'Gender Equity' }, position: { x: -400, y: -600 } },
      //{ id: 'SocialEquality', data: { label: 'Social Equality' }, position: { x: -400, y: -520 } },
      //{ id: 'NeedsSatisfaction', data: { label: 'Needs Satisfaction' }, position: { x: -400, y: -440 } },
      //{ id: 'Community', data: { label: 'Community' }, position: { x: 850, y: -100 } },
      //{ id: 'SocialCohesion', data: { label: 'Social Cohesion' }, position: { x: 850, y: -200 } },
    ],
    edges: [
      { id: `Universalism-SocialSustainability`, source: 'Universalism', target: `SocialSustainability`, type: 'floating'},
      { id: `Human-PrivacyMechanism`, source: 'Human', target: `PrivacyMechanism`, type: 'floating'},
      { id: `Human-SecurityMechanism`, source: 'Human', target: `SecurityMechanism`, type: 'floating'},
      //{ id: `socEquality-resource`, source: 'SocialEquality', target: `Resource`, type: 'floating'},
      //{ id: `needsSatis-resource`, source: 'NeedsSatisfaction', target: `Resource`, type: 'floating'},
      { id: `SoftwareSystem-Resource`, source: 'SoftwareSystem', target: `Resource`, type: 'floating'},
      { id: `Security-Privacy`, source: 'Security', target: `Privacy`, type: 'floating'}, 
      { id: `Security-Trust`, source: 'Security', target: `Trust`, type: 'floating'}, 
      { id: `Security-SocialSustainability`, source: 'Security', target: `SocialSustainability`, type: 'floating'},  
      { id: `Privacy-PersonalInformation`, source: 'Privacy', target: `PersonalInformation`, type: 'floating'}, 
      { id: `Privacy-PrivacyMechanism`, source: 'Privacy', target: `PrivacyMechanism`, type: 'floating'}, 
      { id: `PersonalInformation-PrivacyMechanism`, source: 'PersonalInformation', target: `PrivacyMechanism`, type: 'floating'}, 
      { id: `PersonalInformation-Owner|Controller`, source: 'PersonalInformation', target: `Owner|Controller`, type: 'floating'}, 
      { id: `Owner|Controller-ThirdParty`, source: 'Owner|Controller', target: `ThirdParty`, type: 'floating'}, 
      { id: `PrivacyMechanism-SecurityRisk`, source: 'PrivacyMechanism', target: `SecurityRisk`, type: 'floating'}, 
      { id: `PrivacyMechanism-Constraint`, source: 'PrivacyMechanism', target: `Constraint`, type: 'floating'}, 
      { id: `PrivacyMechanism-Context`, source: 'PrivacyMechanism', target: `Context`, type: 'floating'}, 
      { id: `PrivacyMechanism-Trust`, source: 'PrivacyMechanism', target: `Trust`, type: 'floating'}, 
      { id: `SecurityRequirement-Security`, source: 'SecurityRequirement', target: `Security`, type: 'floating'}, 
      { id: `SecurityRequirement-SecurityRisk`, source: 'SecurityRequirement', target: `SecurityRisk`, type: 'floating'}, 
      { id: `SecurityRisk-Threat`, source: 'SecurityRisk', target: `Threat`, type: 'floating'}, 
      { id: `SecurityRisk-Vulnerability`, source: 'SecurityRisk', target: `Vulnerability`, type: 'floating'}, 
      { id: `Threat-Attack`, source: 'Threat', target: `Attack`, type: 'floating'}, 
      { id: `Attack-Harm`, source: 'Attack', target: `Harm`, type: 'floating'}, 
      { id: `Attack-Vulnerability`, source: 'Attack', target: `Vulnerability`, type: 'floating'},
      { id: `Harm-Asset`, source: 'Harm', target: `Asset`, type: 'floating'}, 
      { id: `SecurityMechanism-SecurityRequirement`, source: 'SecurityMechanism', target: `SecurityRequirement`, type: 'floating'}, 
      { id: `SecurityMechanism-Vulnerability`, source: 'SecurityMechanism', target: `Vulnerability`, type: 'floating'},
      { id: `Vulnerability-Asset`, source: 'Vulnerability', target: `Asset`, type: 'floating'}, 
      { id: `Asset-Resource`, source: 'Asset', target: `Resource`, type: 'floating'}, 
      { id: `Asset-Human`, source: 'Asset', target: `Human`, type: 'floating'}, 
      { id: `Asset-SoftwareSystem`, source: 'Asset', target: `SoftwareSystem`, type: 'floating'}, 
      { id: `Resource-Property`, source: 'Resource', target: `Property`, type: 'floating'}, 
      { id: `Resource-Service`, source: 'Resource', target: `Service`, type: 'floating'}, 
      //{ id: `resource-gendEquity`, source: 'Resource', target: `GenderEquity`, type: 'floating'}, 
      { id: `Property-OperatingSystem`, source: 'Property', target: `OperatingSystem`, type: 'floating'}, 
      { id: `Property-Hardware`, source: 'Property', target: `Hardware`, type: 'floating'}, 
      { id: `Trust-Accountability`, source: 'Trust', target: `Accountability`, type: 'floating'},
      //{ id: `tru-community`, source: 'Trust', target: `Community`, type: 'floating'},
      { id: `Accountability-Transparency`, source: 'Accountability', target: `Transparency`, type: 'floating'}, 
      { id: `Accountability-Honesty`, source: 'Accountability', target: `Honesty`, type: 'floating'}, 
      //{ id: `account-SocCohesion`, source: 'Accountability', target: `SocialCohesion`, type: 'floating'}, 
      { id: `Human-SoftwareSystem`, source: 'Human', target: `SoftwareSystem`, type: 'floating'},

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
      //{ id: 'HumanRight', data: { label: 'Human Right' }, position: { x: -550, y: -200 } },
      //{ id: 'FairSalary', data: { label: 'Fair Salary' }, position: { x: -550, y: -100 } },
    ],
    edges: [
      { id: `Culture-Action`, source: 'Culture', target: `Action`, type: 'floating'},
      { id: `Culture-SocialInteraction`, source: 'Culture', target: `SocialInteraction`, type: 'floating'}, 
      { id: `Norm-Value`, source: 'Norm', target: `Value`, type: 'floating'},
      //{ id: `nor-humRig`, source: 'Norm', target: `HumanRight`, type: 'floating'}, 
      //{ id: `nor-faiSal`, source: 'Norm', target: `FairSalary`, type: 'floating'}, 
      { id: `Value-Universalism`, source: 'Value', target: `Universalism`, type: 'floating'},
      { id: `Value-Ritual`, source: 'Value', target: `Ritual`, type: 'floating'}, 
      { id: `Value-Beliefs`, source: 'Value', target: `Beliefs`, type: 'floating'}, 
      { id: `Ritual-Action`, source: 'Ritual', target: `Action`, type: 'floating'}, 
      { id: `Custom-Action`, source: 'Custom', target: `Action`, type: 'floating'}, 
      { id: `SocialEnvironment-SocialInteraction`, source: 'SocialEnvironment', target: `SocialInteraction`, type: 'floating'}, 
      { id: `SocialEnvironment-Beliefs`, source: 'SocialEnvironment', target: `Beliefs`, type: 'floating'}, 
      { id: `SocialInteraction-SocialEnvironment`, source: 'SocialInteraction', target: `SocialEnvironment`, type: 'floating'}, 
      { id: `SocialInteraction-Action`, source: 'SocialInteraction', target: `Action`, type: 'floating'}, 
      { id: `SocialInteraction-Beliefs`, source: 'SocialInteraction', target: `Beliefs`, type: 'floating'}, 
      { id: `Human-Norm`, source: 'Human', target: `Norm`, type: 'floating'}, 
      { id: `Human-Value`, source: 'Human', target: `Value`, type: 'floating'}, 
      { id: `Human-SocialInteraction`, source: 'Human', target: `SocialInteraction`, type: 'floating'}, 
      { id: `Human-Action`, source: 'Human', target: `Action`, type: 'floating'}, 
      { id: `Beliefs-Human`, source: 'Beliefs', target: `Human`, type: 'floating', label: 'influences'}, 
      { id: `Beliefs-Value`, source: 'Beliefs', target: `Value`, type: 'floating', label: 'influences'}, 
      { id: `Beliefs-Action`, source: 'Beliefs', target: `Action`, type: 'floating', label: 'influences'}, 
      { id: `Beliefs-Custom`, source: 'Beliefs', target: `Custom`, type: 'floating', label: 'influences'},
    ],
  },
};

export function createNodesAndEdges(section) {
  return sectionsConfig[section] || { nodes: [], edges: [] };
}