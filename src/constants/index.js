import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
} from "../assets";

import recipie from '../assets/recipie.png';
import imageupload from '../assets/imageupload.png';
import chat from '../assets/chat.png';


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
    title: "Excellent Learner",
    icon: mobile,
  },
  {
    title: "Django Developer",
    icon: backend,
  },
  {
    title: "Flutter Developer",
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
    name: "React JS",
    icon: reactjs,
  },


  {
    name: "Node JS",
    icon: nodejs,
  },


  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const experiences = [
  {
    title: "Node web developer",
    company_name: "Endearing Design Studios pvt ltd.",
    icon: nodejs,
    iconBg: "#383E56",
    date: "August 2023 - Feb 2024",
    points: [
      "Developing and maintaining web applications using node.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing Face recognition over large data and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Flutter",
    company_name: "Self Learner",
    icon: mobile,
    iconBg: "#E6DEDD",
    date: "2023 - present",
    points: [
      "I am new at learning flutter my aim is to create the future proof applications on cross platforms.",
      "Collaborating with cross-functional teams including designers, product managers, and other students and experts to create high-quality products.",
      "Implementing responsive design and ensuring cross-device compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Development",
    company_name: "Django web apps",
    icon: html,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Yash proved me wrong.",
    name: "Khushi sen ",
    designation: "Student",
    company: "MIT",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Mudit soral",
    designation: "Student",
    company: "MIT",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Yash optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Rajat Jain",
    designation: "Developer",
    company: "Kota junction",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Image Uploader webiste",
    description:
      "It was an website in which users can upload the various images on website and can view it . It has simple user interface where user can see their uploaded images this can also be work as cloud with the help of django backend . ",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "sqlite3",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: imageupload,
    source_code_link: "https://github.com/yashyc7/Image-Uploader-website.git",
  },
  {
    name: "Recipie adder website",
    description:
      "Web application that enables users to log in into their accounts using authentication process and in their sepreate accounts they can create their recipies and modify them with CRUD opereations whenever they want.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: recipie,
    source_code_link: "https://github.com/yashyc7/django-recipie-adder-website.git",
  },
  {
    name: "chat application",
    description:
      "A chat application using the websockets for proper syncing of messages in full duplex in realtime,it requires nothing rather than room id and your username.",
    tags: [
      {
        name: "websocket",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: chat,
    source_code_link: "https://github.com/yashyc7?tab=repositories",
  },
];

export { services, technologies, experiences, testimonials, projects };
