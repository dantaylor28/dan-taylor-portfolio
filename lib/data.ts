import React from "react";
import ProjectImg from "../public/project_img.png";
import FoodBlog from "../public/food_blog.png";
import JsQuiz from "../public/js_quiz.png";
import ChatApp from "../public/messenger_app.png";
import {
  PiBriefcaseLight,
  PiGraduationCapLight,
  PiCodeLight,
  PiAirplaneTiltLight,
  PiChartLineUpLight,
  PiSuitcaseRollingLight,
  PiCodeBlockLight,
  PiUsersLight,
  PiTShirtLight,
} from "react-icons/pi";

export const links = [
  {
    name: "Home",
    hashtag: "#home",
  },
  {
    name: "About Me",
    hashtag: "#aboutme",
  },
  {
    name: "Skills",
    hashtag: "#skills",
  },
  {
    name: "Projects",
    hashtag: "#projects",
  },
  {
    name: "Experience",
    hashtag: "#experience",
  },
  {
    name: "Contact Me",
    hashtag: "#contactme",
  },
] as const;

export const projectData = [
  {
    title: "ChatApp",
    status: "Deployed live on Render",
    description:
      "A full-stack messenger application that allows users to send and receive text messages and images with friends and family in real time. Built with a Node.js backend providing CRUD functionality for users and messages, alongside a React frontend with user authentication and Tailwind CSS styling.",
    image: ChatApp,
    tags: [
      "ReactJS",
      "NodeJS",
      "MongoDB",
      "ExpressJS",
      "TailwindCSS",
      "Socket.io",
    ],
    liveUrl: "https://messenger-app-najg.onrender.com/",
    repoUrl: "https://github.com/dantaylor28/messenger-app",
  },
  {
    title: "Polaroid",
    status: "Deployed live on Heroku",
    description:
      "An image-sharing social media application where users can explore, share and manage posts from their everyday lives. Features include pinning posts, leaving comments and following other users, with a custom backend API providing CRUD functionality and user authentication.",
    image: ProjectImg,
    tags: ["ReactJS", "Django", "Rest API", "Bootstrap", "CSS", "PostgreSQL"],
    liveUrl: "https://pp5-frontend-social-app.herokuapp.com/",
    repoUrl: "https://github.com/dantaylor28/polaroid-social-media-frontend",
  },
  {
    title: "Harry Potter Quiz",
    status: "Deployed live on GitHub Pages",
    description:
      "An interactive quiz game built with vanilla JavaScript, HTML and custom CSS. Features include sound effects, a countdown timer and smooth page transitions across 20 Harry Potter-themed questions.",
    image: JsQuiz,
    tags: ["Javascript", "HTML", "CSS"],
    liveUrl: "https://dantaylor28.github.io/harry_potter_quiz/",
    repoUrl: "https://github.com/dantaylor28/harry_potter_quiz.git",
  },
  {
    title: "The Food Blog",
    status: "Deployed live on Heroku",
    description:
      "A full-stack Django application where users can discover and share recipes along with other culinary posts. Features include filtering posts by category, liking and commenting on posts, and an integrated admin panel for managing blog content and data.",
    image: FoodBlog,
    tags: ["Python", "Django", "Bootstrap", "HTML", "CSS", "PostgreSQL"],
    liveUrl: "https://pp4-food-blog.herokuapp.com/",
    repoUrl: "https://github.com/dantaylor28/the-food-blog",
  },
] as const;

export const frontendSkills = [
  { icon: "icon-[logos--react] text-[2.2rem]", language: "React.js" },
  { icon: "icon-[logos--nextjs-icon] text-[2.4rem]", language: "Next.js" },
  { icon: "icon-[logos--javascript] text-[2rem]", language: "Javascript" },
  { icon: "icon-[logos--typescript-icon] text-[2rem]", language: "Typescript" },
  { icon: "icon-[logos--html-5] text-[2.3rem]", language: "HTML5" },
  { icon: "icon-[logos--css-3] text-[2.3rem]", language: "CSS3" },
  { icon: "icon-[logos--bootstrap] text-[2rem]", language: "Bootstrap" },
  {
    icon: "icon-[logos--tailwindcss-icon] text-[1.7rem]",
    language: "TailwindCSS",
  },
] as const;

export const backendSkills = [
  { icon: "icon-[logos--nodejs-icon] text-[2.4rem]", language: "Node.js" },
  { icon: "icon-[logos--python] text-[2.3rem]", language: "Python" },
  { icon: "icon-[logos--django-icon] text-[2rem]", language: "Django" },
  { icon: "icon-[logos--postgresql] text-[2.2rem]", language: "PostgreSQL" },
  { icon: "icon-[logos--mysql-icon] text-[2.1rem]", language: "MySQL" },
  { icon: "icon-[logos--mongodb-icon] text-[2.5rem]", language: "MongoDB" },
] as const;

export const toolsAndTestingSkills = [
  { icon: "icon-[logos--docker-icon] text-[2rem]", language: "Docker" },
  { icon: "icon-[logos--git-icon] text-[2.5rem]", language: "Git" },
  { icon: "icon-[logos--github-icon] text-[2.4rem]", language: "Github" },
  {
    icon: "icon-[logos--visual-studio-code] text-[2.2rem]",
    language: "VSCode",
  },
  { icon: "icon-[logos--heroku-icon] text-[2rem]", language: "Heroku" },
  { icon: "icon-[logos--vercel-icon] text-[1.8rem]", language: "Vercel" },
  { icon: "icon-[logos--prettier] text-[2rem]", language: "Prettier" },
  { icon: "icon-[logos--eslint] text-[2.2rem]", language: "ESLint" },
  { icon: "icon-[logos--jest] text-[2.2rem]", language: "Jest" },
  {
    icon: "icon-[logos--testing-library] text-[2.2rem]",
    language: "React Testing Library",
  },
  { icon: "icon-[logos--postman-icon] text-[2.2rem]", language: "Postman" },
] as const;

export const experienceData = [
  {
    title: "Open For Opportunities",
    description:
      "Actively seeking my first software development role, where I can contribute to a development team, apply my technical skills and continue growing as a developer.",
    location: "Göteborg, Sweden",
    date: "2026",
    icon: React.createElement(PiBriefcaseLight),
  },
  {
    title: "Building My Development Portfolio",
    description:
      "Building practical experience through personal projects using React, Next.js, TypeScript and backend APIs.",
    location: "Personal Projects",
    date: "2023-2026",
    icon: React.createElement(PiCodeBlockLight),
  },
  {
    title: "Graduated From Code Institute",
    description:
      "Completed a year of study covering full-stack web development, building applications and developing skills across frontend and backend technologies.",
    location: "Full Stack Software Development",
    date: "2023",
    icon: React.createElement(PiGraduationCapLight),
  },
  {
    title: "Floor Manager | Weekday",
    description:
      "Lead and support the store team, with responsibility for sales performance, customer experience and daily operations.",
    location: "Göteborg, Sweden",
    date: "April 2024 - Current",
    icon: React.createElement(PiChartLineUpLight),
  },
  {
    title: "Sales & Operational Keyholder | Superdry",
    description:
      "Managed store operations, supported team performance and delivered customer service in a fast-paced retail environment.",
    location: "Göteborg, Sweden",
    date: "April 2017 - April 2024",
    icon: React.createElement(PiTShirtLight),
  },
  {
    title: "Hello, World!",
    description:
      "Wrote my first line of HTML and discovered a new interest in building for the web, sparking my journey into software development.",
    location: "Stockholm, Sweden",
    date: "September 2021",
    icon: React.createElement(PiCodeLight),
  },
  {
    title: "Moved to Sweden",
    description:
      "Made the move from the UK to Gothenburg, Sweden, where I've continued to build my life and career.",
    location: "UK -> Sweden",
    date: "March 2017",
    icon: React.createElement(PiSuitcaseRollingLight),
  },
  {
    title: "Career Break To Travel",
    description:
      "Backpacked my way through 19 countries solo, starting in Thailand and ending 9 months later in the Caribbean.",
    location: "SE Asia -> Europe -> Central America",
    date: "2016",
    icon: React.createElement(PiAirplaneTiltLight),
  },
  {
    title: "Team Leader | Co-Operative",
    description:
      "Developed my leadership, teamwork and operational management skills while coordinating store and delivery operations.",
    location: "Wolverhampton, England",
    date: "2012 - 2017",
    icon: React.createElement(PiUsersLight),
  },
] as const;
