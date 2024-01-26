import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  mysql,
  postgresql,
  linux,
  github_tech,
  socket,
  eximerp,
  guzarpost,
  marketlochin,
  exim_logo,
  guzar_logo,
  lochin_logo,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React  Developer",
    icon: mobile,
  },
  {
    title: "NodeJs Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Redux Toolkit",
  //   icon: redux,
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "PostgreSql",
    icon: postgresql,
  },
  {
    name: "Socket.IO",
    icon: socket,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Github",
    icon: github_tech,
  },
  {
    name: "Figma",
    icon: figma,
  },
  // {
  //   name: "Docker",
  //   icon: docker,
  // },
  {
    name: "Linux",
    icon: linux,
  },
];

const experiences = [
  {
    title: "JavaScript Developer",
    company_name: "MagicSoft Pro",
    icon: starbucks,
    iconBg: "#383E56",
    date: "November 2021 - April 2023",
    points: [
      "Creating API.",
      "Designing and implementing low-latency, high-availability, and performant applications.",
      "Integrating user-facing elements developed by front-end developers with server-side logic.",
      "Implementing security and data protection. Developing and deploying.",
      "I have participated in several large projects in this company. Among them are tuitfilemanagementsystem.uz, magicagro.uz and one of our biggest projects, eximerp.uz. I participated in these projects mainly in the backend part of the site architecture, database management, registration part, file upload and live performance.",
    ],
  },
  {
    title: "Nodejs Backend Developer, TeamLead",
    company_name: "Kervanyo'l ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "May 2023 - October 2023",
    points: [
      "Creating API. Building website architecture.",
      "Team management.Researching, designing, implementing.Testing and evaluating new programs.",
      "Writing and implementing efficient code. Determining operational practicality.",
      "Training users. Working closely with other developers, UX designers, business and systems analysts.",
      "I started working in this company when the eximerp.uz project was transferred to this company and participated in the development of the eximerp.uz project. We have implemented one more medium-level project at Kervanyol Technologies. In the guzarpost.uz project, I did all the work in the project architecture, team management and backend from the beginning to the end.",
    ],
  },
  {
    title: "Freelancer, Full Stack Developer",
    company_name: "Upwork",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2023 - Present",
    points: [
      "I am currently a full stack developer. Another big project was completed during my freelancing career. In the marketlochin.uz project, I made the site architecture and the backend part myself. I also have a few small projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "EximErp",
    description:
      "This project looks like a simple project, but it is a large ERP system. The project has a 12-step user interface. The project is based on the idea of automating the customs system of Uzbekistan. I did the site architecture, registration, file sharing and integration with external projects part of this project.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "socket.io",
        color: "grey-text-gradient",
      },
    ],
    image: eximerp,
    source_code_link: "https://eximerp.com",
    project_logo: exim_logo,
  },
  {
    name: "GuzarPost",
    description:
      "This project is also a large ERP system with 16 steps. The project is aimed at automating the logistics industry, so that users can get their cargo anywhere in the world by applying to the site. I did the site architecture and backend part of this project myself from start to finish. That is, it is the first big real project that I have done alone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: guzarpost,
    source_code_link: "https://guzarexpress.uz",
    project_logo: guzar_logo,
  },
  {
    name: "Lochin Market",
    description:
      "This project is a CRM system designed to automate the internal structure of the market. Through this project, users can manage their markets as they wish. That is, which seller is working, which product is in high or low demand, how much is left of which product, the original price of the product, the selling price in dollar and soum currencies, etc. One of the big innovations in the project is that the credit system has been added to the project. I did the architecture and backend part of this project from the beginning to the end. (For testing https://test-market-nine.vercel.app/, https://test-market-admin.vercel.app).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "blue-text-gradient",
      },
    ],
    image: marketlochin,
    source_code_link: "https://marketlochin.uz",
    project_logo: lochin_logo,
  },
];

export { services, technologies, experiences, testimonials, projects };
