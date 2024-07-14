//Culture
export const Culture = [
{
  concept: 'Culture',
  question: 'Does the software integrate cultural behaviors, beliefs, and values into its design to ensure a meaningful user experience?',
},
{
  concept: 'Culture',
  question: 'Are there strategies in place to accommodate diverse user expectations and community norms in the software?',
},
];

export const Norm = [
{
  concept: 'Norm',
  question: 'Are the norms clearly communicated to users within the system?',
},
{
  concept: 'Norm',
  question: 'Do mechanisms exist that ensure that the norms are being followed?',
},
{
  concept: 'Norm',
  question: 'Do measures exist to address actions that go against the norms?',
},
{
  concept: 'Norm',
  question: 'Are the expected behaviors clearly defined and understood by all users?',
},
{
  concept: 'Norm',
  question: 'Does the software adapt to evolving community norms throughout time?',
},
];  

export const Value = [
{
  concept: 'Value',
  question: 'Does the software reflect the main values that are important to its users?',
},
{
  concept: 'Value',
  question: 'Are there mechanisms in place to ensure that the software aligns with the main values?',
},
{
  concept: 'Value',
  question: 'Does the software promote its main values to users when they interact with the application?',
},
{
  concept: 'Value',
  question: 'Are there conflicts between different values, and are they managed?',
},
];

export const Action = [
{
  concept: 'Action',
  question: 'Are the actions in the software intuitive to help users achieve their goals?',
},
{
  concept: 'Action',
  question: 'Are there feedback mechanisms in place to confirm successful conclusion of actions to users?',
},
{
  concept: 'Action',
  question: 'Are there mechanisms in place to prevent or recover from errors during action execution, as well as inform users of these errors, ensuring a smooth user experience?',
},
{
  concept: 'Action',
  question: 'How does the software adapt to user preferences or behaviors over time, personalizing the action experience? ',
},
];

export const Ritual = [
{
  concept: 'Ritual',
  question: 'Does the system include routine activities that enhance user engagement and experience?',
},
{
  concept: 'Ritual',
  question: 'Do the rituals align with and reinforce the main goals and values of the system?',
},
{
  concept: 'Ritual',
  question: 'Are there mechanisms in place to motivate users to participate in the rituals regularly?',
},

];

export const Custom = [
{
  concept: 'Custom',
  question: 'Do the customs align with and reinforce the norms, values, and goals of the system?',
},
{
  concept: 'Custom',
  question: 'Are there features in place to support and facilitate the development of the customs?',
},
{
  concept: 'Custom',
  question: 'Does the system track and analyze the development of customs among its users to enhance the platform?',
},
];

export const SocialEnvironment = [
{
  concept: 'Social Environment',
  question: 'Does the software ease interactions between users in the digital social environment?',
},
{
  concept: 'Social Environment',
  question: 'Are there measures in place to ensure that the digital social environment is inclusive and respectful of diverse user backgrounds?',
},
{
  concept: 'Social Environment',
  question: 'Does the software adapt to changes in user behaviors and social trends to improve the digital social environment?',
},
];

export const SocialInteraction  = [
{
  concept: 'Social Interaction',
  question: 'Does the software ease social interactions between users, such as messaging and content sharing?',
},
{
  concept: 'Social Interaction',
  question: 'Are there mechanisms in place to encourage and reward positive social interactions among users within the platform?',
},
{
  concept: 'Social Interaction',
  question: "Does the software ensure that social interactions align with the app's goals and values?",
},
{
  concept: 'Social Interaction',
  question: 'Are there mechanisms that mitigate negative interactions in the app?',
},
];

//Security
export const Security = [
{
  concept: 'Security',
  question: 'Are there protocols and technologies in place to protect data and ensure privacy?',
},
{
  concept: 'Security',
  question: 'Are there measures to minimize and correctly address any security attacks?',
},
{
  concept: 'Security',
  question: 'Are user transactions and data regularly monitored for security threats?',
},
];


export const SecurityRequirement  = [
{
  concept: 'Security Requirement ',
  question: 'Are there critical assets and data that need protection within the system?',
},
{
  concept: 'Security Requirement ',
  question: 'Are there specific security protocols that mitigate identified risks?',
},
{
  concept: 'Security Requirement ',
  question: 'Does the software ensure that it complies with relevant security standards and regulations?',
},
{
  concept: 'Security Requirement ',
  question: 'Are there defined procedures for regular security assessments?',
},
];
export const SecurityMechanism = [
{
  concept: 'Security Mechanism',
  question: 'Does the app ensure secure authentication and access control for users?',
},
{
  concept: 'Security Mechanism',
  question: 'Does the software enforce strong password policies, such as minimum length and complexity requirements?',
},
{
  concept: 'Security Mechanism',
  question: 'Can users customize their security settings to align with their individual risk tolerance and security preferences?',
},
{
  concept: 'Security Mechanism',
  question: 'Are security mechanisms tested and validated to ensure they meet their intended objectives?',
},
{
  concept: 'Security Mechanism',
  question: 'Are there mechanisms in place to monitor and register security-related events?',
},
];

export const Value2 = [
  {
    concept: 'Value',
    question: '',
  },
  {
    concept: 'Value',
    question: '',
  },
  {
    concept: 'Value',
    question: '',
  },
  ];

const QuestionsData = {
  //Culture
  Culture,
  Norm,
  Value,
  Action,
  Ritual,
  Custom,
  SocialEnvironment,
  SocialInteraction,
  //Security
  Security,
  SecurityRequirement,
  SecurityMechanism,
};

export default QuestionsData;