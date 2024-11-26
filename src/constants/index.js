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
  {
    id: "Resume",
    title: "Resume",
    isDownloadable: true,
  },
];

const services = [
  {
    title: "Solution Architect",
    icon: web,
  },
  {
    title: "Application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Senior Solution Architect",
    company_name: "Project 1: Tophat",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "Designing and implementation of public and private facing websites on AWS Cloud.",
      "Migrating from On-Premise Infrastructure to AWS Cloud.",
      "Implemented REST API using Node.js core, Express.js.",
      "Involved in responsive design and developed a single ISOMORPHIC responsive website that could be served to desktop, AWS, CI/CD, DevOps, RDS, Express.Js, AngularJS, Node.js, PostgreSQL, MongoDB, Kubernetes, Tablets and mobile users using React JS.",
    ],
  },
  {
    company_name: "Project 2: EBBY",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "Responsible for implementing UI mock-ups, integrating third party REACT libraries, and handling/creating redux store data.",
      "Collaborating with Designed and designed highly available, cost effective and fault tolerant systems using multiple EC2 instances, Auto Scaling groups, Elastic Load Balancers and AMIs.-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Provided potential technical workarounds or resolutions via integration in technical discussion, knowledge base articles and product documentations.",
      "Responsible for creating the IAM users, roles and policies for different AWS Users as per requirements.",
    ],
  },
  {
    company_name: "Project 3: TBC",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "Design highly available, cost-effective infrastructure using Amazon Web Services such as EC2, Auto scaling Group, RDS and Route53.",
      "Implemented REST API using Node.js, AWS, CI/CD, DevOps, RDS, Express.Js, AngularJS, Node.js, PostgreSQL, React Native, MongoDB, Kubernetes, and Express.js.",
      "Configured Auto scaling groups and Elastic Load Balancer to scale with traffic.",
      "Implemented AS2 protocol for exchange or orders using AWS, CI/CD, DevOps, RDS, Express.Js, AngularJS, Node.js, PostgreSQL, MongoDB, Kubernetes, IBM Data power.",
    ],
  },
  {
    company_name: "Project 4: GO-ON",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Used Event Hub for streaming, Azure functions to trigger web services when files were dropped on Blob Storage.",
      "Evaluated Nonfunctional requirements (NFR) such as RTO, AWS, CI/CD, DevOps, RDS, EXPRESS.JS, ANGULARJS, NODE.JS, PostgreSQL, MongoDB, Kubernetes, RPO for DR, number of concurrent users, uptime to design solution.",
      "Used cross walk to query table (IMI) in Mark logic. Documented design using IBM Rational System Architect.",
      "Participated in reviewing and approving user stories using Scaled agile framework. Designed solution to sync account information in AEPAYS, ACAS (claim adjudication Platform) using web services.",
    ],
  },
  {
    company_name: "Project 5: GO-ON",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "Used Event Hub for streaming, Azure functions to trigger web services when files were dropped on Blob Storage.",
      "Evaluated Nonfunctional requirements (NFR) such as RTO, AWS, CI/CD, DevOps, RDS, EXPRESS.JS, ANGULARJS, NODE.JS, PostgreSQL, MongoDB, Kubernetes, RPO for DR, number of concurrent users, uptime to design solution.",
      "Used cross walk to query table (IMI) in Mark logic. Documented design using IBM Rational System Architect.",
      "Participated in reviewing and approving user stories using Scaled agile framework. Designed solution to sync account information in AEPAYS, ACAS (claim adjudication Platform) using web services.",
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
    name: "GCP",
    description:
      "Google cloud Certified Professional cloud Architect.",
    tags: [
      {
        name: "BigQuery",
        color: "blue-text-gradient",
      },
      {
        name: "GCP APIs",
        color: "green-text-gradient",
      },
      {
        name: "Disaster Recovery",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Awarded",
    description:
      "Awarded with Master brain award In Tata consultancy services in 2014.",
    tags: [
      {
        name: "Test Data Management",
        color: "blue-text-gradient",
      },
      {
        name: "Data Privacy",
        color: "green-text-gradient",
      },
      {
        name: "Data Masking",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "OCP",
    description:
      "Oracle Certified Professional, Java SE 6 Programmer.",
    tags: [
      {
        name: "Java SE 6",
        color: "blue-text-gradient",
      },
      {
        name: "Application Development",
        color: "green-text-gradient",
      },
      {
        name: "IDE",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "IJCLNLP journal",
    description:
      "Published an international Research paper in IJCLNLP journal.",
    tags: [
      {
        name: "IJCL",
        color: "blue-text-gradient",
      },
      {
        name: "rule-based modeling",
        color: "green-text-gradient",
      },
      {
        name: "INLP",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "MTADAF",
    description:
      "Microsoft Technology Associate Database Administrator Fundamentals.",
    tags: [
      {
        name: "Azure monitor",
        color: "blue-text-gradient",
      },
      {
        name: "Azure data platform",
        color: "green-text-gradient",
      },
      {
        name: "Express route circuits",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "ASA Lotus Notes and Domino 8",
    description:
      "IBM Certified Associate System Administrator Lotus Notes and Domino 8.",
    tags: [
      {
        name: "IManagement of servers",
        color: "blue-text-gradient",
      },
      {
        name: "Defining Domino attributesg",
        color: "green-text-gradient",
      },
      {
        name: "ID Vault",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "Associate Developer",
    description:
      "IBM Certified Associate Developer Rational Application Developer for Web Sphere Software V6.0.",
    tags: [
      {
        name: "Schema Design",
        color: "blue-text-gradient",
      },
      {
        name: "Aggregation Framework",
        color: "green-text-gradient",
      },
      {
        name: "Atomic changes",
        color: "pink-text-gradient",
      },
    ],
  },
  {
    name: "M101J",
    description:
      "MongoDB for Java Developers, MongoDB Inc.",
    tags: [
      {
        name: "Schema Design",
        color: "blue-text-gradient",
      },
      {
        name: "Aggregation Framework",
        color: "green-text-gradient",
      },
      {
        name: "Atomic changes",
        color: "pink-text-gradient",
      },
    ],
  },
   {
    name: "DB2 Academic Associate",
    description:
      "BM Certified DB2 Academic Associate DB2 Database & Application Fundamentals.",
    tags: [
      {
        name: " Data Concurrency",
        color: "blue-text-gradient",
      },
      {
        name: "Working with DB2 Data Using SQL",
        color: "green-text-gradient",
      },
      {
        name: "Security",
        color: "pink-text-gradient",
      },
    ],
  },
];

export { services, technologies, experiences, testimonials, projects };
