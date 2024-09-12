/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: constants.js
   Version: I
   Creation: 02/06/2023
   Last modification: 18/12/2023
*/

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
  faReact,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  yelpsy,
  milk,
  fnf,
  avatar,
  firebaseIcon,
  mongodbIcon,
  typeScriptIcon,
  expressIcon,
  pairIcon,
  edgar,
  persona
} from '../assets';

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  awsIcon,
  javaIcon,
  gitIcon,
  githubIcon,
  psqlIcon,
  eslintIcon,
  pyIcon,
  viteIcon,
  nodeIcon,
  raspIcon,
  neoIcon,
  figmaIcon,
  avatar,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello! My name is Tan, a 24-year-old full-stack web developer from the US. My journey in technology is fueled by an insatiable curiosity and a desire to create solutions that bridge the gap between complexity and user-friendliness.",
    
    "When I'm not coding or catching up on the latest tech trends, you'll find me immersed in a good book or experimenting with new recipes in the kitchen. Gaming also holds a special place in my heart, offering both a challenge and an escape.",
    
    "I'm passionate about leveraging my skills to collaborate on projects that are not only innovative but also make a meaningful impact. Your presence here is greatly valued, and I'm excited to share my work and story with you.",
  ],
};

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'skills',
    title: 'Skills',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const projects = [
  {
    name: 'Yelpsy',
    description: 'Yelpsy transforms the Etsy concept into a vibrant online food marketplace, where anyone can sell or buy unique culinary delights. Skip the restaurant lines—Yelpsy brings the dining experience straight to your doorstep. Dive into a world of flavors by buying or selling food online today!',
    image: yelpsy,
    source_code_link: 'https://github.com/Tan0699/Yelpsy',
    demo_link: 'https://yelpsy.onrender.com/',
  },
  {
    name: "Nuclear Recall",
    description: 'Nuclear Recall, a Remember the Milk clone, is a productivity / To-Do list platform designed for people who need help remembering things. Create a To-Do list, add a task, and make notes so you can keep your head on straight. Once complete with the task, mark it as complete and move on!',
    image: milk,
    source_code_link: 'https://github.com/lamarjd/Dont-Forget-The-Milk',
    demo_link: 'https://nuclear-recall.onrender.com/',
  },
  {
    name: 'FnF',
    description: 'My very first project. This service allows for people to better accomodate themselves when they are away from home. FnF is a spinoff of their application, why rent a home with no company when you can rent one with friends? Book a spot here now!',
    image: fnf,
    source_code_link: 'https://github.com/Tan0699/fnf--Airbnb-Clone',
    demo_link: 'https://fnf.onrender.com/',
  },
];
const experiences = [
  {
    name: 'Full-Stack Developer - Afterflea',
    date:"December 2023 - Current",
    description: 'Engaged in the development of a cutting-edge social media platform, I contributed to both frontend and backend tasks using a modern tech stack including MongoDB, FireBase, TypeScript, React, and Tailwind CSS. Implementing AI-generated conversations and key social media features, such as feed algorithms and messaging systems, enhanced the platforms functionality. This involvement facilitated enriched user engagement experiences, leveraging machine learning to mimic real-life interactions based on user personas.',
    image: persona,
    // source_code_link: 'https://github.com/Tan0699/Yelpsy',
    demo_link: 'https://personanet.app/',
  },
  {
    name: "Software Developer - AskEdgar",
    date:"March 2023 - November 2023",
    description: 'As a Software Developer , I collaborated closely with a client to develop a startup-focused web application tailored for traders and investors. With a primary focus on frontend development using React, I ensured an intuitive user interface for accessing and analyzing company filings. Additionally, I integrated machine learning capabilities into the backend with Python Flask, enabling effective user query responses. Regular client communication ensured alignment with their vision throughout the project.',
    image: edgar,
    // source_code_link: 'https://github.com/lamarjd/Dont-Forget-The-Milk',
    demo_link: 'https://www.askedgar.io/',
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: 'html',
    title: 'HTML',
    icon: htmlIcon,
    description:
      'I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.',
  },
  {
    id: 'css',
    title: 'CSS',
    icon: cssIcon,
    description:
    'I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.',
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    icon: jsIcon,
    description:
    'I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.',
  },
  {
    id: 'react',
    title: 'React',
    icon: reactIcon,
    description:
      'I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.',
  },
  {
    id: 'aws',
    title: 'Amazon Web Services',
    icon: awsIcon,
    description:
      'I am proficient in working with leveraging the power of cloud computing for scalable and reliable infrastructure.',
  },
  {
    id: 'git',
    title: 'Git',
    icon: gitIcon,
    description:
    'I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.',
  },
  {
    id: 'github',
    title: 'GitHub',
    icon: githubIcon,
    description:
      'I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.',
  },
  {
    id: 'psql',
    title: 'Postgresql',
    icon: psqlIcon,
    description:
      'I have a strong command of PostgreSQL, encompassing a wide range of skills such as database normalization, triggers, front-end connectivity, and data analysis using software like Power BI.',
  },
  {
    id: 'py',
    title: 'Python',
    icon: pyIcon,
    description:
      'With 2 years of Python experience, I am adept at creating and testing APIS.',
  },
  {
    id: 'node',
    title: 'Node',
    icon: nodeIcon,
    description:
      'When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.',
  },
  
  {
    id: 'eslint',
    title: 'Eslint',
    icon: eslintIcon,
    description:
      'I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.',
  },
  {
    id: 'firebase',
    title: 'Firebase',
    icon: firebaseIcon,
    description:
    "I excel in leveraging Firebase to build and scale apps quickly, using its powerful suite of tools including database management, authentication, and hosting services for a streamlined development process.",  },
  {
    id: 'mongodb',
    title: 'Mongodb',
    icon: mongodbIcon,
    description:
    "My skills in MongoDB extend to designing schema, performing CRUD operations, and utilizing aggregation frameworks for efficient data storage and retrieval in web applications."
  },
  {
    id: 'typeScript',
    title: 'Typescript',
    icon: typeScriptIcon,
    description:
    "I am proficient in TypeScript, employing its static typing features to write more reliable and maintainable code for large-scale applications, ensuring a robust foundation for web development projects."
  },
  {
    id: 'express',
    title: 'Express',
    icon: expressIcon,
    description:
    "I have comprehensive expertise in using Express.js to create robust server-side applications and RESTful APIs, optimizing app performance and scalability."
  },
  {
    id: 'pairprogram',
    title: 'Pair Programming',
    icon: pairIcon,
    description:
    "I am experienced in Pair Programming, enhancing code quality and team learning through collaboration. This practice has sharpened my coding skills and improved my ability to debug and review code efficiently."
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export {
  media,
  introduction,
  projects,
  memoji,
  skills,
  markerSvg,
  icons,
  experiences
};
