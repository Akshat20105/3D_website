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
  bluestock,
  threejs,
  Akshara,
  ignition,
  temp,
  kookar,
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
    title: "Unity Game Developer",
    icon: mobile,
  },
  {
    title: "3D Artist",
    icon: backend,
  },
  {
    title: "Civil Engineer",
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
  {
    name: "Three JS",
    icon: threejs,
  },
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
    title: "Unity Game Developer",
    company_name: "Game Development Club, IIT Kanpur",
    icon: starbucks,
    iconBg: "#CCCCCC",
    date: "June 2023 - March 2024",
    points: [
      "Developed and optimized interactive games using Unity and C# for both web and desktop platforms.",
      "Implemented advanced gameplay mechanics, multiplayer networking, and responsive UI systems.",
      "Collaborated with designers and artists to integrate assets and ensure a seamless user experience.",
      "Led code reviews and mentored juniors on best practices in game development.",
    ],
  },
  {
    title: "3D Artist",
    company_name: "Design and Animation club, IIT Kanpur",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "June 2023 - March 2024",
    points: [
      "Designed and modeled high-quality 3D assets and environments for games and animations.",
      "Specialized in character rigging, animation, and texturing using Blender and Unity.",
      "Worked closely with developers to ensure smooth asset integration and visual consistency."
    ],
  },
  {
    title: "Web Developer",
    company_name: "Blustock Pvt. Ltd.",
    icon: bluestock,
    iconBg: "#FFFFFF",
    date: "Apr 2025 - Jun 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Delegating tasks as a Team Lead and managing project timelines to ensure timely delivery of features.",
    ],
  },
  {
    title: "Product Analyst",
    company_name: "Kookar AI",
    icon: kookar,
    iconBg: "#E6DEDD",
    date: "May 2025 - Aug 2025",
    points: [
      "Analyzing user data and product performance to identify areas for improvement.",
      "Collaborating with product managers and developers to define product requirements and specifications.",
      "Setting up and maintaining data pipelines for real-time analytics.",
      "Conducting A/B testing and user research to validate product hypotheses.",
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Ignition Evade",
    description:
      "2D platformer Game, developed for Inter-IIT Tech meet 12.0 .",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
      {
        name: "FL Studio",
        color: "pink-text-gradient",
      },
    ],
    image: ignition,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chess Bot",
    description:
      "Chess game which allows P v/s P, P v/s Bot and Bot v/s Bot game modes, Bot evaluates the chessboard and plays the most optimized move, allows player to export the game to lichess.com.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: " C#",
        color: "green-text-gradient",
      },
      // {
      //   name: " ",
      //   color: "pink-text-gradient",
      // },
    ],
    // image: jobit,
    image: Akshara,
    source_code_link: "https://github.com/Akshat20105/ChessBot_IITK",
  },
  {
    name: "Temperature zones",
    description:
      "It's an educational game, developed for Vizuara, for middle to high school students, teaching them about Earth's temperature zones through interactive exploration.",
    tags: [
      {
        name: "Unity",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: "Blender",
        color: "pink-text-gradient",
      },
    ],
    image: temp,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
