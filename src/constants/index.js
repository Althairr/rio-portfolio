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
  express,
  flask,
  laravel,
  mysql,
  php,
  postman,
  python,
  sqlite,
  umn,
  alfagift,
  aerofood,
  cds,
  hc_web,
  stock_prediction,
  threejs,
  msoffice,
  cs50p,
  cs50sql,
  intermediate,
  softdev,
  thesis,
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
    title: "QA / Software Tester",
    icon: mobile,
  },
  {
    title: "Data & Software",
    icon: backend,
  },
  {
    title: "Laboratory Assistant",
    icon: creator,
  },
];

const technologies = [
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Express.js",
    icon: express,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Microsoft Office",
    icon: msoffice,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Quality Assurance Intern",
    company_name: "PT. Global Loyalty Indonesia (Alfagift)",
    icon: alfagift,
    iconBg: "#E6DEDD",
    date: "August 2025 - January 2026",
    points: [
      "Performed manual and API testing using Postman to validate backend endpoints and business logic workflows.",
      "Verified database accuracy and consistency using DBeaver, MongoDB, and SQL queries.",
      "Assisted regression testing and developed basic automation scripts to improve bug detection coverage.",
    ],
  },
  {
    title: "Website Developer Intern",
    company_name: "Aerofood ACS",
    icon: aerofood,
    iconBg: "#E6DEDD",
    date: "December 2024 - August 2025",
    points: [
      "Developed internal enterprise systems including an executive KPI dashboard and employee management platform.",
      "Built backend features and data-driven workflows using Laravel and MySQL.",
      "Improved reporting and operational efficiency by approximately 20–30%.",
      "Enhanced UI structure and navigation to improve accessibility and usability for non-technical staff.",
    ],
  },
  {
    title: "Laboratory Assistant",
    company_name: "Universitas Multimedia Nusantara",
    icon: umn,
    iconBg: "#E6DEDD",
    date: "February 2024 - December 2025",
    points: [
      "Developed structured learning modules covering Node.js fundamentals and the Express.js framework.",
      "Assisted students in database systems and algorithm concepts.",
      "Provided hands-on mentoring and laboratory support, improving student practical performance by approximately 15–20%.",
    ],
  },
  {
    title: "Coordinator - PPIF 2024",
    company_name: "Universitas Multimedia Nusantara",
    icon: umn,
    iconBg: "#E6DEDD",
    date: "January 2024 - August 2024",
    points: [
      "Led a team of 30 members in organizing the annual PPIF 2024 event.",
      "Coordinated communication and collaboration between departments.",
      "Collaborated with more than 20 coordinators to plan and manage an event attended by approximately 300 people.",
    ],
  },
];

// const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects = [
  {
    name: "Executive KPI Dashboard",
    type: "Enterprise Dashboard",
    description:
      "Internal enterprise dashboard developed to visualize and monitor executive KPIs, helping management access and analyze key performance indicators more efficiently.",
    tags: [
      {
        name: "laravel",
        color: "blue-text-gradient",
      },
      {
        name: "livewire",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
    ],
    image: cds,
  },

  {
    name: "Employee Promotion System",
    type: "HR Management System",
    description:
      "Internal web application designed to support employee promotion processes, including data management and administrative workflows for HR operations.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: hc_web,
  },

  {
    name: "Stock Prediction & Analysis",
    type: "Data Science Application",
    description:
      "Stock analysis application that combines stock prediction with VADER sentiment analysis to provide insights from market data and related textual information.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "machine-learning",
        color: "pink-text-gradient",
      },
      {
        name: "streamlit",
        color: "blue-text-gradient",
      },
    ],
    image: stock_prediction,
  },
  {
    name: "Kickstarter Campaign Prediction",
    type: "Machine Learning Research",
    description:
      "Machine learning research project focused on predicting Kickstarter campaign success using Random Forest and Logistic Regression algorithms.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "random-forest",
        color: "green-text-gradient",
      },
      {
        name: "logistic-regression",
        color: "pink-text-gradient",
      },
    ],
    image: thesis,
    paper_link: "https://kc.umn.ac.id/id/eprint/47290/",
  },
];

const certifications = [
  {
    title: "TOEIC Listening & Reading",
    issuer: "ETS",
    date: "2025",
    pdf: null,
    score: "880",
  },
  {
    title: "IT Specialist - Software Development",
    issuer: "Certiport Pearson VUE",
    date: "2026",
    pdf: softdev,
  },
  {
    title: "CS50's Introduction to SQL",
    issuer: "Harvard University",
    date: "2025",
    pdf: cs50sql,
  },
  {
    title: "CS50's Introduction to Programming with Python",
    issuer: "Harvard University",
    date: "2024",
    pdf: cs50p,
  },
  {
    title: "Intermediate Python",
    issuer: "Sololearn",
    date: "2024",
    pdf: intermediate,
  },
];

export { services, technologies, experiences, projects, certifications };