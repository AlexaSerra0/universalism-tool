//Culture
export const Culture  = {
  id: '1',
  concept: 'Culture',
  description: 'Culture is “the customary beliefs, social forms, and material traits of a racial, religious, or social group”. It can also be “the integrated pattern of human knowledge, belief, and behavior that depends upon the capacity for learning and transmitting knowledge to succeeding generations”. In software systems, culture is the behaviors, beliefs, and values that define how users interact with the software. It includes user expectations, community norms, and the user experience influenced by these factors. Culture determines how software is designed and perceived by the users.',
  requirement: 'ShareTheMeal includes cultural values of compassion and empathy by highlighting the act of donating meals to those in need.',
};

export const Norm  = {
  id: '2',
  concept: 'Norm',
  description: 'In a social group G, a norm is a kind of behavior A that all members of G do in a certain context C. Furthermore, it is also mutually believed that all members of G should do A in C. That is to say, a norm is an expected behavior from a certain group of people in a certain context, for example, it is expected of people who find a lost item to return it to the police. In an online environment, most people possess the norm to be respectful while communicating. In software systems, it includes the creation of clear expectations for behavior that the users must follow. The norms must be transmitted to the users, and they must be respected in the community.',
  requirement: 'ShareTheMeal app users are expected to contribute to meal donations and spread awareness about hunger.',
};

export const Value  = {
  id: '3',
  concept: 'Value',
  description: 'Values are beliefs, connected to emotions, and they are ordered in terms of importance. Values are abstract goals, this differentiates them from norms and attitudes, and they serve as standards of criteria. In software systems, values are the main goals that the design and functionality of the software is based on. These values impact the features and user interface to ensure they align with the users needs and values. For example, a software system may prioritize user privacy, accessibility, or transparency based on its values.',
  requirement: 'ShareTheMeal app users should value values that prioritize compassion, empathy, and the importance of helping those in need.',
};

export const Action  = {
  id: '4',
  concept: 'Action',
  description: 'An Action consists of the process of doing something with the intention of achieving a desired goal. In software systems, an action refers to any user interaction or system process done to achieve a specific goal. This can be tasks like submitting a form, clicking a button, or running a program. Actions must be intuitive, helping users accomplish their goals effectively in the software.',
  requirement: 'In the ShareTheMeal app, the action is the donation process to reduce global hunger. This process involves selecting the amount to donate and confirming the donation. Other actions can be sharing on social media to spread awareness.',
};

export const Ritual  = {
  id: '5',
  concept: 'Ritual',
  description: "Rituals are a group of activities that are technically superfluous to reach desired ends but that, within a culture, are considered to be socially essential; they are therefore carried out for their own sake. In software systems, rituals could be routine user activities that, while not essential for the app's primary function, enhance the user experience and engagement.",
  requirement: 'A fitness app that has daily check-ins or streaks encourages consistent usage and user retention.',
};

export const Custom  = {
  id: '6',
  concept: 'Custom',
  description: "A custom is an established behavior expressed as actions, codes, or rules of behavior. Norms, values, and beliefs create and shape customs, which in turn affects behavior in the form of actions and events. In software systems, customs are established user behaviors and practices that develop over time.",
  requirement: 'ShareTheMeal app users regularly sharing their meal donations on social media through the ShareTheMeal app could become a custom that promotes the app’s goal and increases its visibility.',
};

export const SocialEnvironment  = {
  id: '7',
  concept: 'Social Environment',
  description: 'Social environment refers to the immediate physical and social setting in which people live or in which something happens or develops. It includes the culture that the individual was educated or lives in, and the people and institutions with whom they interact. In software systems, social environment is the digital context where users interact with the platform.',
  requirement: 'The app ShareTheMeal creates an online environment where users can interact with the cause and see their impact on the world.',
};

export const SocialInteraction   = {
  id: '8',
  concept: 'Social Interaction',
  description: 'Social Interaction defines an interaction between individuals. It is a specialization of an action. Social interaction can influence individuals and their beliefs. In software systems, social interaction refers to how users engage with each other using digital platforms. This can be done through activities like messaging, sharing content, and participating in discussions.',
  requirement: 'In the app ShareTheMeal, users interact in the app by making donations and sharing in social media about the cause, encouraging others to join and donate.',
};

const ConceptsData = {
  //Culture
  Culture,
  Norm,
  Value,
  Action,
  Ritual,
  Custom,
  SocialEnvironment,
  SocialInteraction,
};

export default ConceptsData;