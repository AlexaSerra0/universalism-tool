//Universalism Section
export const Universalism = {
  id: '1',
  concept: 'Universalism',
  description: [
    {
      text: "Universalism is one of the ten basic values defined by the Theory of Universal Values developed by Schwartz, and it is characterized by diverse goals and motivations. The motivational goal of universalism is understanding, appreciation, tolerance, and protection for the welfare of all people and nature. The Universalism value is divided into the following sub-values: broadminded, social justice, equality, a world at peace, a world of beauty, unity with nature, wisdom, protecting the environment, and inner harmony."
    },
    {
      text: "In software systems, universalism is reflected in a system’s design and features that promote inclusivity, accessibility, and social justice."
    }
  ],
};

export const UniversalismRequirement = {
  id: '2',
  concept: 'Universalism Requirement',
  description: [
    {
      text: "This concept represents the elicited requirements needed towards the development and implementation of a system that aligns with the Universalism values."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - The requirements could include support for multiple languages to promote inclusivity and accessibility features for users with disabilities."
    },
    {
      text: "Bright Sky App - A requirement could be the educational resources about the different domestic abuse."
    }
  ],
};

export const Equality = {
  id: '3',
  concept: 'Equality',
  description: [
    {
      text: "Equality is one of the sub-values of Universalism. It’s defined as the right of different groups of people to have a similar social position and receive the same treatment."
    },
    {
      text: "In software systems, this means that the same access and opportunities are available to all users, without discrimination. This may include applications that do not favor anyone based on gender, race, and other characteristics. Another example is promoting fairness in the workplace through policies and practices."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - The people who benefit from the app all receive equal treatment: “Unless otherwise stated, funds raised will be divided equally and allocated to the countries mentioned in the fundraising goal (e.g. 200,000 meals for Kenya and 200,000 meals for Ethiopia)”. The app does not consider the user’s personal characteristics or circumstances, it allows equal access to the features. Anyone able can donate. The process of donating is simple, facilitating the process and avoiding stress."
    },
    {
      text: "Bright Sky App - Ensures that every user has access to all features (e.g., emergency contact tools, legal advice resources, mental health support services) without restrictions."
    }
  ],
};

export const SocialJustice = {
  id: '4',
  concept: 'Social Justice',
  description: [
    {
      text: "Social Justice is one of the sub-values of Universalism. It’s defined as the idea that all people should have the same rights and opportunities and that a country's wealth and resources should benefit everyone in that country."
    },
    {
      text: "In software systems, social justice involves designing and implementing functionalities that promote fairness, equality, and accessibility for all users. It includes ensuring that the benefits and opportunities provided by the software are accessible to diverse populations, regardless of their background or circumstances."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Social justice could be demonstrated through an equitable distribution of donated funds to various communities in need. For example, the funds donated could be distributed proportionately based on the needs of each region, instead of equally."
    },
    {
      text: "Bright Sky App - Supports social justice through its features that provide users with comprehensive information on different types of domestic abuse, including practical examples. The app has interactive elements (e.g., risk assessment questionnaires) to help users evaluate the dangers in their relationships. It presents digital safety tips to protect users from online vulnerabilities and provides informative content on topics such as violence, consent, harassment, and how to leave an abusive relationship. The app also connects users with national support services."
    }
  ],
};

export const Broadminded = {
  id: '5',
  concept: 'Broadminded',
  description: [
    {
      text: "Broadminded is one of the sub-values of Universalism. It’s defined as someone willing to accept many different types of behavior, beliefs, or choices in other people."
    },
    {
      text: "In software systems, broadmindedness involves designing interfaces and functionalities that are flexible and inclusive of various user preferences. It includes the promotion of a culture of acceptance within the system, ensuring that diverse perspectives are respected and valued."
    },
  ],
  requirement: [
    {
      text: "Example of a Social Media Platform - Broadmindedness could be implemented by allowing users to customize their news feeds based on their interests and preferences, like languages, cultural topics, or hobbies."
    },
    {
      text: "Bright Sky App - Allows users to select the type of support they need (e.g., assistance with abusive relationships, sexual assault, stalking)."
    }
  ],
};

export const Wisdom = {
  id: '6',
  concept: 'Wisdom',
  description: [
    {
      text: "Wisdom is one of the sub-values of Universalism. It’s defined as the ability to use your knowledge and experience to make good decisions and judgments."
    },
    {
      text: "In software systems, this means using user feedback and additional data sources so that the system can make decisions. Automated systems need supervision from humans to ensure that everything is working correctly and for any sensible decision that the own system can’t make."
    },
  ],
  requirement: [
    {
      text: "Example of an E-Commerce Platform - Wisdom can be implemented by using machine learning algorithms to analyze user preferences and behaviors to personalize product recommendations."
    },
    {
      text: "Bright Sky App - Has a feedback mechanism where users can submit their opinions and also provide an email for the user to contact to give a more detailed opinion. This feedback should be considered to improve the app’s features."
    }
  ],
};

//Software System Section
export const SoftwareSystem = {
  id: '7',
  concept: 'Software System',
  description: [
    {
      text: "A software system is a group of programs that work together to execute specific tasks on a computer, consisting of everything from code to user interfaces. Humans interact with software systems that intend to satisfy Universalism requirements based on inclusivity, accessibility, and usability for different users."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Is the software system. It includes the components necessary for running the app. The software system's purpose is to facilitate the donation process and manage the distribution of food aid. The app must maintain compatibility and interoperability with external systems (e.g., payment gateways). If the network fails, the user should still be able to use the app in some way, so there should be offline features so that users can, for example, view their donation history."
    },
    {
      text: "Bright Sky App - Should be capable of handling peak loads during high-traffic periods when many users seek help simultaneously. In case of network failures, the app should offer offline alternative modes so that users can still access essential features (e.g., information about abuse)."
    }
  ],
};

//Human Section
export const Human = {
  id: '8',
  concept: 'Human',
  description: [
    {
      text: "Human is the individual who is involved and interacts with the Software."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Is open to every user who wants to donate. The app is intuitive, users only need to download the app, navigate its interface, and make donations to contribute to the fight against global hunger. The app receives feedback from users by Google Play or email."
    },
    {
      text: "Bright Sky App - Is open to every user who needs help, providing a simple interface that is intuitive and user-friendly. The hidden mode feature could confuse users, but when first using the app, it gives a tutorial to help users understand how to use the hidden mode."
    },
  ],
};

//Equality Section
export const SocialSustainability = {
  id: '9',
  concept: 'Social Sustainability',
  description: [
    {
      text: "Social Sustainability is determined as a positive and long-term condition in communities and a process within communities for achieving and maintaining that condition. It focuses on ensuring current and future generations have the same or greater access to social resources by pursuing generational equity. For software-intensive systems, it encompasses the direct support of social communities in any domain, as well as activities or processes that indirectly create beneﬁts for social communities."
    },
    {
      text: "Social Sustainability has two important themes required for the physical and psychological survival of individuals: basic needs and equity."
    },
    {
      text: "In software systems, Social Sustainability is directed towards the promotion of equality, ensuring that every individual who interacts with and benefits from the software has equitable access to its resources and opportunities."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Ensures equal access to food resources for current and future generations. The app's goal of fighting hunger aligns with social sustainability when accessing essential resources (e.g., food, and money) is equal for everyone."
    },
    {
      text: "Bright Sky App - Gives equal access to support services to users who are involved or are aware of cases of domestic abuse. Every user has access to its resources regardless of their background or personal characteristics. These actions promote social sustainability."
    },
  ],
};

export const SocialCohesion = {
  id: '10',
  concept: 'Social Cohesion',
  description: [
    {
      text: "Social Cohesion is a concept that is defined differently by the academic and policy communities, but in general, both say that the emphasis is on cooperation and inclusion. Social cohesion refers to the unity in a society, this means the absence of social conflicts based on certain factors (wealth, ethnicity, and gender) and the presence of strong social bonds (civic engagement and responsive democracy). It involves shared values, reducing disparities in wealth and income, and promoting a sense of belonging and cooperation among members."
    },
    {
      text: "The characteristics of Social Cohesion are the strength of networks, participation, identification, and tolerance. It’s the level of empowerment and accountability."
    },
    {
      text: "Social Cohesion in software systems promotes cooperation between users, avoiding conflicts. The goal is a community online that is inclusive and supportive, making users feel safe and connected."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Users unite to fight global hunger, cooperating towards a common goal, and promoting empathy in users."
    },
    {
      text: "Bright Sky App - Creates an environment that is supportive and inclusive, encouraging users to connect with national support lines in order to get help. The hope is to reduce social conflicts related to domestic abuse with the app's use."
    },
  ],
};

export const NeedsSatisfaction = {
  id: '11',
  concept: 'Needs Satisfaction',
  description: [
    {
      text: "Needs Satisfaction concerns the satisfaction of basic human needs. It measures the level of resources and opportunities available to the community as a whole. The characteristics of Needs Satisfaction are objective satisfaction of basic needs and subjective satisfaction of basic needs."
    },
    {
      text: "Needs Satisfaction in software systems measures the level of resources and opportunities the software provides to the entire community of users."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Addresses the starvation existing in different communities so that their essential needs are met. This happens when giving users a way to donate so that the necessary resources reach those in need."
    },
    {
      text: "Bright Sky App - Advocates for individuals' safety needs. The app was created to combat domestic abuse, employing functionalities to further the cause (e.g., questionnaires, and practical examples)."
    },
  ],
};

export const Community = {
  id: '12',
  concept: 'Community',
  description: [
    {
      text: "Community is the people living in one particular area or people who are considered as a unit because of their common interests, social group, or nationality."
    },
    {
      text: "In software systems, the community is the users connected through a digital platform, sharing common interests, goals, or characteristics. It includes both the users of the software and potentially the broader community affected or engaged by the software objectives."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - The community includes the users of the app and the global community affected by hunger. The app connects individuals worldwide to address food issues."
    },
    {
      text: "Bright Sky App - The community is created by the users of the app and the support services that the app helps users connect with. Informing the users of all types of domestic abuse makes it easier for the user to know the support he needs."
    },
  ],
};

export const SocialEquality = {
  id: '13',
  concept: 'Social Equality',
  description: [
    {
      text: "Social Equality occurs when all community members have equal access to and benefit from the available services, facilities, and opportunities. This includes, for example, access to healthcare, education opportunities, and housing services."
    },
    {
      text: "It measures the level of equality in the way resources and opportunities are distributed in a community. The characteristics are access to services, facilities, and opportunities. It’s the level of institutional stability and flexibility."
    },
    {
      text: "In software systems, social equality ensures that all users and stakeholders have equal access to and benefit from the software's services, leveling the field so that every user can use the software for their personal or professional growth."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Ensures that all individuals, regardless of their background or circumstances, have equal access to food and money assistance provided by the app. It also allows everyone who wants, to have permission to access and use the app."
    },
    {
      text: "Bright Sky App - Supports all users regardless of their personal characteristics. Everyone seeking help with domestic abuse receives the same support."
    },
  ],
};

export const Fairness = {
  id: '14',
  concept: 'Fairness',
  description: [
    {
      text: "Fairness relates to how organizations should enable fairness between their employees, making sure that every employee receives equal treatment and opportunities. An example of this is employees with the same job description having the same vacation days and salary."
    },
    {
      text: "In software systems, fairness involves designing systems that ensure equal access and opportunities for all users, regardless of their background or personal characteristics. This includes ensuring that algorithms are free from bias, providing equal access to features and resources, and implementing policies that promote equitable treatment for all users."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Should make sure that all employees are treated fairly, providing equal opportunities for advancement and fair compensation for their work. The donations collected should also be distributed equally to support programs in various communities based on need, with no favoritism. The people should be selected to receive money fairly, without considering race or gender. All these factors promote fairness in the distribution of resources."
    },
    {
      text: "Bright Sky App - There shouldn't be any bias in the resources available.  For example, the questionnaires and practical examples must be fair for every type of user."
    },
  ],
};

export const HumanRight = {
  id: '15',
  concept: 'Human Right',
  description: [
    {
      text: "Human Rights refer to the existing regulations that pertain to the fundamental rights and freedoms that all employees are entitled to, such as safety in the workplace."
    },
    {
      text: "The system must permit an employee to have rest days and not allow their time to be micromanaged. The software can’t allow employees to be monitored, timing the time spent in the bathroom or smoke breaks. The software must also be protected so that the employee’s personal data is kept safe."
    },
  ],
  requirement: [
    {
      text: "Example of a Workplace Management System - Ensuring human rights involves features that guarantee employees' rest days are respected and that personal data is secure. The system should avoid invasive monitoring practices and support employees' rights to a safe and respectful working environment."
    },
    {
      text: "ShareTheMeal & Bright Sky Apps - Both defend human rights by protecting the users' data."
    },
  ],
};

export const FairSalary  = {
  id: '16',
  concept: 'Fair Salary',
  description: [
    {
      text: "Fair Salary is about providing employees a fair compensation depending on their contributions and responsibilities in an organization. They should be judged based on their skill and experience. The salary must reflect these aspects."
    },
    {
      text: "A software system can’t allow unfair salaries, a person can’t receive more or less than someone else who does the same work just because of gender, for example."
    },
  ],
  requirement: [
    {
      text: "Example of an Employee Management System - Fair salary practices could be implemented by using algorithms that ensure employees with the same job role, experience, and performance receive the same pay, irrespective of gender or race. The system should flag inconsistencies for review and adjustment."
    },
  ],
};

export const Discrimination = {
  id: '17',
  concept: 'Discrimination',
  description: [
    {
      text: "Discrimination is the unfair treatment of any person or group based on race, gender, religion, or other characteristics. Basically, any actions that may cause harassment or exclusion of individuals in an organization will have a negative impact on fairness."
    },
    {
      text: "In software systems, it involves practices and algorithms that do not discriminate (this can occur when the training data is biased itself). It also involves an environment that promotes respect and inclusion (be it in the workplace or online)."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Neither donors nor beneficiaries suffer discrimination, since everyone can use the app and individual characteristics have no impact on who and how much they receive."
    },
    {
      text: "Bright Sky App - Does not discriminate based on any user characteristics and even provides additional support and information for the LGBTQ+ community that is more vulnerable to domestic abuse."
    },
  ],
};

export const FairTreatment = {
  id: '18',
  concept: 'Fair Treatment',
  description: [
    {
      text: "Fair Treatment is about providing every employee impartial and equal treatment without considering personal characteristics or circumstances. For example, fair evaluations and feedback processes, and opportunities for promotion based on merit."
    },
    {
      text: "Concerning software, fair treatment may involve systems that reduce personal liability for people in stressful situations, like forgiving mistakes in taxing moments. This may involve the creation of features that prioritize safety and ease stress and promote equal treatment for individuals operating within the system."
    },
    {
      text: "Fair treatment promotes a culture of respect, trust, and inclusion while at the same time considering safety and equal treatment within the organization and software systems."
    },
  ],
  requirement: [
    {
      text: "Example of an Employee Management System - Fair treatment can be promoted by ensuring that performance evaluations are based on objective criteria and that feedback is consistent and unbiased. Features like anonymous reporting of unfair treatment and stress-relief support tools can help maintain a fair and respectful workplace."
    },
  ],
};

export const SocioculturalEquity = {
  id: '19',
  concept: 'Socio-cultural Equity',
  description: [
    {
      text: "Socio-cultural Equity means that the characteristics of the individuals should not be a factor when considering who should be allowed to use the software services. Different community members should be allowed to access the system considering the various technologies available and the different abilities, promoting inclusivity in terms of usability and access."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Development and implementation should consider the different possible users of the app so that everyone can access it. This way, the app is more user-friendly and has a bigger impact. By reaching a bigger pool of users, more donations can be made, and more people can receive the help they need."
    },
    {
      text: "Bright Sky App - Design must consider different technologies and multiple languages. This is important to ensure that all users can use the app."
    },
  ],
};

export const Compatibility = {
  id: '20',
  concept: 'Compatibility',
  description: [
    {
      text: "Compatibility refers to the ability of a software system to be available in different devices, operating systems (OS), hardware components, and networks. It also relates to the ability of these elements to work together."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Needs an internet connection to work, without it, it’s not possible to view information or make donations. It can be used on an internet browser or by downloading the app from Google Play or App Store. This means that the operation systems available is iOS and Android."
    },
    {
      text: "Bright Sky App - Needs internet connection to work. It’s also compatible with Android and iOS and reaches users through different platforms (e.g., tablets, smartphones)."
    },
  ],
};

export const Device = {
  id: '21',
  concept: 'Device',
  description: [
    {
      text: "Device includes desktops, tablets, mobile, tablets, and other electronic devices."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - Should be designed to provide a consistent and user-friendly experience across different devices, including smartphones, tablets, and desktops, ensuring functionality and usability on all platforms."
    },
  ],
};

export const OperatingSystem = {
  id: '22',
  concept: 'Operating System',
  description: [
    {
      text: "Operating System includes Android, iOS, Mac, and Windows."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - Must be compatible with the latest versions of Android and iOS operating systems, as well as provide support for several previous versions to ensure broader accessibility."
    },
  ],
};

export const Hardware = {
  id: '23',
  concept: 'Hardware',
  description: [
    {
      text: "Hardware includes processors, memory, graphics cards, and other components."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - should be optimized to run efficiently on devices with varying hardware capabilities, from high-end smartphones with powerful processors to budget devices with limited memory and processing power."
    },
  ],
};

export const Network = {
  id: '24',
  concept: 'Network',
  description: [
    {
      text: "Network includes wired or wireless networks, LANs, WANs, or the internet."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - Must function properly over both Wi-Fi and cellular networks to ensure users can donate, in the case of the ShareTheMeal app, and access information regardless of their connection type."
    },
  ],
};

export const Education = {
  id: '25',
  concept: 'Education',
  description: [
    {
      text: "Education is defined as the process of teaching or learning, especially in a school or college, or the knowledge that you get from this. Everyone should be permitted to learn if they want to, regardless of circumstances, like economic, or personal characteristics, such as gender."
    },
    {
      text: "Education in software systems is the process of teaching or learning through the software, this way users gain skills, and knowledge, by interacting with educational software."
    },
  ],
  requirement: [
    {
      text: "Example of a Language Learning App - Users must have access to diverse learning materials, including text, audio, and interactive exercises. The app should support multiple languages and provide features for pronunciation practice and vocabulary building."
    },
    {
      text: "Bright Sky App - Educates the user on the different domestic abuse, giving practical examples to understand the information better. The app is accessible since it supports multiple languages."
    },
    
  ],
};

export const Knowledge = {
  id: '26',
  concept: 'Knowledge',
  description: [
    {
      text: "Knowledge is the understanding of or information about a subject that you get by experience or study, either known by one person or by people generally."
    },
    {
      text: "In software systems, knowledge is giving users information that improves their understanding of the system's purpose, functionality, or the subject matter it deals with. It includes delivering clear explanations, insights, or data that users can utilize to make informed decisions or actions in the software."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Users who don’t have much knowledge on where exactly food problems exist can be informed on the app, since it explains clearly everything a person needs to know: the cause a user can donate to, the goal of the app, how the app works, etc."
    },
    {
      text: "Bright Sky App - Is well structured to provide clear and comprehensive information about domestic abuse. At the beginning of the app, a short tutorial is presented to best introduce the user to the app, in particular the hidden mode."
    },
  ],
};

export const GenderEquity = {
  id: '27',
  concept: 'Gender Equity',
  description: [
    {
      text: "Gender Equity is defined as the provision of fairness and justice in the distribution of benefits and responsibilities between women and men. It’s the process of being fair to men and women. To ensure fairness, measures must often be put in place to compensate for the historical and social disadvantages that prevent women and men from operating on a level playing field. Equity is a mean. Equality is the result."
    },
    {
      text: "In this model, we expand this concept to include all gender identities, advocating for equity regardless of gender, such as women, men, non-binary individuals, transgender individuals, and other gender minorities."
    },
    {
      text: "In software systems, it entails ensuring that all users, regardless of their gender identity, have equal access to and benefit from the software’s functionalities, without any form of discrimination based on gender."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Does not differentiate the donor’s gender, there is no differentiation in how the application works. Beneficiaries' gender also has no impact when receiving donations."
    },
    {
      text: "Bright Sky App - Does not distinguish users' gender identities, everyone is free to receive the support needed since domestic abuse can happen to anyone."
    },
  ],
};

export const Accessibility = {
  id: '28',
  concept: 'Accessibility',
  description: [
    {
      text: "Accessibility refers to the ability of a software system to be usable by individuals with different abilities, for example, individuals with disabilities who must rely on assistive technologies."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Should be designed to be usable by people with various abilities. The app’s interface and features should consider accessibility principles. One of them is having alternative text for images, the app does not need the images to function, and each has a title. Another is color contrast for readability, the app has a good pallet with sufficient contrast."
    },
    {
      text: "Bright Sky App - Must be designed with users with various abilities in mind. It means implementing features such as high color contrast for readability, and compatibility with assistive technologies to ensure inclusivity."
    },
  ],
};

export const AssistiveTechnology = {
  id: '29',
  concept: 'Assistive Technology',
  description: [
    {
      text: "Assistive Technology describes tools used by people with disabilities to accomplish tasks. In a web context, it relates to hardware or software used to increase, maintain, or improve functional capabilities of individuals with disabilities. Examples of assistive technology are screen readers, keyboard navigation, and voice recognition software."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - Both must be compatible with assistive technologies to be used by people with disabilities, reaching a bigger pool of users and promoting equality. The app should work with screen readers, that convert text into speech for visually impaired users and support keyboard navigation for users who cannot use a touchscreen. For example, TalkBack was tested and works with both applications."
    },
  ],
};

export const Disability = {
  id: '30',
  concept: 'Disability',
  description: [
    {
      text: "Disability is an illness, injury, or condition that makes it difficult for someone to do some things that other people do, and that is usually permanent or lasts for a long time. There are many types of disabilities, they can be Physical, Neurological, Cognitive, Auditory, Visual, and Speech related. Software systems must accommodate users with different disabilities."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - Both apps don’t have an option for voice commands, but assistive technologies can be used. Features like resizable text or modification of the position of components in the application are not present."
    },
  ],
};

//Culture
export const Culture = {
  id: '31',
  concept: 'Culture',
  description: [
    {
      text: "Culture is the customary beliefs, social forms, and material traits of a racial, religious, or social group. It can also be the integrated pattern of human knowledge, belief, and behavior that depends upon the capacity for learning and transmitting knowledge to succeeding generations."
    },
    {
      text: "In software systems, culture is the behaviors, beliefs, and values that define how users interact with the software. It includes user expectations, community norms, and the user experience influenced by these factors. Culture determines how software is designed and perceived by the users."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Includes cultural values of compassion and empathy by highlighting the act of donating meals to those in need."
    },
    {
      text: "Bright Sky App - Integrates cultural awareness by giving resources and support about different types of domestic abuse. This information ensures that users can access the help specific to their situation."
    },
  ],
};

export const Norm = {
  id: '32',
  concept: 'Norm',
  description: [
    {
      text: "In a social group G, a norm is a kind of behavior A that all members of G do in a certain context C. Furthermore, it is also mutually believed that all members of G should do A in C. That is to say, a norm is an expected behavior from a certain group of people in a certain context, for example, it is expected of people who find a lost item to return it to the police. In an online environment, most people possess the norm to be respectful while communicating."
    },
    {
      text: "In software systems, it includes the creation of clear expectations for behavior that the users must follow. The norms must be transmitted to the users, and they must be respected in the community."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Users are expected to contribute to meal donations and spread awareness about hunger."
    },
    {
      text: "Bright Sky App - Is an application for real problems related to domestic abuse. Even if the app doesn't explicitly communicate it, the users are expected to respect the gravity of the issues discussed and use it in a responsible manner."
    },
  ],
};

export const Value = {
  id: '33',
  concept: 'Value',
  description: [
    {
      text: "Values are beliefs, connected to emotions, and they are ordered in terms of importance. Values are abstract goals, this differentiates them from norms and attitudes, and they serve as standards of criteria."
    },
    {
      text: "In software systems, values are the main goals on which the design and functionality of the software are based. These values impact the features and user interface to ensure they align with the users' needs and values. For example, a software system may prioritize user privacy, accessibility, or transparency based on its values."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Users should value values that prioritize compassion, empathy, and the importance of helping those in need."
    },
    {
      text: "Bright Sky App - Prioritizes values of safety, support, privacy, and empowerment. With the hidden mode feature, it gives a layer of privacy. The information and resources available all contribute to safety, support, and empowerment, giving the user the knowledge they may lack and the means to act."
    },
  ],
};

export const Action = {
  id: '34',
  concept: 'Action',
  description: [
    {
      text: "An Action consists of the process of doing something with the intention of achieving a desired goal."
    },
    {
      text: "In software systems, an action refers to any user interaction or system process done to achieve a specific goal. This can be tasks like submitting a form, clicking a button, or running a program. Actions must be intuitive, helping users accomplish their goals effectively in the software."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - One action is the donation process to reduce global hunger. This process involves selecting the amount to donate and confirming the donation. Other actions can be sharing on social media to spread awareness."
    },
    {
      text: "Bright Sky App - The process of reporting abuse is an action that users can complete. Users can clearly click the visible buttons to get immediate help or find the many contacts that offer different support depending on the type of abuse."
    },
  ],
};

export const Ritual = {
  id: '35',
  concept: 'Ritual',
  description: [
    {
      text: "Rituals are a group of activities that are technically superfluous to reach desired ends but that, within a culture, are considered to be socially essential; they are therefore carried out for their own sake."
    },
    {
      text: "In software systems, rituals could be routine user activities that, while not essential for the app's primary function, enhance the user experience and engagement."
    },
  ],
  requirement: [
    {
      text: "A fitness app that has daily check-ins or streaks encourages consistent usage and user retention."
    },
    {
      text: "ShareTheMeal & Bright Sky Apps - Could send notifications to encourage the user to open and use the app. For the Bright Sky app, it's necessary to consider the hidden mode. If a user has that mode activated, he could receive disguised notifications (e.g., if the hidden mode is a game, then the notification is about the game)."
    },
  ],
};

export const Custom = {
  id: '36',
  concept: 'Custom',
  description: [
    {
      text: "A custom is an established behavior expressed as actions, codes, or rules of behavior. Norms, values, and beliefs create and shape customs, which in turn affect behavior in the form of actions and events."
    },
    {
      text: "In software systems, customs are established user behaviors and practices that develop over time."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Users regularly sharing their meal donations on social media through the app could become a custom that promotes the app’s goal and increases its visibility. Subscribing to a monthly donation could also become a custom that aligns with the app’s goals of providing consistent support for reducing global hunger."
    },
    {
      text: "Bright Sky App - Has a journal feature that allows users to register any abuse they have suffered. This is important since they can later be used as proof of the abuse. The user could develop the custom of updating the journal regularly."
    },
  ],
};

export const SocialEnvironment = {
  id: '37',
  concept: 'Social Environment',
  description: [
    {
      text: "Social environment refers to the immediate physical and social setting in which people live or in which something happens or develops. It includes the culture that the individual was educated or lives in, and the people and institutions with whom they interact."
    },
    {
      text: "In software systems, the social environment is the digital context where users interact with the platform."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Creates an online environment where users can interact with the cause and see their impact on the world."
    },
    {
      text: "Bright Sky App - Creates an online environment where users interact with the resources design towards their needs."
    },
  ],
};

export const SocialInteraction = {
  id: '38',
  concept: 'Social Interaction',
  description: [
    {
      text: "Social Interaction defines an interaction between individuals. It is a specialization of an action. Social interaction can influence individuals and their beliefs."
    },
    {
      text: "In software systems, social interaction refers to how users engage with each other using digital platforms. This can be done through activities like messaging, sharing content, and participating in discussions."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Users interact in the app by making donations and sharing on social media about the cause, encouraging others to join and donate."
    },
    {
      text: "Bright Sky App - Users experience social interactions by answering questionnaires and contacting help services."
    },
  ],
};

//Security
export const Security = {
  id: '39',
  concept: 'Security',
  description: [
    {
      text: "Security is considered the measures taken to prevent, minimize, and correctly address threats towards valuable assets.  It corresponds to the level of defense that an asset possesses against malicious attackers."
    },
    {
      text: "In software systems, it implies the implementation of protocols and technologies to protect data, ensure privacy, and maintain system integrity against cyber threats and unauthorized access."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Has an infrastructure based on security standards. To ensure that the payment information is safe and secure, everything is processed by Braintree/Paypal. Other than that, the app doesn’t have any additional data. Donations that were made by mistake will be returned immediately."
    },
    {
      text: "Bright Sky App - Does not gather personal data on the user (e.g., email), only on the device and other IDs. The data is encrypted in transit however, the app does not offer any way to eliminate the data."
    },
  ],
};

export const SecurityRequirement = {
  id: '40',
  concept: 'Security Requirement',
  description: [
    {
      text: "A Security Requirement refers to a quality requirement that defines the level of security needed, concerning system-specific criteria and minimum quality measures, and that a system must maintain to guarantee that it fulfills the security policies."
    },
    {
      text: "It specifies the necessary security protocols that must be implemented to protect the system from threats."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Should implement a secure authentication mechanism to ensure that user accounts are protected against unauthorized access. Only authorized users can access sensitive information and perform actions like donating meals."
    },
    {
      text: "Bright Sky App - Should implement secure authentication mechanisms, (e.g., MFA) so that only authorized users can access their accounts. This requirement is critical to maintaining confidentiality and preventing others who may find the app and open it, which could happen even in hidden mode."
    },
  ],
};

export const SecurityMechanism = {
  id: '41',
  concept: 'Security Mechanism',
  description: [
    {
      text: "A Security Mechanism, also known as a countermeasure, is an architectural mechanism, that is, a strategic decision, that addresses security requirements and/or minimizes vulnerabilities. These mechanisms can be hardware, software, manual procedures, or training, designed to improve security."
    },
    {
      text: "Examples include user IDs, passwords, encryption, firewalls, and antivirus software."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Uses HTTPS to secure a channel from the app to the server. The payment information is secure because it’s processed by Braintree, a globally trusted PayPal payments company. Every communication is point-to-point encrypted, SHA-256 with RSA encryption."
    },
    {
      text: "Bright Sky App - Encrypts data in transit, however, it doesn't specify what mechanism uses."
    },
  ],
};

export const SecurityRisk = {
  id: '42',
  concept: 'Security Risk',
  description: [
    {
      text: "A Risk is the chance that an action will have an undesirable but known outcome. It occurs when a vulnerability exists in a system that can be exploited."
    },
    {
      text: "A security risk is the possible damage to an asset, calculated as the “sum (over all relevant threats) of the negative impact of the harm to the asset (i.e., its criticality) multiplied by the likelihood of the harm occurring."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - A potential security risk is the possibility of unauthorized access to user accounts. This risk is evaluated based on the importance of user data (personal and payment information) and the likelihood of unauthorized access occurring. One solution that would help mitigate the risk is the implementation of multi-factor authentication (MFA) and monitor login attempts for suspicious activities."
    },
    {
      text: "Bright Sky App - A potential security risk is the lack of a feature for users to delete their device-related data. This could lead to concerns about data retention and user privacy. To address this risk the app should provide a way to delete a user's data."
    },
  ],
};

export const Threat = {
  id: '43',
  concept: 'Threat',
  description: [
    {
      text: "A Threat refers to a general condition, situation, or state (typically corresponding to the motivation of potential attackers) that may result in one or more related attacks."
    },
    {
      text: "In software systems, a threat is any potential danger that could exploit a vulnerability to harm the system or its users. Threat examples include malware and phishing attacks."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - A potential threat is data breaches due to insecure APIs. If the app APIs are not secured, attackers could exploit vulnerabilities to gain unauthorized access to sensitive user data (e.g., personal and payment information). To prevent this, the app should employ API security measures such as API keys, OAuth, and HTTPS."
    },
    {
      text: "Bright Sky App - A potential threat could be unauthorized access to device identifiers. The app could use encryption (e.g., HTTPS) to secure data transmission."
    },
  ],
};

export const Attack = {
  id: '44',
  concept: 'Attack',
  description: [
    {
      text: "An Attack is an unauthorized action performed by individuals who seek to cause damage to an asset. This may occur by violating the security of a system or bypassing security mechanisms. The attack can be a success or failure."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Is protected against MitM attack because it uses HTTPS to secure a channel from the app to the server and point-to-point encryption. Man-in-the-Middle (MitM) is a known attack that occurs when an attacker intercepts communication between the app and the user, capturing sensitive information, like login credentials or payment details."
    },
    {
      text: "Bright Sky App - Might not have a lot of data collected, but it could still be the target of an attack, like MitM, to get device identifiers. The app should implement secure communications using HTTPS or other methods."
    },
  ],
};

export const Harm = {
  id: '45',
  concept: 'Harm',
  description: [
    {
      text: "Harm relates to a negative impact associated with an asset due to an attack.  It occurs when there is a security violation to an asset and a privacy violation to a user."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Harm could be done regarding the money donated and the user’s personal and payment information."
    },
    {
      text: "Bright Sky App - Harm could involve unauthorized access to device identifiers or misuse of collected data."
    },
  ],
};

export const Vulnerability = {
  id: '46',
  concept: 'Vulnerability',
  description: [
    {
      text: "A Vulnerability is a weak point in the system that attackers may use to attack and get access to the system, causing harm if successful."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - Could have vulnerabilities if they use outdated software components. Older versions of libraries or frameworks have known vulnerabilities, and attackers could exploit these weaknesses to compromise the app's security."
    },
  ],
};

export const Asset = {
  id: '47',
  concept: 'Asset',
  description: [
    {
      text: "An Asset is something valuable, be it humans or resources (such as hardware or software) and should be protected from possible attacks."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Assets are the user’s personal and payment information."
    },
    {
      text: "Bright Sky App - The main assets are the device identifiers and diagnostic logs."
    },
  ],
};

export const Resource = {
  id: '48',
  concept: 'Resource',
  description: [
    {
      text: "Resources refer to the many services, facilities, and opportunities available within a community that contribute to social equality."
    },
    {
      text: "In software systems, resources involve not only the hardware and software but also the functionalities and services provided by the software that permit stakeholders to access and make use of these services."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Has many resources in the form of functionalities that enable donors to donate the money quantity they want. This app allows donors to choose from various initiatives or countries to donate to, helping alleviate the hunger of the people who need it the most, depending on their needs these receive food or money (if the market has lots of food), this way improving their circumstances and quality of life."
    },
    {
      text: "Bright Sky App - Offers many resources, such as functionalities for reporting abuse, accessing support contacts, and questionnaires. These functionalities must be accessible to all users, including users with disabilities, to support their needs and ensure equal access."
    }
  ],
};

export const Privacy = {
  id: '49',
  concept: 'Privacy',
  description: [
    {
      text: "Privacy relates to the degree to which unauthorized parties are prevented from obtaining sensitive information."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Must ensure that user data, including personal and payment information, is kept confidential and protected from unauthorized access."
    },
    {
      text: "Bright Sky App - Clearly states its privacy policy, for example, they don't share personal information with third parties except pseudonymized information for statistical purposes."
    }
  ],
};

export const PrivacyMechanism = {
  id: '50',
  concept: 'Privacy Mechanism',
  description: [
    {
      text: "Privacy Mechanism is a concrete technique to be implemented for helping towards the satisfaction of privacy goal. Some mechanisms can be applied to personal information directly. Some examples are anonymity, unlinkability, and authentication."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Allows the user to choose who can see his profile, when he donated, and how much was donated. Additionally, the user can choose how their data is handled and who can track the data. This privacy mechanism gives users control over their personal information. The app should also implement a two-factor authentication to add another layer of security."
    },
    {
      text: "Bright Sky App - Gives users the ability to request that their data be eliminated. This mechanism allows users control over their privacy by ensuring that their data can be removed from the system when they want."
    }
  ],
};

export const Constraint = {
  id: '51',
  concept: 'Constraint',
  description: [
    {
      text: "A privacy Constraint is a design restriction that is used to realize/satisfy a privacy goal, constraints can be either a privacy policy or privacy mechanism."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal & Bright Sky Apps - A privacy constraint could be the requirement that all user data must be encrypted to ensure compliance with privacy policies and to protect user confidentiality."
    },
  ],
};

export const Context = {
  id: '52',
  concept: 'Context',
  description: [
    {
      text: "The Context refers to the environment, the software system, where the privacy mechanisms are being implemented."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - The context is the app that allows donations. Includes all the features and functionalities within the app that handle user data, financial transactions, and personal information."
    },
    {
      text: "Bright Sky App - The context is the app that gives support and information to users who are involved in any way in an abusive relationship, or simply people worried that someone they know is experiencing abuse. Includes all features and functionalities that allow for this app to work."
    }
  ],
};

export const PersonalInformation = {
  id: '53',
  concept: 'Personal Information',
  description: [
    {
      text: "Personal Information refers to data that identifies or can be used to identify an individual, such as their name, address, phone number, email, or financial details. Personal Information can be Public, Semi-Public, and Private."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - The personal information relates to a user’s name, address, credit card information, email, and donation amounts."
    },
    {
      text: "Bright Sky App - A user's personal information is the device IDs and interaction logs. These can be used to identify the device and know a user's activity patterns."
    }
  ],
};

export const OwnerController = {
  id: '54',
  concept: 'Owner | Controller',
  description: [
    {
      text: "An Owner or Controller is the entity that holds and has authority over the information."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - The World Food Programme (WFP) is the owner/controller of the user data."
    },
    {
      text: "Bright Sky App - Developed by Hestia, and supported by the Vodafone Foundation and Thames Valley Partnership. Hestia is the owner/controller of the user data."
    }
  ],
};

export const ThirdParty = {
  id: '55',
  concept: 'Third Party',
  description: [
    {
      text: "A Third Party is an entity separate from the Owner/Controller that has an interest or influence in the information."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - A third party is the payment service provider, Braintree/Paypal, that processes donations."
    },
    {
      text: "Bright Sky App - There are no third parties."
    },  
  ],
};

export const Trust = {
  id: '56',
  concept: 'Trust',
  description: [
    {
      text: "Trust occurs when an individual believes that the system will do what it is supposed to do and won't misuse the information that it is given."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Is WFP’s fundraising app, the world's largest humanitarian agency. That alone makes people trust the app. The existing protections to guarantee security when using the app also help to build trust."
    },
    {
      text: "Bright Sky App - Being developed by Hestia, gives users reassurance of the legitimacy of the app. This is because Hestia is a well-known charity organization."
    }
  ],
};

export const Accountability = {
  id: '57',
  concept: 'Accountability',
  description: [
    {
      text: "Accountability involves giving information owners the power to hold users responsible for their actions with the information. Accountability is assessed using the principle of non-repudiation, the ability of not being able to deny the authorship of an action. This analysis depends on the adoption relationship, in other words, if someone is assigned a task and doesn’t accept it, it could cause a situation where they deny participation, which would raise a non-repudiation violation."
    },
    {
      text: "In software systems, accountability ensures that all actions and transactions can be traced back to the initiators. This means monitoring user activities, keeping records of all interactions with the system, and thus ensuring that users cannot deny their actions. Furthermore, it involves making sure the system does its duties correctly and registers its actions to prevent and resolve issues."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Users are responsible for the information they provide regarding payment. There are also features in place that shows users information about their donations, tracking contributions. On the other hand, the app must donate where the user wants to, any deviance from that will break the user’s intentions and the app could be held accountable for their action of taking advantage of the user’s money."
    },
    {
      text: "Bright Sky App - Users must only report true events, any attempt to use the application as a prank would be unethical. Users are responsible for reporting abuse accurately and providing the needed information."
    }
  ],
};

export const Transparency = {
  id: '58',
  concept: 'Transparency',
  description: [
    {
      text: "Transparency can be defined as the availability of information about an actor allowing other actors to monitor the workings or performance of this actor. In other words, it’s clear visibility of system operations and knowledge of who and why an owner’s personal information is being used."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Provides clear visibility of their data so that donors know that their money is being spent where they claim."
    },
    {
      text: "Bright Sky App - Informs users clearly on how the app works and its policy regarding user data when using the app. It tells users the information collected, and which actions a user makes that are recorded."
    }
  ],
};

export const Honesty = {
  id: '59',
  concept: 'Honesty',
  description: [
    {
      text: "Honesty is an essential component of trust. A computing professional should be transparent and provide full disclosure of all pertinent system limitations and potential problems. Making deliberately false or misleading claims, fabricating, or falsifying data, and other dishonest conduct are violations of the Code."
    },
    {
      text: "Honesty is when there is a truthful representation of software, particularly about the software’s capabilities, limitations, and any possible problems."
    },
  ],
  requirement: [
    {
      text: "ShareTheMeal App - Promotes honesty and builds credibility by showing a truthful representation of the results of the operation to users."
    },
    {
      text: "Bright Sky App - Demonstrates honesty by clarifying to the user exactly what the app does and how it does it, informing about its features. It should also avoid exaggerations about the effectiveness of the app in aiding in abuse cases."
    }
  ],
};

const ConceptsData = {
  //Universalism Section
  Universalism,
  UniversalismRequirement,
  Equality,
  SocialJustice,
  Broadminded,
  Wisdom,
  //Software System Section
  SoftwareSystem,
  //Human Section
  Human,
  //Equality Section
  SocialSustainability,
  SocialCohesion,
  NeedsSatisfaction,
  Community,
  SocialEquality,
  Fairness,
  HumanRight,
  FairSalary,
  Discrimination,
  FairTreatment,
  SocioculturalEquity,
  Compatibility,
  Device,
  OperatingSystem,
  Hardware,
  Network,
  Education,
  Knowledge,
  GenderEquity,
  Accessibility,
  AssistiveTechnology,
  Disability,
  //Culture Section
  Culture,
  Norm,
  Value,
  Action,
  Ritual,
  Custom,
  SocialEnvironment,
  SocialInteraction,
  //Security Section
  Security,
  SecurityRequirement,
  SecurityMechanism,
  SecurityRisk,
  Threat,
  Attack,
  Harm,
  Vulnerability,
  Asset,
  Resource,
  Privacy,
  PrivacyMechanism,
  Constraint,
  Context,
  PersonalInformation,
  OwnerController,
  ThirdParty,
  Trust,
  Accountability,
  Transparency,
  Honesty,
};

export default ConceptsData;